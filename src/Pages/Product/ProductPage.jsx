import React from "react";
import "./ProductPage.css";

const ProductsPage = () => {
  const products = [
    {
      title: "Product 1",
      image: "", // You can add image URL later
      link: "#",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Ut enim ad minim veniam, quis nostrud exercitation.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
      ],
    },
    {
      title: "Product 2",
      image: "",
      link: "#",
      description: [
        "Innovative design for better user experience.",
        "Built with modern technology and optimized for speed.",
        "Affordable and scalable for businesses of all sizes.",
        "Get started today and grow your business effortlessly.",
      ],
    },
    {
      title: "Product 3",
      image: "",
      link: "#",
      description: [
        "High performance and reliability for critical systems.",
        "Designed with security and data protection in mind.",
        "User-friendly interface and intuitive navigation.",
        "24/7 customer support to assist you anytime.",
      ],
    },
  ];

  return (
    <div className="products-page">
      {products.map((product, index) => (
        <section className="product-section" key={index}>
          <h2 className="product-title">{product.title}</h2>
          <div className="product-image">
            {/* Optional image can go here */}
          </div>
          <a href={product.link} className="product-link">
            Link to the product site
          </a>
          <h3 className="product-description-title">Product Description</h3>
          <div className="product-description">
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
