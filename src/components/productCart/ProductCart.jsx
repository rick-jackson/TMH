import React from "react";
import './productsCart.scss'
 




const ProductCart = ({product, removeProduct}) =>{
  return(<div className="product">
    <div onClick={()=>removeProduct(product.id)}>X</div>
  {product.discount && (
    <div className="product__discount">-{product.discount}%</div>
  )}
  <img className="product__image" src={product.image} alt="product" />
  <div className="product__about">
    <h5 className="product__title">{product.name}</h5>
    <h5 className="product__subtitle">{product.producer}</h5>
    <p className="product__description">
      <span className="product__description_bold">Опис:</span>{" "}
      {product.description}
    </p>
    <div className="product__size">
      Розміри:{" "}
      {product.size.map((item) => (
        <div className="product__size-item" key={item}>
          <input type="checkbox" id="size" onClick={(e)=>console.log(product.selectedSize['M'])}/>
          <label htmlFor="size">{item}</label>
        </div>
      ))}
    </div>
    <div className="product__price">
      <span className="product__price-item">
        <span className="product__price_word">Ціна:</span>{" "}
        {product.discount
          ? (
              product.price -
              (product.price * product.discount) / 100
            ).toFixed(2)
          : product.price}{" "}
        <span className="product__price-item_currency">₴</span>
      </span>
      {product.discount && (
        <span className=" product__price-item product__price-item_old">
          {product.price}
        </span>
      )}
    </div>
  </div>
</div>)
}




export default ProductCart