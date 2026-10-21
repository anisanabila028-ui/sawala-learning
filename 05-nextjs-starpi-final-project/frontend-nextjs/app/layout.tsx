
import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
    title: "Artikel Kita",
    description: "Website artikel menggunakan Next.js dan Strapi",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="id">
            <body>
                <header className="site-header">
                    <div className="header-inner">
                        <a href="/" className="brand">
                            ArtikelKita
                        </a>
                        <span className="header-caption">
                            Baca. Belajar. Berkembang.
                        </span>
                    </div>
                </header>

                {children}

                <footer className="site-footer">
                    © 2026 ArtikelKita · Next.js + Strapi
                </footer>
            </body>
        </html>
    );
}
