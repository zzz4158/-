import React, { Component } from "react";
import { OverPack } from "rc-scroll-anim";
import TweenOne from "rc-tween-one";
import QueueAnim from "rc-queue-anim";
import Link from "umi/link";
import { List, Card, Input, Divider,Typography,Layout,Collapse,Checkbox,Button  } from "antd";
import { dongmanSource } from './dongmanSource'
import './dongmanIndex.css'

//使用antd组件
const { Header, Content, Sider } = Layout;
const { Paragraph } = Typography;
const { Search } = Input;
const { Panel } = Collapse;
//定义响应式布局
const grid={
  gutter: 16,
  xs: 2,
  sm: 2,
  md: 3,
  lg: 3,
  xl: 6,
}
//小屏的sider样式
// const siderStyle1 = { position: 'fixed', right: '0', boxShadow: '10px #888888' };
//宽屏的sider样式
// const siderStyle2 = {
//   overflow: "auto",
//   position: "fixed",
//   right: 0,
//   width: "15%",
//   height: '100%',
//   backgroundColor: "white"
// };
//宽屏的content样式
// const contentStyle2={ background:'white',marginRight:'15%'}


class DongmanIndex extends Component {
  componentWillMount() {
    window.localStorage.navSelect = 4;
  }
  state = {
    isMobile: false,//用于确定右侧边栏的样式
  }
  //返回列表元素
  renderList = () => {
    let list = [];
    //6个一行添加菜单项目
    for (let i = 0; i < dongmanSource.length / 6; i++) {
      list.push(
        <OverPack style={{ height: "350px" }}>
          <QueueAnim type="bottom" delay={300} key={i}>
            <List
              key={"list" + i}
              grid={grid}
              dataSource={dongmanSource.slice(i * 6, i * 6 + 6)}
              renderItem={item => (
                <List.Item>
                  <Card
                    title={
                      <a href={item.href} style={{ color: "black" }}>
                        {item.title}
                      </a>
                    }
                  >
                    <div
                    // style={{ minHeight: '400px' }}
                    >
                      <a href={item.href}>
                        <img src={item.img} alt="" width="100%" />
                      </a>
                      <Paragraph ellipsis={{ rows: 1, expandable: true }}>
                        风格:{item.fengge}
                      </Paragraph>
                      <div>开播时间:{item.kbsj}</div>
                      {/* <Paragraph ellipsis={{ rows: 3, expandable: true }}>
                    简介：{item.jianjie}
                  </Paragraph> */}
                    </div>
                  </Card>
                </List.Item>
              )}
            />
          </QueueAnim>
        </OverPack>
      );
    }
    return list;
  }

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <Search
          placeholder="输入搜索内容"
          onSearch={value => console.log(value)}
          enterButton="搜索"
          style={{
            width: "55%",
            height: "48px",
            margin: "0 auto",
            display: "block"
          }}
        />
        <Divider />
        <Layout className='dongman-index-layout'>
          <Content className={['dongman-index-layout','dongman-index-content']}>
            {this.renderList()}
          </Content>
          <Sider
            breakpoint="md"
            collapsedWidth="0"
            onBreakpoint={broken => {
              this.setState({
                isMobile: !this.state.isMobile
              })
            }}
            reverseArrow
            className={['dongman-index-layout','dongman-index-sider']}
          >
            <Collapse bordered={false}>
              <Panel header="按时间：" key="1">
                <Checkbox >2019</Checkbox><br/>
                <Checkbox >2018</Checkbox><br/>
                <Checkbox >2017</Checkbox><br/>
              </Panel>
              <Panel header="按地区：" key="2">
                <Checkbox >中国</Checkbox><br/>
                <Checkbox >日本</Checkbox><br/>
                <Checkbox >欧美</Checkbox><br/>
              </Panel>
              <Panel header="按风格：" key="3">
                <Checkbox >热血</Checkbox><br/>
                <Checkbox >奇幻</Checkbox><br/>
                <Checkbox >冒险</Checkbox><br/>
                <Checkbox >恋爱</Checkbox><br/>
                <Checkbox >科幻</Checkbox><br/>
                <Checkbox >小说改</Checkbox><br/>
                <Checkbox >漫画改</Checkbox><br/>
              </Panel>
            </Collapse>
            <Button style={{
              margin:'10px 0 0 120px',
            }}>
               确定
            </Button>
          </Sider>
        </Layout>
      </div>
    );
  }
}

export default DongmanIndex;
