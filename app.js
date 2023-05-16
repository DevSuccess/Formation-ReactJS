function WelcomeFun({ name, children, start }) {
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

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    this.timer = null;
  }

  componentDidMount() {
    this.timer = window.setInterval(this.tick.bind(this), 1000);
  }

  componentwillUnmount() {
    window.clearInterval(this.timer);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div>
        {this.state.date.toLocaleDateString()}{" "}
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}

class Incrementer extends React.Component{
    constructor(props){
        super(props)
        this.state = {n: props.start}
        this.timer = null
    }

    componentDidMount(){
        window.setInterval(this.increment.bind(this), 1000)
    }

    componentwillUnmount(){
        window.clearInterval(this.timer)
    }

    increment(){
        this.setState(function(state, props){
            return {n: state.n +props.step}
        })
    }

    render(){
        return <div>Valeur : {this.state.n}</div>
    }
}

Incrementer.defaultProps = {
    start: 0,
    step: 1
}

function Home() {
  return (
    <div>
      <Welcome name="Muriel">On est : </Welcome>
      <Clock />
      <Incrementer/>
      <Incrementer />
      <Incrementer />
    </div>
  );
}

ReactDOM.render(<Home />, document.getElementById("app"));
