import React from "react";

export default class Git extends React.Component {

  handleChange(e) {
    const name = e.target.value;
    this.props.changeName(name);
  }

  render() {
    var data = this.props.data;
    console.log(this.props.name);
    return (
      <div>
        <input value={this.props.name} onChange={this.handleChange.bind(this)} />
          <a href={data.html_url}>
					       {data.avatar_url ? <img src={data.avatar_url}></img> : <span></span>}
          </a>
        <h1>{data.name}</h1>
        <p>{data.login}</p>
      </div>
    );
  }
}
