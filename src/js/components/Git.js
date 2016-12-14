import React from "react";
import Icon from "./Icon";

export default class Git extends React.Component {

  handleChange(e) {
    const name = e.target.value;
    this.props.changeName(name);
  }

  handleClick(e){
    this.props.changeState(e.target.value);
  }

  render() {
    var data = this.props.data;
    var name = this.props.name;
    return (
      <div>
        <input value={this.props.name} onChange={this.handleChange.bind(this)} />
        <button value={this.props.name} onClick={this.handleClick.bind(this)}>Go!</button>
        {console.log(this.props)}
        <div className="react-git-card">
          <a href={data.html_url}>
					       {data.avatar_url ? <img alt = "avatar" className="react-git-card-avatar" src={data.avatar_url}></img> : <span className="react-git-card-avatar"></span>}
          </a>
          <h1 className="react-git-card-name">{data.name}</h1>
          <p className="react-git-card-desc">{data.login}</p>
          <div className="react-git-card-social">
           <a className="react-git-card-item followers" href={`https://github.com/${name}/followers`}>
             <span className="react-git-card-icon">
             	<Icon type="followers" />
             </span>
             {data.followers}
           </a>
           <a className="react-git-card-item repos" href={`https://github.com/${name}?tab=repositories`}>
 						<span className="react-git-card-icon">
             	<Icon type="repos" />
             </span>
 						{data.public_repos}
 					</a>
           <a className="react-git-card-item following" href={`https://github.com/${name}/following`}>
 						<span className="react-git-card-icon">
             	<Icon type="following" />
             </span>
 						{data.following}
 					</a>
        </div>
        </div>
    </div>
    );
  }
}
