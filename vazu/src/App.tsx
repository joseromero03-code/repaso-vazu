import useProduct from "./hook/useProduct";
import Card from "./components/Card";

function App() {
  const { producto, filtro, setFiltro } = useProduct();

  return (
    <>
      <h1>Productos</h1>

      <input
        type="text"
        placeholder="Buscar producto"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />

      {producto.map((p) => (
        <Card
          key={p.id}
          title={p.title}
          image={p.images[0]}
          price={p.price}
          description={p.description}
        />
      ))}
    </>
  );
}

export default App;