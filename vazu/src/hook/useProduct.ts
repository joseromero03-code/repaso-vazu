import { useState, useEffect } from "react";

interface FakeApi {
  id: number;
  title: string;
  price: number;
  images : string[];
  description: string;
}

const useProduct = () => {
  const [producto, setProduct] = useState<FakeApi[]>([]);
  const [filtro, setFiltro] = useState("");

  const traerInfo = async () => {
    try {
      const respuesta = await fetch("https://api.escuelajs.co/api/v1/products");
      const datos = await respuesta.json();

      const lista: FakeApi[] = datos.map((p: FakeApi) => ({
        id: p.id,
        title: p.title,
        images: p.images,
        price: p.price,
        description: p.description,
      }));

      setProduct(lista);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    traerInfo();
  }, []);

  const productFiltrado = producto.filter((p) =>
    p.title.toLowerCase().includes(filtro.toLowerCase())
  );

  return {
    producto: productFiltrado,
    filtro,
    setFiltro,
  };
};

export default useProduct;