import React,{ Component } from "react";
import { Layout,Button,BackTop }from 'antd'
import MyNav from '../component/MyNav'
import Footer2 from '../Home/Footer2'
import {
  Footer20DataSource,
} from '../Home/data.source';
import { enquireScreen } from 'enquire-js';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location } = window;

export default class basicLayout extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
    /* 如果不是 dva 2.0 请删除 end */
  }

  render() {
    return (
      <div
        className="templates-wrapper"
        ref={d => {
          this.dom = d;
        }}
      >
        <MyNav />
         {/* 导航栏属性为fixed 需要用此块占位 */}
        <div style={{width:'100%',height:'64px'}}></div>
        <div style={{position:'relative',minHeight: document.body.clientHeight - 144}}>{this.props.children}</div>
        <BackTop />
        <Footer2
        id="Footer2_0"
        key="Footer2_0"
          // style={{position: 'absolute',bottom:'0',width: '100%'}}
        dataSource={Footer20DataSource}
        isMobile={this.state.isMobile}
      />
      </div>
    );


  }
}