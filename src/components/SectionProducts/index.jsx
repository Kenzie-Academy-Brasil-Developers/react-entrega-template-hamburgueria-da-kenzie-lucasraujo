import { useEffect, useState } from "react";
import { api } from "../Api/Api";
import { Card } from "../Card/Index";
import { StyledSection } from "./StyleSectionProducts";

export function SectionProducts({ car, setCar, filtered, setFiltered }) {
  const [products, setProducts] = useState([]);

  const fil = products.filter(
    (prod) =>
      prod.category.toLowerCase().includes(filtered.toLowerCase()) ||
      prod.name.toLowerCase().includes(filtered.toLowerCase())
  );

  useEffect(() => {
    async function getApi() {
      try {
        const res = await api.get("products");
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getApi();
  }, []);

  return (
    <StyledSection>
      {fil.map((elem) => (
        <Card car={car} setCar={setCar} key={elem.id} elem={elem} />
      ))}
    </StyledSection>
  );
}
