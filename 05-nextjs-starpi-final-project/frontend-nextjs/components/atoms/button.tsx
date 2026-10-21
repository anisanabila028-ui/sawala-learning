
import Link from "next/link";

type ButtonProps = {
    children: React.ReactNode;
    href: string;
};

export default function Button({ children, href }: ButtonProps) {
    return (
        <Link href={href} className="button">
            {children}
        </Link>
    );
}
