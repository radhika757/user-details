import React from "react";
import errors from "./ErrorModel.module.css";
import Card from "./Card";
import Button from "./Button";

// We need to update our UI conditionally based on whether we have an error or not 
const ErrorModel = (props) => {
  return (
    <div>
      <div className={errors.backdrop}  onClick={props.onConfirm}/>
      <Card className={errors.modal}>
        <header className={errors.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={errors.content}>
          <p>{props.message}</p>
        </div>
        <footer className={errors.actions}>
          {/* A button to close the model */}
          <Button onClick={props.onConfirm}>Okay!</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModel;
