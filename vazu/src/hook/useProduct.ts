import { useState, useEffect } from "react";

interface FakeApi {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: {
    id: number;
    name: string;
  };
}

const useProduct = () => {
  const [producto, setProduct] = useState<FakeApi[]>([]);
  const [filtro, setFiltro] = useState("");
  const [categoria, setCategoria] = useState("Todas");

  const traerInfo = async () => {
    try {
      const respuesta = await fetch("https://api.escuelajs.co/api/v1/products");
      const datos = await respuesta.json();

      const lista: FakeApi[] = datos.map((p: FakeApi) => ({
        id: p.id,
        title: p.title,
        price: p.price,
        description: p.description,
        images: p.images,
        category: {
          id: p.category.id,
          name: p.category.name,
        },
      }));

      setProduct(lista);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    traerInfo();
  }, []);

  const categorias = ["Todas", ...new Set(producto.map((p) => p.category.name))];

  const productFiltrado = producto.filter((p) =>
    p.title.toLowerCase().includes(filtro.toLowerCase())
  ).filter((p) =>
    categoria === "Todas" ? true : p.category.name === categoria
  );

  return {
    producto: productFiltrado,
    filtro,
    setFiltro,
    categorias,
    categoria,
    setCategoria,
  };
};

export default useProduct;