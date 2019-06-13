import { Component } from 'react';
import { Layout, Menu, Icon,BackTop,Button } from 'antd';
import Link from 'umi/link';


const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;


export default class BasicLayout extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

    render() {
      return (
        <Layout>
          <Sider theme="light" breakpoint="md" collapsible
            trigger={null}
            collapsed={this.state.collapsed}
          >
            <div className="logo"/>
            <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                    <Link to='/account'>
                      <Icon type="home" />
                       <span>用户中心</span>
                    </Link>
              </Menu.Item>
              <Menu.Item key="2">
                    <Link to='/account/setting'>
                    <Icon type="setting" />
                       <span>修改信息</span>
                    </Link>
              </Menu.Item>
              <Menu.Item>
                <Button type='link' onClick={this.toggle} style={{width:'100%'}}>
                <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}

            />

               </Button>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout >
            <Content style={{ margin: '24px 16px 0' }}>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                {this.props.children}
              </div>
            </Content>
          </Layout>
        </Layout>
      )
    }
  }