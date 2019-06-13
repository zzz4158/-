/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';
import { BackTop} from 'antd'
import MyNav from '../component/MyNav';
import Banner1 from './Banner1';
import Teams3 from './Teams3';
import Footer2 from './Footer2';
import Point from './Point';
import {
  Banner10DataSource,
  Teams30DataSource,
  Footer20DataSource,
} from './data.source';
import './less/antMotionStyle.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location } = window;

export default class Home extends React.Component {
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
    const children = [
      // <MyNav
      //   id="Nav1_0"
      //   key="Nav1_0"
      // />,
      <Banner1
        id="Banner1_0"
        key="Banner1_0"
        dataSource={Banner10DataSource}
        isMobile={this.state.isMobile}
      />,
      <Teams3
        id="Teams3_0"
        key="Teams3_0"
        dataSource={Teams30DataSource}
        isMobile={this.state.isMobile}
      />,
      // <Footer2
      //   id="Footer2_0"
      //   key="Footer2_0"
      //   dataSource={Footer20DataSource}
      //   isMobile={this.state.isMobile}
      // />, // 导航和页尾不进入锚点区，如果需要，自行添加;
      //锚点再切换页面时偶尔出现bug，暂未修复
      // <Point
      //   key="list"
      //   data={['Nav1_0', 'Banner1_0', 'Teams3_0', 'Footer2_0']}
      //   stroke="point-stroke"
      // />,
      <div>
    {/* <BackTop /> */}
  </div>
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {this.state.show && children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
      </div>
    );
  }
}
