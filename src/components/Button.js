import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  // static contextType = LanguageContext;

  renderSubmit = (value) => {
    console.log("🚀 ~ Button ~ value", value);
    return value === "English" ? "Submit" : "Voorleggen";
  };

  renderColor = (color) => {
    console.log("🚀 ~ Button ~ color", color);
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {/* {this.renderSubmit} */}
          {(value) => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    );
  };

  render() {
    // const text = this.context === "English" ? "Submit" : "Voorleggen";
    return (
      <ColorContext.Consumer>
        {(color) => this.renderColor(color)}
      </ColorContext.Consumer>
    );
  }
}

// Button.contextType=LanguageContext;

export default Button;
