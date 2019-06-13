import React, { Component } from "react";
import router from 'umi/router';
import Link from 'umi/link'
import { Layout, Button,Divider,Descriptions,Row, Col, Tag,Typography,Icon,List,Breadcrumb,Rate } from 'antd'
import {dongmanSource} from './dongmanSource'
import MyComment from'../../component/MyComment'
import './DongmanPlayer.css'

//定义antd组件
const { Paragraph } = Typography;
const { Header, Content, Sider } = Layout;

class dongmanPlayer extends Component {

  //返回列表元素
  renderPlayer = (id) => {
    let list = [];
    for (let i = 0; i < dongmanSource[id].player.length; i++) {
      list.push(
         <div style={{margin:'0px auto',height:'100%',textAlign:'center'}}>
          <Link to={'/dongman/' + id + '/' + i} >第{i + 1}话</Link>
         </div>
      );
    }
    return (
      <List key="list"
        header={<div className="ant-descriptions-title">剧集列表</div>}
        bordered
        dataSource={list}
        style={{margin:'0 24px'}}
        renderItem={(item, i) => (
          <List.Item key={'list'+i}>
            {item}
          </List.Item>
        )}
      />
    );
  }

  //返回风格标签
    renderFengge=(data)=> {
      const fenggeList = data.fengge.split('/');
      let tagList = [];
      fenggeList.map((item,i) => {
        tagList.push(<Tag key={'tag'+i}>{item}</Tag>)
      })
      return tagList
    }


  render() {
    const { id } = this.props.match.params;
    const player=parseInt(this.props.match.params.player)
    if (id >= dongmanSource.length||player>=dongmanSource[id].player.length) {
      router.push('/404');
    }
    const data = dongmanSource[id];
    console.log(typeof(player))
    return (
      <div style={{ margin: "0 auto", maxWidth: "1200px" }}>
        <Layout>
          <Content style={{ padding: "0 50px" }}>
            <Breadcrumb style={{ margin: "16px 0px" }}>
              <Breadcrumb.Item><Link to="/">首页</Link></Breadcrumb.Item>
              <Breadcrumb.Item><Link to="/dongman">动漫区</Link></Breadcrumb.Item>
              <Breadcrumb.Item><Link to={"/dongman/" +id}>{data.title}</Link></Breadcrumb.Item>
              <Breadcrumb.Item>{'第'+(player+1)+'话'}</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: "#fff", padding: 24, minHeight: 380 }} >
              <Divider orientation="left">{data.title+'  第'+(player+1)+'话'}</Divider>
              <Row >
                <Col xs={24} sm={24} md={18} lg={20} style={{ padding: '0 24px' }}>
                  <div className='dongman-player'>
                    {data.player[player]}
                  </div>
                </Col>
                <Col xs={24} sm={24} md={6} lg={4} >
                  {this.renderPlayer(id)}
                </Col>
              </Row>
              <Divider orientation='left'>视频详情</Divider>
              <Row>
                <Col xs={24} sm={12} md={8} lg={8} >
                  <div style={{ margin:'0px auto',display:'block',width:'200px' }}>
                    <img src={data.img} alt={data.title} width='100%'/>
                  </div>
                </Col>
                <Col xs={24} sm={12} md={16} lg={16} >
                  <Descriptions
                    title={data.title} border
                    column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 1, xs: 1 }}
                  >
                    <Descriptions.Item label="风格">{this.renderFengge(data)}</Descriptions.Item>
                    <Descriptions.Item label="开播时间">{data.kbsj}</Descriptions.Item>
                    <Descriptions.Item label="更新">{data.gengxin}</Descriptions.Item>
                    <Descriptions.Item label="简介">
                      <Paragraph ellipsis={{ rows: 3, expandable: true }}>
                        {data.jianjie}
                      </Paragraph>
                    </Descriptions.Item>
                  </Descriptions>
                  评分：<Rate disabled allowHalf defaultValue={4.5} />
                  <Divider type='vertical'></Divider>
                  <Button size='large'  type="danger" ><Icon type="heart" />追番</Button>
                </Col>
              </Row>
              <Divider orientation='left'>评论区</Divider>
              <MyComment ></MyComment>
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default dongmanPlayer;