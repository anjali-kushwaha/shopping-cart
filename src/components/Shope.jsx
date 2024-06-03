import { DUMMY_PRODUCTS } from "../dummy-products.js";

export default function Shope({ children }) {
  return (
    <section id="shop">
      <h2>Elegant Clothing For Everyone</h2>

      <ul id="products">
        {children}
      </ul>
    </section>
  );
}