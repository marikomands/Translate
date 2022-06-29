import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
  // static contextType = LanguageContext;

  renderSubmit = (value) => {
    console.log("🚀 ~ Button ~ value", value);
    return value === "English" ? "Submit" : "Voorleggen";
  };

  render() {
    // const text = this.context === "English" ? "Submit" : "Voorleggen";
    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>
          {/* {this.renderSubmit} */}
          {(value) => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    );
  }
}

// Button.contextType=LanguageContext;

export default Button;
