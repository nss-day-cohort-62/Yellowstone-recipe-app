import React from "react";
// import { RecipeText } from "./RecipeText";

export const Recipe = ({ id, name, imgUrl, recText }) => {
  return (
    <li key={id}>
      <img src={imgUrl} alt={name} />
      <div>{name}</div>
      <div>{recText}</div>
    </li>
  );
};
