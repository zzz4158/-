import React, { Component } from "react";
import { Collapse, List, Typography, Row, Col,Card } from "antd";
import { dongmanSource } from "../dongman/dongmanSource";
import Link from 'umi/link';
//使用antd组件
const { Panel } = Collapse;
const { Paragraph } = Typography;

//定义响应式布局
const grid = {
  gutter: 16,
  xs: 2,
  sm: 2,
  md: 3,
  lg: 3,
};

class UserHome extends Component {
  render() {
    return (
      <div>
        <Collapse
          bordered={false}
          defaultActiveKey={["1", "2", "3"]}
        >
          <Panel header={<h2>我的追番</h2>} key="1">
            <List
              key={"zhuifan"}
              grid={grid}
              dataSource={dongmanSource.slice(0, 6)}
              renderItem={item => (
                <List.Item>
                  <Card style={{ maxWidth: "340px" }}>
                    <Row>
                      <Col span={8}>
                        <Link to={item.href}>
                          <img src={item.img} alt="" width="90%" />
                        </Link>
                      </Col>
                      <Col span={16}>
                        <Link to={item.href} style={{ color: "black" }}>
                          <h2>{item.title}</h2>
                        </Link>
                        <Paragraph ellipsis={{ rows: 3, expandable: true }}>
                          简介：{item.jianjie}
                        </Paragraph>
                      </Col>
                    </Row>
                  </Card>
                </List.Item>
              )}
            />
          </Panel>
          <Panel header={<h2>我的音乐</h2>} key="2">
          <List
              key={"music"}
              grid={grid}
              dataSource={[]}
              renderItem={item => (
                <List.Item>
                  <Card style={{ maxWidth: "340px" }}>
                    <Row>
                      <Col span={8}>
                        <Link to={item.href}>
                          <img src={item.img} alt="" width="90%" />
                        </Link>
                      </Col>
                      <Col span={16}>
                        <div style={{marginLeft: "5px"}}>
                        <Link to={item.href} style={{ color: "black"}}>
                          <h2>{item.title}</h2>
                        </Link>
                        <Paragraph ellipsis={{ rows: 3, expandable: true }}>
                          简介：{item.jianjie}
                        </Paragraph>
                        </div>

                      </Col>
                    </Row>
                  </Card>
                </List.Item>
              )}
            />
          </Panel>
          <Panel header={<h2>我的相册</h2>} key="3">
          <List
              key={"photo"}
              grid={grid}
              dataSource={[]}
              renderItem={item => (
                <List.Item>
                  <Card style={{ maxWidth: "340px" }}>
                    <Row>
                      <Col span={8}>
                        <Link to={item.href}>
                          <img src={item.img} alt="" width="90%" />
                        </Link>
                      </Col>
                      <Col span={16}>
                        <Link to={item.href} style={{ color: "black" }}>
                          <h2>{item.title}</h2>
                        </Link>
                        <Paragraph ellipsis={{ rows: 3, expandable: true }}>
                          简介：{item.jianjie}
                        </Paragraph>
                      </Col>
                    </Row>
                  </Card>
                </List.Item>
              )}
            />
          </Panel>
        </Collapse>
      </div>
    );
  }
}

export default UserHome;