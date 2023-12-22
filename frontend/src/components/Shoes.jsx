import { useState, useEffect } from "react";
import Filter from "./Filter";
import ShoeBoxes from "./ShoeBoxes";
import Sort from "./Sort";

export default function Shoes({ shoes }) {
  const uniqueBrands = shoes
    ? [...new Set(shoes.map((shoe) => shoe.brand))]
    : [];
  const [selectedBrand, setSelectedBrand] = useState("");
  const [sortedShoes, setSortedShoes] = useState(shoes);

  const filteredShoes = selectedBrand
    ? shoes.filter((shoe) => shoe.brand === selectedBrand)
    : shoes;

  useEffect(() => {
    setSortedShoes(shoes);
  }, [shoes]);

  if (!shoes || !Array.isArray(shoes) || shoes.length === 0) {
    return <div>Loading...</div>;
  }

  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value);
  };

  const handleSort = (sortOrder) => {
    let sorted = [...shoes];
    if (sortOrder === "ascending") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "descending") {
      sorted.sort((a, b) => b.price - a.price);
    }
    setSortedShoes(sorted);
  };

  return (
    <section id="shoes" className="shoes">
      <h1 className="heading">Shoes</h1>
      <Sort onSort={handleSort}></Sort>
      <Filter
        brands={uniqueBrands}
        selectedBrand={selectedBrand}
        onChange={handleBrandChange}
      ></Filter>
      <ShoeBoxes
        shoes={selectedBrand ? filteredShoes : sortedShoes}
      ></ShoeBoxes>
    </section>
  );
}
