import useProduct from "./hook/useProduct";
import Card from "./components/Card";

function App() {
  const {
    producto,
    filtro,
    setFiltro,
    categorias,
    setCategoria
  } = useProduct();

  return (
    <>
      <h1>Productos</h1>

      <input
        type="text"
        placeholder="Buscar producto"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />

      <div>
        {categorias.map((c, index) => (
          <button key={index} onClick={() => setCategoria(c)}>
            {c}
          </button>
        ))}
      </div>

      {producto.map((p) => (
        <Card
          key={p.id}
          title={p.title}
          price={p.price}
          description={p.description}
          image={p.images[0]}
        />
      ))}
    </>
  );
}

export default App;