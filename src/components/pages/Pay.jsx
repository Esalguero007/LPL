import { commerce } from "../../lib/commerce";
import { useEffect, useState } from "react";
const Pay = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    document.title = "La Pulguita Loca | Pay";
    getProducts();
  }, []);
  const getProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
    setIsLoading(false);
  };
  return (
    <main className="pay">
      <h1>{isLoading ? "Loading our products..." : "Our Products"}</h1>
      <div className="products-container">
        {products.map((product) => {
          return (
            <div key={product.id} className="product">
              <img
                className="product-img"
                src={product.media.source}
                alt="Product"
              />
              <p className="product-name">{product.name}</p>
              <p className="product-price">
                {product.price.formatted_with_symbol}
              </p>
              <p
                className="product-desc"
                dangerouslySetInnerHTML={{ __html: product.description }}
              ></p>
              <a
                className="buy-btn"
                target="_blank"
                rel="noreferrer"
                href={product.checkout_url.checkout}
              >
                Pay now
              </a>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Pay;
