import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './index.css';
export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Ruby <span>China</span> <a href="/list">社区</a></h1>
        </header>
        <div className="App_content">
          <img src={"https://cdn.bootcss.com/twemoji/2.5.0/2/svg/1f381.svg"}/>
          <p className="desc">Ruby China 官方 <a href="https://gems.ruby-china.org" target="_blank">RubyGems 镜像</a>、<a href="/wiki/ruby-mirror">Ruby 镜像</a>正式上线
          </p><br></br>
          <p className="path">gem source -a https://gems.ruby-china.org</p>
        </div>
      </div>
    );
  }
}

