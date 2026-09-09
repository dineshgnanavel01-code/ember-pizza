import { useMemo, useState } from "react";
import HeroBanner from "../components/HeroBanner";
import CategorySlider from "../components/CategorySlider";
import PizzaGrid from "../components/PizzaGrid";
import DealCard from "../components/DealCard";
import ProductDetails from "../components/ProductDetails";
import { pizzas } from "../data/pizzas";

export default function Home() {
  const [category, setCategory] = useState("All");
  const [selectedPizza, setSelectedPizza] = useState(null);

  const filteredPizzas = useMemo(() => {
    if (category === "All" || category === "Deals") {
      return pizzas;
    }

    return pizzas.filter(
      (pizza) => pizza.category === category
    );
  }, [category]);

  return (
    <>
      <HeroBanner />

      <CategorySlider
        selectedCategory={category}
        onCategoryChange={setCategory}
      />

      <DealCard />

      <PizzaGrid
        pizzas={filteredPizzas}
        onView={setSelectedPizza}
      />

      {selectedPizza && (
        <ProductDetails
          pizza={selectedPizza}
          onBack={() => setSelectedPizza(null)}
        />
      )}
    </>
  );
}