import React from "react";
import "./color.css";
import { colors, colorCommon } from "../../tokens";
import { COLORS } from "../..";

export type IColor = {
  type?: "default" | "common";
};

const Color = ({ type = "default" }: IColor) => {
  const ArrayTextColor = Object.keys(colors);
  const ArrayColor = Object.values(colors).map((e) => Object.values(e));

  const ArrayTextColorCM = Object.keys(colorCommon);
  const ArrayColorCM = Object.values(colorCommon);

  return type === "common" ? (
    <div className="list">
      <div className="text">colorCommon:</div>
      {ArrayColorCM.map((color, idx) => {
        return (
          <div key={`${color}`} className="color" style={{ width: "200px" }}>
            <div style={{ backgroundColor: color, height: "20px" }}></div>
            <div>{ArrayTextColorCM[idx]}</div>
            <div>{color}</div>
          </div>
        );
      })}
    </div>
  ) : (
    <div className="container">
      {ArrayTextColor.map((t, idx) => {
        return (
          <div key={t} className="list">
            <div className="text">{t}:</div>
            {ArrayColor[idx].map((color, jdx) => {
              return (
                <div key={`${idx}-${jdx}`} className="color">
                  <div style={{ backgroundColor: color, height: "20px" }}></div>
                  <div>{jdx + 1}</div>
                  <div>{color}</div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Color;
