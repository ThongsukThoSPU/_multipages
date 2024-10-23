import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./Product.css";

function Product({ products, carts, setCarts }) {
  return (
    <div className="product-container">
      <div className="products-items-container">
        {products.map((product) => {
          return (
            <Card style={{ width: "18rem" }} key={product.id}>
              <Card.Img variant="top" src={product.thumbnailUrl} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  <b>${product.price.toFixed(2)}</b>
                </Card.Text>

                {carts.find(
                  (carts) => carts.id === product.id
                ) /* only Add once*/ ? (
                  <span className="badge bg-danger">Added</span>
                ) : (
                  <Button
                    variant="outline-primary"
                    onClick={() => {
                      setCarts([...carts, product]);
                    }}
                  >
                    Add to Cart
                  </Button>
                )}
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Product;
