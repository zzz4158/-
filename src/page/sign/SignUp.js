import {
    Form, Input, Tooltip, Icon, Modal, Select, Row, Col, Checkbox, Button, AutoComplete,
} from 'antd';
import React from "react";
import {Divider} from "antd";
import {Layout} from "antd";
import "./reg.css";
import router from 'umi/router';
import './background.css'

const {Footer} = Layout;
const FormItem = Form.Item;

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
        <div id='starBg'>
          <div id="stars"></div>
        <div className="register">
            <div className="welcomeRegister">
              <Divider>注册信息</Divider>
            </div>
            <Form
              className="pleaseRegister"
              {...formItemLayout}
              onSubmit={this.handleSubmit}
            >
              {/*<Form.Item*/}
              {/*label="邮箱"*/}
              {/*>*/}
              {/*{getFieldDecorator('email', {*/}
              {/*rules: [{*/}
              {/*type: 'email', message: '不是有效的邮箱格式！',*/}
              {/*}, {*/}
              {/*required: true, message: '请输入邮箱!',*/}
              {/*}],*/}
              {/*})(*/}
              {/*<Input />*/}
              {/*)}*/}
              {/*</Form.Item>*/}
              <Form.Item label="手机号">
                {getFieldDecorator("phone", {
                  rules: [
                    {
                      pattern: "\\d{11}",
                      message: "请输入11位手机号！"
                    },
                    {
                      required: true,
                      message: "请输入您的手机号!"
                    }
                  ]
                })(<Input />)}
              </Form.Item>
              <Form.Item label="密码">
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
                })(<Input type="password" />)}
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
                  />
                )}
              </Form.Item>
              <Form.Item
                label={
                  <span>
                    姓名&nbsp;
                    <Tooltip title="请使用实际姓名">
                      <Icon type="question-circle-o" />
                    </Tooltip>
                  </span>
                }
              >
                {getFieldDecorator("username", {
                  rules: [
                    {
                      required: true,
                      message: "请输入您的姓名!",
                      whitespace: true
                    }
                  ]
                })(<Input />)}
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
                {getFieldDecorator("agreement", {
                  valuePropName: "checked",
                  required: true
                })(
                  <Checkbox>
                    我已阅读并同意<a href="">相关条例</a>
                  </Checkbox>
                )}
              </Form.Item>
              <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                  注册
                </Button>
              </Form.Item>
            </Form>
            {/*<Button type="primary" htmlType="submit" onClick={this.handleSubmit}>*/}
            {/*注册*/}
            {/*</Button>*/}
            {/*<Footer style={{textAlign: "center"}} className="footer">*/}
            {/*SmartLab Design ?2018 Powerd By 武汉理工大学智能技术实验室*/}
            {/*</Footer>*/}

            <Modal
              title="恭喜你"
              visible={this.state.visible}
              onOk={this.handleOk}
            >
                <div style={{ textAlign: "center" }}>
                <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />注册成功
                </div>
            </Modal>
          </div>

        </div>


                   );
    }
}


const WrappedRegistrationForm = Form.create({name: 'register'})(Registration);

export default WrappedRegistrationForm;
