import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './index.css';
import './iconfont.css';
import './iconfont.js';
import './iconfont.svg'
export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Ruby <span>China</span> <a href="/list">社区</a></h1>
        </header>
        <div className="App_content">
          <img src={"https://cdn.bootcss.com/twemoji/2.5.0/2/svg/1f381.svg"}/>
          <div>
            <p className="desc">Ruby China 官方 <a href="https://gems.ruby-china.org" target="_blank">RubyGems 镜像</a>、<a href="/wiki/ruby-mirror">Ruby 镜像</a>正式上线
            </p><br></br>
            <p className="path">gem source -a https://gems.ruby-china.org</p>
          </div>
        </div>
        <div className="list_all">
          <div className="list"><i className="fa fa-comments-o"></i><p>Ruby 社区 </p></div>
          <div className="list"><i className="fa fa-comments-o" aria-hidden="true"></i><p>技术文档 </p></div>
          <div className="list"><i className="fa fa-comments-o" aria-hidden="true"></i><p>招聘与求职 </p></div>
          <div className="list"><i className="fa fa-comments-o" aria-hidden="true"></i><p>精华文章 </p></div>
        </div>
        <div className="details">
          <p>社区精华帖</p>
          <div className="detail_list">
            <img src={"https://l.ruby-china.org/user/avatar/21472/0b45a6.png!md"}/>
            <div><p>Ruby 2.5.0 已发布</p><p>dsh0416 • 最后由adamshen 回复于 17 天前</p></div>
          </div>
          <div className="detail_list">
            <img src={"https://l.ruby-china.org/user/avatar/21472/0b45a6.png!md"}/>
            <div><p>Ruby 2.5.0 已发布</p><p>dsh0416 • 最后由adamshen 回复于 17 天前</p></div>
          </div>
        </div>
      </div>
    );
  }
}

