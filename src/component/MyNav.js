import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import TweenOne from 'rc-tween-one';
import { Menu, Icon,Button } from 'antd';
import Link from 'umi/link';
import {dataSource} from './data'
import { connect } from 'dva';
import { enquireScreen } from 'enquire-js';

import avatar from '../asset/头像.png';

//定义antd组件
const { Item, SubMenu } = Menu;



//确定用户状态
const namespace = 'users';
const mapStateToProps = (state) => {
  const user = state[namespace].user;
  return {
    user,
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    logout: (newUser) => {
      const logout = {
        type: `${namespace}/userLogout`,
        payload: newUser,
      };
      dispatch(logout);
    },
  };
};

@connect(
  mapStateToProps,
  mapDispatchToProps
)
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneOpen: false,
      menuHeight: 0,
      isMobile: false
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen(b => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true
        });
      }, 500);
    }
  /* 如果不是 dva 2.0 请删除 end */
    this.setState({
      navSelect:window.localStorage.navSelect,
    })
  }

  phoneClick = () => {
    const menu = findDOMNode(this.menu);
    const phoneOpen = !this.state.phoneOpen;
    this.setState({
      phoneOpen,
      menuHeight: phoneOpen ? menu.scrollHeight : 0
    });
  };

  //处理用户退出
  logout = () => {
    // 因导航栏刷新问题暂未解决 不再使用dva

    window.localStorage.clear();
    // window.localStorage.id = 0;
    this.props.logout({
          id: 0,
          name: "未登录",
          role: "guest"
        });
  };

  render() {
    const { ...props } = this.props;
    const { user } = this.props;
    const { isMobile } = this.state;
    delete props.dataSource;
    delete props.isMobile;
    delete props.user;
    const { menuHeight, phoneOpen } = this.state;
    const navData = dataSource.Menu.children;
    //读取菜单项的函数,使用这种方法渲染菜单后，点击导航栏会导致全局刷新，丢失用户登录状态，原因未查明。
    // const navChildren = Object.keys(navData).map((key, i) => (
    //   <Item
    //     // {...navData[key]}
    //     key={i.toString()}>
    //     <a
    //       {...navData[key].a}
    //       // href={navData[key].a.href}
    //       target={navData[key].a.blank && "_blank"}
    //     >
    //       {navData[key].a.children}
    //     </a>
    //   </Item>
    // ));
    const navChildren = [];
    navChildren.push(
      <Item key="0">
        <Link to="/">首页</Link>
      </Item>,
      <Item key="1">
      <Link to="/dongman">动漫</Link>
    </Item>,
      <Item key="2">
        <Link to="/music">音乐</Link>
      </Item>
    );

    // user 涉及到数据，请自行替换。
    const userTitle = (
      <div {...user}>
        <span className="img" {...user.img}>
          <img src={avatar} width="100%" height="100%" alt="userimg" />
        </span>
        <span>{window.localStorage.name}</span>
      </div>
    );
    if (window.localStorage.id == 0||window.localStorage.id == undefined) {
      //未登录
      navChildren.push(
        <Item key="a">
          <Link to="/sign">登录</Link>
        </Item>,
        <Item key="b">
          <Link to="/sign/up">注册</Link>
        </Item>
      );
    } else {
      navChildren.push(
        <SubMenu className="user" title={userTitle} key="user">
          <Item key="a">
            <Link to="/account/">用户中心</Link>
          </Item>,
          <Item key="c">
            <a
              onClick={() => {
                this.logout();
              }}
            >
              退出
            </a>
          </Item>,
          {/* <Item key="c"><Link to="">登出</Link></Item> */}
         </SubMenu>
      );
    }

    return (
      <div
        className="templates-wrapper"
        ref={d => {
          this.dom = d;
        }}
      >
        <TweenOne
          component="header"
          animation={{ opacity: 0, type: "from" }}
          {...dataSource.wrapper}
          {...props}
        >
          <div
            {...dataSource.page}
            className={`${dataSource.page.className}${
              phoneOpen ? " open" : ""
            }`}
          >
            <TweenOne
              animation={{
                x: -30,
                delay: 100,
                type: "from",
                ease: "easeOutQuad"
              }}
              {...dataSource.logo}
            >
              <img width="100%" src={dataSource.logo.children} alt="img" />
            </TweenOne>
            {isMobile && (
              <div
                {...dataSource.mobileMenu}
                onClick={() => {
                  this.phoneClick();
                }}
              >
                {/* 三条粗线用于绘制手机菜单按钮 */}
                <em />
                <em />
                <em />
              </div>
            )}
            <TweenOne
              {...dataSource.Menu}
              animation={{ x: 30, type: "from", ease: "easeOutQuad" }}
              ref={c => {
                this.menu = c;
              }}
              style={isMobile ? { height: menuHeight } : null}
            >
              <Menu
                mode={isMobile ? "inline" : "horizontal"}
                // defaultSelectedKeys={[window.localStorage.navSelect]}
                theme={isMobile ? "dark" : "default"}
              >
                {navChildren}
              </Menu>
            </TweenOne>
          </div>
        </TweenOne>
      </div>
    );
  }
}

