import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetailPage.css";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Simulated API
    const fetchProduct = async () => {
      setProduct({
        id,
        name: "Awesome Product",
        price: "$99.99",
        description:
          "This is a detailed description of the product. Loaded dynamically from backend.",
        features1:
          "Feature section one details. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        features2:
          "Feature section two details. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        testimonials: [
          "This product changed my life!",
          "Excellent quality, highly recommend.",
          "Best purchase ever!",
        ],
        gallery: ["/", "", "", "", "", ""],
      });
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-detail-page">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-img">
          <img src={product.gallery[0]} alt={product.name} className="hero-image" />
        </div>
        <button className="btn-link">Live Link to Product Site</button>
      </section>

      {/* DESCRIPTION */}
      <section className="description">
        <h2>Product Description</h2>
        <p>{product.description}</p>
      </section>

      {/* FEATURES 1 */}
      <section className="features">
        <div className="text-block">
          <h3>Features 1 Section</h3>
          <p>{product.features1}</p>
        </div>
        <div className="image-block">
          <img src={product.gallery[1]} alt="Feature 1" />
        </div>
      </section>

      {/* FEATURES 2 */}
      <section className="features reverse">
        <div className="text-block">
          <h3>Features 2 Section</h3>
          <p>{product.features2}</p>
        </div>
        <div className="image-block">
          <img src={product.gallery[2]} alt="Feature 2" />
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery">
        <h2 className="title">Product Gallery</h2>
        <div className="grid">
          {product.gallery.map((img, i) => (
            <div key={i} className="item">
              <div className="img">
                <img src={img} alt={`gallery-${i}`} />
              </div>
              <p>Description of img</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <h2 className="title">Testimonials</h2>
        <div className="grid">
          {product.testimonials.map((t, i) => (
            <div key={`testimonial-${i}`} className="wrapper">
              <div className="card">
                <img
                  src={typeof t === "object" && t.image ? t.image : "/placeholder.png"}
                  alt={`Testimonial ${i}`}
                  className="img"
                />
              </div>
              <p className="caption">
                {typeof t === "object" && t.text ? t.text : t}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;
