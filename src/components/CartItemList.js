import React from 'react'

const CartItemList = ({ items }) => {
    return (
      <div>
        {items.map((item) => (
          <div key={item.card.info.id} className="single-fooditem flex w-[100%] flex-wrap justify-between text-sm">
                <span className="font-semibold">{item.card.info.name}</span>
                <span className="font-semibold">₹ {item.card.info.price / 100}</span>
          <span className="font-semibold">Qty: {item.quantity}</span>
          </div>
        ))}
      </div>
    );
  };
  

export default CartItemList