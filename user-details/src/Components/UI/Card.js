import React from "react";
import styles from  './Card.module.css';


const Card = (props) => {
  return (
    <div className={`${styles.card} ${props.className}`}>
      {/* this prop will give us the content which is being passed between the opening and closing tag of card component.  */}
      {props.children}
      
    </div>
  );
};

export default Card;
