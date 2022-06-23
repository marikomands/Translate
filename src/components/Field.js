import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {
  render() {
    const text = this.context === "English" ? "Name" : "Naam";
    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;
