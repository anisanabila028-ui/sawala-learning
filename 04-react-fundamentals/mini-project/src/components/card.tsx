
type CardProps = {
    title: string;
    value: number;
    description: string;
};

export default function Card({
    title,
    value,
    description,
}: CardProps) {
    return (
        <div className="card">
            <p className="card-label">{title}</p>
            <h2>{value}</h2>
            <p className="card-description">{description}</p>
        </div>
    );
}
