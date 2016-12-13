import React from "react";
import Git from "./Git";

export default class Layout extends React.Component {
  static propTypes = {
    name: React.PropTypes.string
  }
  static defaultProps = {
    name: 'ahmadao2214'
  }
  constructor() {
    super();
    this.state = {
      name: "ahmadao2214",
      data: {}
    };
    this._fetchUserInfo = this._fetchUserInfo.bind(this);
  }
  changeName(name){
    this.setState({name});
    this._fetchUserInfo(name);
  }
  componentDidMount() {
    this._fetchUserInfo(this.props.name)
  }

  _fetchUserInfo(name) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users/' + name);
    xhr.onreadystatechange = () => {
      let status;
      if (xhr.readyState === xhr.DONE) {
        status = xhr.status;
        if ((status >= 200 && status < 300) || status === 304 || status === 0) {
          this.setState({
            data: JSON.parse(xhr.response || xhr.responseText)
          });
        }
      }
    };
    xhr.send();
  }

  render() {
    return (
      <div>
        <Git
        changeName={this.changeName.bind(this)}
        name = {this.state.name}
        data = {this.state.data}/>
      </div>
    );
  }
}
