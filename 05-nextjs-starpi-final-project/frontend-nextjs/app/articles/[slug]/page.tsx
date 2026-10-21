
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticleBySlug } from "../../../lib/strapi";

type PageProps = {
    params: Promise<{ slug: string }>;
};

export default async function ArticleDetailPage({
    params,
}: PageProps) {
    const { slug } = await params;
    const article = await getArticleBySlug(slug);

    if (!article) {
        notFound();
    }

    return (
        <main className="detail-page">
            <div className="container">
                <article className="detail-card">
                    <Link href="/" className="back-link">
                        ← Kembali ke daftar artikel
                    </Link>

                    <p className="eyebrow">RUANG BACA DIGITAL</p>

                    <h1>{article.title}</h1>

                    {article.publishedAt && (
                        <p className="muted">
                            Dipublikasikan:{" "}
                            {new Date(article.publishedAt).toLocaleDateString("id-ID", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                            })}
                        </p>
                    )}

                    {article.excerpt && (
                        <p className="detail-excerpt">{article.excerpt}</p>
                    )}

                    <div className="article-content">
                        {article.content || "Belum ada isi artikel."}
                    </div>

                    <Link href="/" className="back-button">
                        ← Baca artikel lainnya
                    </Link>
                </article>
            </div>
        </main>
    );
}
