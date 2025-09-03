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
    <div className="pdp-container">
      {/* HERO SECTION */}
      <section className="pdp-hero">
        <div className="pdp-hero-img">
          <img src={product.gallery[0]} alt={product.name} className="pdp-hero-image" />
        </div>
        <button className="pdp-btn-link">Live Link to Product Site</button>
      </section>

      {/* DESCRIPTION */}
      <section className="pdp-description">
        <h2>Product Description</h2>
        <p>{product.description}</p>
      </section>

      {/* FEATURES 1 */}
      <section className="pdp-features">
        <div className="pdp-text-block">
          <h3>Features 1 Section</h3>
          <p>{product.features1}</p>
        </div>
        <div className="pdp-image-block">
          <img src={product.gallery[1]} alt="Feature 1" />
        </div>
      </section>

      {/* FEATURES 2 */}
      <section className="pdp-features pdp-features-reverse">
        <div className="pdp-text-block">
          <h3>Features 2 Section</h3>
          <p>{product.features2}</p>
        </div>
        <div className="pdp-image-block">
          <img src={product.gallery[2]} alt="Feature 2" />
        </div>
      </section>

      {/* GALLERY */}
      <section className="pdp-gallery">
        <h2 className="pdp-gallery-title">Product Gallery</h2>
        <div className="pdp-gallery-grid">
          {product.gallery.map((img, i) => (
            <div key={i} className="pdp-gallery-item">
              <div className="pdp-gallery-img">
                <img src={img} alt={`gallery-${i}`} />
              </div>
              <p>Description of img</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="pdp-testimonials">
        <h2 className="pdp-testimonials-title">Testimonials</h2>
        <div className="pdp-testimonials-grid">
          {product.testimonials.map((t, i) => (
            <div key={`testimonial-${i}`} className="pdp-testimonial-wrapper">
              <div className="pdp-testimonial-card">
                <img
                  src={typeof t === "object" && t.image ? t.image : "/placeholder.png"}
                  alt={`Testimonial ${i}`}
                  className="pdp-testimonial-img"
                />
              </div>
              <p className="pdp-testimonial-caption">
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
