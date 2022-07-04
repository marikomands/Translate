import React from "react";

 const Context = React.createContext("English");

export class LanguageStore extends React.Component {
  state = { language: english };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return <Context.Prover value={{ ...this.state, onLanguageChange=this.onLanugageChange }}>
{this.props.children}
    </Context.Prover>;
  }
}

export default Context;