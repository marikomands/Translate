import React from "react";

class LanguageSelector extends React.Component {
  render() {
    return (
      <div>
        Select a Language
        <i
          className="flag us"
          onClick={(language) => {
            this.props.onLanguageChange("English");
          }}
        />
        <i
          className="flag nl"
          onClick={() => {
            this.props.onLanguageChange("Dutch");
          }}
        />
      </div>
    );
  }
}

export default LanguageSelector;
