import React from 'react'
import styles from './styles.css';

const Inventory = ({genderItems}) => {
  

  return (
    <div className="product-display">
        {genderItems.map((product) => 
            <a className="product-overview" href={`/product/${product.slug}`}>
                <img width="900" height="600" className="product-image"src={product.image} alt={product.name}/>
                <div className="product-info">{product.designer}</div>
                <div className="product-info"><span>{product.name}</span></div>
                <div className="product-info">${product.price}</div>
            </a>
        )}
    </div>
  )
}

export default Inventory;