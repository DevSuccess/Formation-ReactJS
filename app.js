function WelcomeFun({ name, children }) {
  return (
    <div>
      <h1>Bonjour {name}! </h1>
      <p>{children}</p>
    </div>
  );
}

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h1>Bonjour {this.props.name}! </h1>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

ReactDOM.render(
  <Welcome name="Muriel">, Comment CV ? </Welcome>,
  document.getElementById("app")
);
