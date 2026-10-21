
import Link from "next/link";
import type { Article } from "../../lib/strapi";

type ArticleCardProps = {
    article: Article;
};

export default function ArticleCard({
    article,
}: ArticleCardProps) {
    return (
        <article className="article-card">
            <p className="article-label">ARTIKEL</p>

            <h2>
                <Link href={`/articles/${article.slug}`}>
                    {article.title}
                </Link>
            </h2>

            <p className="article-excerpt">
                {article.excerpt || "Baca artikel ini untuk informasi selengkapnya."}
            </p>

            <Link
                href={`/articles/${article.slug}`}
                className="read-more"
            >
                Baca selengkapnya →
            </Link>
        </article>
    );
}
