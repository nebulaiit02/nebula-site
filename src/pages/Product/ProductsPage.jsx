import React from "react";
import "./ProductPage.css";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  const products = [
    {
      id: 1,
      title: "Product 1",
      image: "",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      ],
    },
    {
      id: 2,
      title: "Product 2",
      image: "",
      description: [
        "Innovative design for better user experience.",
        "Built with modern technology and optimized for speed.",
      ],
    },
    {
      id: 3,
      title: "Product 3",
      image: "",
      description: [
        "High performance and reliability for critical systems.",
        "Designed with security and data protection in mind.",
      ],
    },
  ];

  return (
    <div className="products-page">
      {products.map((product) => (
        <section className="product-section" key={product.id}>
          <h2 className="product-section__title">{product.title}</h2>
          <div className="product-section__image"></div>
          <Link
            to={`/product/${product.id}`}
            className="product-section__link"
          >
            Link to the product site
          </Link>
          <h3 className="product-section__description-title">
            Product Description
          </h3>
          <div className="product-section__description">
            {product.description.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProductsPage;
