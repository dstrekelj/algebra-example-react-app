import React from "react";

export class RepositoryLink extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    return (
      <a
        className="App-link"
        href="https://github.com/dstrekelj/algebra-example-react-app"
      >
        {this.props.children}
      </a>
    );
  }
}
