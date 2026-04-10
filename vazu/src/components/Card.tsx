interface Props {
  title: string;
  price: number;
  description: string;
  image: string
}

function Card({ title, price, description, image }: Props) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", margin: "10px" }}>
      <h3>{title}</h3>
    <img src={image}/>
      <p><strong>Precio:</strong> ${price}</p>
      <p>{description}</p>
    </div>
  );
}

export default Card;