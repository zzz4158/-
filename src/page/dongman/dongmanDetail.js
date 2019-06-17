import React, { Component } from "react";
import router from 'umi/router';
import Link from 'umi/link'
import { Button,Divider,Descriptions,Row, Col, Tag,Typography,Icon,List,Card,Rate } from 'antd'
import {dongmanSource} from './dongmanSource'
import MyComment from'../../component/MyComment'

//定义antd组件
const { Paragraph } = Typography;

//定义响应式布局
const grid={
  gutter: 16,
  xs: 2,
  sm: 2,
  md: 3,
  lg: 4,
  xl: 6,
}


export default class DongmanContent extends Component{
    //返回列表元素
    renderPlayer = (id) => {
      let list = [];
      for (let i = 0; i < dongmanSource[id].player.length; i++) {
        list.push(
          <div style={{marginTop:'12px',padding:'10px',border:'1px solid rgba(0,0,0,0.3)',textAlign:'center',borderRadius:'5px'}}>
            <Link to={'/dongman/' + id + '/' + i} >第{i + 1}话</Link>
          </div>
        );
      }
      return (
        <List key="list" grid={grid}
          header={<div className="ant-descriptions-title">剧集列表</div>}
          bordered
          dataSource={list}
          style={{margin:'0 24px',height:'100%'}}
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
    const id = this.props.match.params.id;
    if (id >= dongmanSource.length) {
      router.push('/404');
    }
    const data = dongmanSource[id];
    return (
      <div style={{ margin: '0 auto', maxWidth: '1200px', padding: '24px' }}>
        <Row>
          <Col xs={24} sm={12} md={8} lg={8} >
            <div style={{ margin:'0px auto',display:'block',width:'200px' }}>
              <img src={data.img} alt={data.title} width='100%'/>
            </div>
          </Col>
          <Col xs={24} sm={12} md={16} lg={16} >
            <Descriptions
              title={data.title}
              border
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
            <Divider></Divider>
            <Button size='large' type="primary"> <Link to={'/dongman/'+id+'/0'} style={{color:'white'}}><Icon type="play-circle" />从头观看 </Link> </Button>
            <Divider type='vertical'></Divider>
            <Button size='large'  type="danger" ><Icon type="heart" />追番</Button>
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col xs={24} sm={16} md={16} lg={18} >
            {this.renderPlayer(id)}
          </Col>
          <Col xs={24} sm={8} md={8} lg={6} >
            <Card title="角色声优" >
              <p>角色A：xxx</p>
              <p>角色A：xxx</p>
              <p>角色A：xxx</p>
            </Card>
          </Col>
        </Row>
        <Divider></Divider>
        <Row >
          <Col xs={24} sm={16} md={16} lg={18} style={{padding:'0 24px'}}>
            <Divider>评论区</Divider>
          <MyComment ></MyComment>
          </Col>
          <Col xs={24} sm={8} md={8} lg={6} >
            <Card title="STAFF" >
              <p>角色A：xxx</p>
              <p>角色A：xxx</p>
              <p>角色A：xxx</p>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}