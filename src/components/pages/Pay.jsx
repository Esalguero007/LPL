import { commerce } from "../../lib/commerce";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltDown } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
const Pay = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    document.title = "La Pulguita Loca | Pay";
    window.scrollTo(0, 0);
    getProducts();
  }, []);
  const getProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
    setIsLoading(false);
  };
  return (
    <>
      <section className="hero-pay-page">
        <h1>Browse Our Products</h1>
        <button>
          <a href="#products">
            <div className="i">
              <FontAwesomeIcon icon={faLongArrowAltDown} />
            </div>
          </a>
        </button>
      </section>

      <main className="pay-page" id="products">
        {isLoading && <h2>Loading Offers...</h2>}
        {products.map((product) => {
          return (
            <div key={product.id} className="product-container">
              <img
                className="product-img"
                src={product.media.source}
                alt="Product"
              />
              <div className="product-info">
                <h3 className="product-title">{product.name}</h3>
                <p
                  className="product-desc"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                ></p>
                <div className="cta">
                  <h3 className="product-price">
                    {product.price.formatted_with_symbol}
                  </h3>
                  <Button variant="success" className="rounded-0">
                    <a
                      className="buy-btn"
                      target="_blank"
                      rel="noreferrer"
                      href={product.checkout_url.checkout}
                    >
                      Pay now
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
};

export default Pay;
