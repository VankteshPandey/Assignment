import React from 'react';
import './ProductOverview.css'; // Import your CSS file

const ProductOverview = () => {
  // Define product information
  const product = {
    name: 'Product Name',
    price: 'Price 500',
    description: 'Product description goes here.',
    imageUrl: 'product-image.jpg',
  };

  return (
    <div className="product-overview">
      <div className="product-image">
        {/* Display the product image, using 'require' to load it from the Images folder */}
        <img src={require('./Images/w.jpeg')} alt={product.name} />
      </div>
      <div className="product-details">
        <h1>{product.name}</h1>
        <p className="product-price">{product.price}</p>
        <p className="product-description">{product.description}</p>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductOverview;
