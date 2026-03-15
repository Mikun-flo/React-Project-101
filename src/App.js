import React from 'react'
import { createRoot } from "react-dom/client";

const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "The Pepperoni Pizza",
      description:
        "A delicious pizza topped with pepperoni slices, melted cheese, and a savory tomato sauce.",
    }),
    React.createElement(Pizza, {
      name: "The Veggie Delight Pizza",
      description:
        "A colorful pizza loaded with fresh vegetables like bell peppers, onions, mushrooms, and olives, all on a crispy crust with tomato sauce and cheese.",
    }),
    React.createElement(Pizza, {
      name: "The BBQ Chicken Pizza",
      description:
        "A mouthwatering pizza featuring tender BBQ chicken, red onions, cilantro, and a blend of cheeses on a smoky BBQ sauce base.",
    }),
    React.createElement(Pizza, {
      name: "The Margherita Pizza",
      description:
        "A classic pizza with a simple yet flavorful combination of fresh tomatoes, mozzarella cheese, basil leaves, and a drizzle of olive oil on a thin crust.",
    }),
    React.createElement(Pizza, {
      name: "The Meat Lovers Pizza",
      description:
        "A hearty pizza loaded with a variety of meats including pepperoni, sausage, bacon, and ham, all on a bed of melted cheese and tomato sauce.",
    }),
  ]);
};


const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
