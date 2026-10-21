
const STRAPI_URL =
    process.env.NEXT_PUBLIC_STRAPI_URL ||
    process.env.STRAPI_URL ||
    "http://localhost:1337";
export type Article = {
    id: number;
    documentId?: string;
    title: string;
    slug: string;
    description?: string;
    excerpt?: string;
    content?: string;
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
};
type StrapiResponse = {
    data: Article[];
};

type SingleArticleResponse = {
    data: Article | null;
};

// Mengambil semua artikel
export async function getArticles(): Promise<Article[]> {
    const response = await fetch(`${STRAPI_URL}/api/articles`, {
        cache: "no-store",
    });

    if (!response.ok) {
        throw new Error("Gagal mengambil artikel dari Strapi");
    }

    const result: StrapiResponse = await response.json();
    return result.data ?? [];
}

// Mengambil satu artikel berdasarkan slug
export async function getArticleBySlug(
    slug: string
): Promise<Article | null> {
    const params = new URLSearchParams({
        "filters[slug][$eq]": slug,
    });

    const response = await fetch(
        `${STRAPI_URL}/api/articles?${params.toString()}`,
        { cache: "no-store" }
    );

    if (!response.ok) {
        throw new Error("Gagal mengambil detail artikel dari Strapi");
    }

    const result: StrapiResponse = await response.json();

    return result.data?.[0] ?? null;
}
