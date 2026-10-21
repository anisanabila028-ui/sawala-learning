
import type { Article } from "../../lib/strapi";
import ArticleCard from "../molecules/articlescard";

type ArticleListProps = {
    articles: Article[];
};

export default function ArticleList({
    articles,
}: ArticleListProps) {
    if (articles.length === 0) {
        return (
            <div className="empty-state">
                <h2>Belum ada artikel</h2>
                <p>
                    Tambahkan artikel melalui dashboard Strapi agar artikel
                    tampil di halaman ini.
                </p>
            </div>
        );
    }

    return (
        <div className="article-grid">
            {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
            ))}
        </div>
    );
}
