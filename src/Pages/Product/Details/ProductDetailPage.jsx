import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetailPage.css";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // === Simulated API call ===
    const fetchProduct = async () => {
      // Backend code example:
      // const res = await fetch(`/api/products/${id}`);
      // const data = await res.json();
      // setProduct(data);

      // Temporary data for UI
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
          "Best purchase ever!"
        ],
        gallery: [
          "/",
          "",
          "",
          "",
          "",
          ""
        ]
      });
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-detail-page">
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="product-img"><img src={product.gallery[0]} alt={product.name} className="hero-image" /></div>
        
        <button className="btn-link">Live Link to Product Site</button>
      </section>

      {/* DESCRIPTION */}
      <section className="description-section">
        <h2>Product Description</h2>
        <p>{product.description}</p>
      </section>

      {/* FEATURES 1 */}
      <section className="features-section">
        <div className="text-block">
          <h3>Features 1 section</h3>
          <p>{product.features1}</p>
        </div>
        <div className="image-block">
          <img src={product.gallery[1]} alt="Feature 1" />
        </div>
      </section>

      {/* FEATURES 2 */}
      <section className="features-section reverse">
        <div className="text-block">
          <h3>Features 2 section</h3>
          <p>{product.features2}</p>
        </div>


        <div className="image-block">
          <img src={product.gallery[2]} alt="Feature 2" />
        </div>
        
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section">
        <h3>Testimonials</h3>
        <div className="testimonials-grid">
          {product.testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">{t}</div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery-section">
        <h3>Product Gallery</h3>
        <div className="gallery-grid">
          {product.gallery.map((img, i) => (
            <div key={i} className="gallery-item">

              <div className="gallery-img"><img src={img} alt={`gallery-${i}`} /></div>
              <div><p>Description of img</p></div>
              
            </div>
            
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;
