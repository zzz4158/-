import React, { Component } from "react";
import { OverPack } from "rc-scroll-anim";
import TweenOne from "rc-tween-one";
import QueueAnim from "rc-queue-anim";
import Link from "umi/link";
import { List, Card, Input, Divider,Typography,Layout,Collapse,Checkbox,Button,Row,Col  } from "antd";
import { musicSource } from './musicSource'
import ReactAplayer from 'react-aplayer';
import ColorThief from 'color-thief'

import './musicIndex.css'

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
  xl: 3,
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


class MusicIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      musicProps: {
        // fixed:true,
        lrcType: 3,
        audio: [musicSource[0]],
      }
    }
  }
  componentWillMount() {
    window.localStorage.navSelect = 4;
  }
  state = {
    isMobile: false,//用于确定右侧边栏的样式
  }


  //播放器切换音乐源
  handleChangeMusic = (id) => {
    const { musicProps } = this.state;
    musicProps.audio.unshift(musicSource[id]);
    this.setState({
      musicProps: musicProps,
    });
    // console.log(this.onInit.ap)
    this.ap.list.clear(musicSource[id]);
    this.ap.list.add(musicSource[id])
    this.ap.play();
  }
  //播放器的属性事件
  onInit = ap => {
    this.ap = ap;
  };
  onPlay = () => {
    // console.log('on play');
  };

  onPause = () => {
    // console.log('on pause');
  };
  // onListadd = (props) => (props)



  //返回列表元素
  renderList = () => {
    let list = [];
    //3个一行添加菜单项目
    for (let i = 0; i < musicSource.length / 3; i++) {
      list.push(
        <OverPack style={{ height: "350px" }}>
          <QueueAnim type="bottom" delay={300} key={i}>
            <List
              key={"list" + i}
              grid={grid}
              dataSource={musicSource.slice(i * 3, i * 3 + 3)}
              renderItem={(item) => (
                <List.Item key={item.id}>
                  <Card
                    title={
                      <Button type="link" onClick={e=>{this.handleChangeMusic(item.id)}} style={{color:'black'}}>{item.title}</Button>
                    }
                  >
                    <Row style={{minHeight:'130px'}}>
                      <Col xs={24} sm={24} md={16} lg={16}>
                        <div>
                        <Button type="link" onClick={e => { this.handleChangeMusic(item.id) }} style={{ color: 'black' }}>
                        <img src={item.cover} alt="" width="100%" style={{ maxWidth:'200px'}}/>
                      </Button>
                      </div>
                      </Col>
                      <Col xs={24} sm={24} md={8} lg={8}>
                       <div style={{fontSize:'16px'}}>歌手: <br/>
                        {item.artist}
                        </div>
                      </Col>
                    </Row>
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
            </Collapse>
            <Button style={{
              margin:'10px 0 0 120px',
            }}>
               确定
            </Button>
          </Sider>
        </Layout>


        {/* 添加播放器 */}
        <div style={{position:'fixed',bottom:'80px',minWidth:'500px'}}>
        <ReactAplayer
          {...this.state.musicProps}
          // onListadd={this.onListadd}
          onInit={this.onInit}
          onPlay={this.onPlay}
          onPause={this.onPause}
        />
        </div>

      </div>
    );
  }
}

export default MusicIndex;
