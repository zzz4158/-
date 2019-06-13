import {
    Form, Input, Tooltip, Icon, Modal, Select, Row, Col, Checkbox, Button, AutoComplete,Collapse,Radio,DatePicker
} from 'antd';
import React from "react";
import {Divider} from "antd";
import {Layout} from "antd";
import router from 'umi/router';
import moment from 'moment'

const {Footer} = Layout;
const FormItem = Form.Item;
const { Panel } = Collapse;
const {Option} = Select;
const AutoCompleteOption = AutoComplete.Option;

class Registration extends React.Component {
  componentWillMount() {
    window.localStorage.navSelect = 4;
  }
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
        email: null,
        name: null,//姓名
        password: null,//密码
        errorMessage: null,
        tel: null,
        messageInfo: [],
        visible:false,
    };

    /**表格提交事件**/
    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            visible:true,
        })
        // let jsonData;
        // this.props.form.validateFieldsAndScroll((err, values) => {
        //     if (!err) {
        //         jsonData = {
        //             'name': values['username'],
        //             'phone': values['phone'],
        //             'password': values['password'],
        //         };
        //     }
        // });
        // // console.log(jsonData);
        // fetch("/api/register", {
        //     method: 'POST',
        //     credentials: "include",
        //     body: JSON.stringify(jsonData),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data['code'] === 0) {//判定是否成功
        //             this.props.history.push("/login");
        //         }
        //         else {
        //             message.error('注册失败');
        //         }
        //     })
        //     .catch(error => console.error('Error:', error))
    };

    /**对话框确定键事件 */
    handleOk=()=>{
        router.push('/sign');
    }

    /**确认密码框失去焦点时触发**/
    handleConfirmBlur = e => {
        const value = e.target.value;
        this.setState({confirmDirty: this.state.confirmDirty || !!value});
        if (value !== this.state.password) {
            this.setState({
                errorMessage: '两次输入的密码不同'
            })

        } else {
            this.setState({
                errorMessage: null
            })
        }
    };

    /**对比两个密码**/
    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('两个密码不一样！');
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value.length < 6) {
            callback('请输入至少六位密码')
        }
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], {force: true});
        }
        callback();
    };


    render() {
        const {getFieldDecorator} = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 6}
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 16}
            }
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0
                },
                sm: {
                    span: 16,
                    offset: 8
                }
            }
        };

      return (
        <div>
          <Collapse bordered={false} defaultActiveKey={["1"]}>
            <Panel header={<h2>个人信息</h2>} key="1">
              <Form
                // className="pleaseRegister"
                {...formItemLayout}
                onSubmit={this.handleSubmit}
              >
                <Form.Item label="昵称">
                  {getFieldDecorator("email", {
                    rules: [
                      {
                        require: true,
                        message: "昵称不能为空"
                      }
                    ]
                  })(<Input placeholder="zhy" style={{maxWidth:'400px'}}/>)}
                </Form.Item>
                <Form.Item label="手机号">
                  <p>123 **** 1234</p>
                </Form.Item>
                <Form.Item label="姓名">
                  <p>张**</p>
                </Form.Item>
                <Form.Item label="性别">
                  <Radio.Group
                    defaultValue={3}
                  >
                    <Radio value={1}>男</Radio>
                    <Radio value={2}>女</Radio>
                    <Radio value={3}>就不告诉你</Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item label="出生日期">
                  <DatePicker
                    defaultValue={moment("1998/01/01", "YYYY/MM/DD")}
                    format={"YYYY/MM/DD"}
                  />
                </Form.Item>
                <Form.Item label="个性签名">
                  <Input.TextArea rows={4} placeholder='这个人很懒，什么都没有留下'/>
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                  <Button type="primary" htmlType="submit">
                    修改信息
                  </Button>
                </Form.Item>
              </Form>
            </Panel>
            <Panel header={<h2>修改密码</h2>} key="2">
              <Form
                // className="pleaseRegister"
                {...formItemLayout}
                onSubmit={this.handleSubmit}
              >
                <Form.Item label="原密码">
                  {getFieldDecorator("password", {
                    rules: [
                      {
                        required: true,
                        message: "请输入密码！"
                      },
                      {
                        validator: this.validateToNextPassword
                      }
                    ]
                  })(<Input type="password" style={{maxWidth:'400px'}}/>)}
                </Form.Item>
                <Form.Item label="确认密码">
                  {getFieldDecorator("confirm", {
                    rules: [
                      {
                        required: true,
                        message: "请确认密码！"
                      },
                      {
                        validator: this.compareToFirstPassword
                      }
                    ]
                  })(
                    <Input
                      type="password"
                      onBlur={this.handleConfirmBlur}
                      style={{maxWidth:'400px'}}
                    />
                  )}
                </Form.Item>
                <Form.Item label="验证码">
                  <Row gutter={8}>
                    <Col span={12}>
                      {getFieldDecorator("captcha", {
                        rules: [
                          { required: true, message: "请输入验证码" }
                        ]
                      })(<Input />)}
                    </Col>
                    <Col span={12}>
                      <Button>获取验证码</Button>
                    </Col>
                  </Row>
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                  <Button type="primary" htmlType="submit">
                    修改密码
                  </Button>
                </Form.Item>
              </Form>
            </Panel>
          </Collapse>

          <Modal
            title="恭喜你"
            visible={this.state.visible}
            onOk={this.handleOk}
          >
            <div style={{ textAlign: "center" }}>
              <Icon
                type="check-circle"
                theme="twoTone"
                twoToneColor="#52c41a"
              />
              信息修改成功
            </div>
          </Modal>
        </div>
      );
    }
}


const WrappedRegistrationForm = Form.create({name: 'register'})(Registration);

export default WrappedRegistrationForm;
