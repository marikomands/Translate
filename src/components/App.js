import React from "react";
import UserCreate from "./UserCreate";
class App extends React.Component {
  state = { language: "English" };

  onLanguageChange = (language) => {
    this.setState({ language: language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a Language
          <i
            className="flag us"
            onClick={() => {
              this.onLanguageChange("English");
            }}
          />
          <i
            className="flag nl"
            onClick={() => {
              this.onLanguageChange("Dutch");
            }}
          />
        </div>
        <UserCreate />
      </div>
    );
  }
}

export default App;
