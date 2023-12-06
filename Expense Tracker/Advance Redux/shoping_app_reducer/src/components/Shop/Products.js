import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: 1,
    title: "Product 1",
    price: 10,
    description: "This is the first product - amazing!",
  },
  {
    id: 2,
    title: "Product 2",
    price: 15,
    description: "This is the second product - fantastic!",
  },
  {
    id: 3,
    title: "Product 3",
    price: 20,
    description: "This is the third product - incredible!",
  },
  {
    id: 4,
    title: "Product 4",
    price: 25,
    description: "This is the fourth product - awesome!",
  },
  {
    id: 5,
    title: "Product 5",
    price: 30,
    description: "This is the fifth product - superb!",
  },
  {
    id: 6,
    title: "Product 6",
    price: 35,
    description: "This is the sixth product - excellent!",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
