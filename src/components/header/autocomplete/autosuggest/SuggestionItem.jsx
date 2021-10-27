import React from "react";
export function SuggestionItem(props) {
  const { thumbanilSrc, name, price } = props;

  return (
    <React.Fragment>
      <div className="auto-item__container">
        <div className="auto-item__image"><img src={thumbanilSrc} /></div>
        <div className="auto-item__name">{name}</div>
        <div className="auto-item__price">{price} VND</div>
      </div>
      
    </React.Fragment>
    
  );
}
