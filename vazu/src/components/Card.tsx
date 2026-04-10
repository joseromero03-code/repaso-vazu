import "./card.css";

interface Props {
  title: string;
  price: number;
  description: string;
  image: string;
}

function Card({ title, price, description, image }: Props) {
  return (
    <div
      className="electric-border product-shell"
      style={{ ["--electric-border-color" as any]: "#ff4fd8" }}
    >
      <div className="eb-layers">
        <div className="eb-glow-1"></div>
        <div className="eb-glow-2"></div>
        <div className="eb-background-glow"></div>
      </div>

      <div className="eb-content product-card">
        <div className="product-image-box">
          <img src={image} alt={title} className="product-image" />
        </div>

        <div className="product-body">
          <h5 className="product-title">
            {title}
          </h5>

          <p className="product-price">
            ${price}
          </p>

          <p className="product-description">
            {description.length > 110
              ? description.slice(0, 110) + "..."
              : description}
          </p>

          <button className="btn btn-dark mt-auto">
            Ver producto
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;