import React, {Component} from 'react';
import Link from 'umi/link';
import {Form, Icon, Input, Button, message, Layout, } from 'antd';
import { connect } from 'dva';
import router from 'umi/router';
import logo from '../../asset/logo.png'
import './SignIn.css'

const {Header, Content, Footer, Sider} = Layout;
const FormItem = Form.Item;

//新登陆页面参数
// const { Tab, UserName, Password, Mobile, Captcha, Submit } = Login;


//确定用户登录
const namespace = 'users';
const mapStateToProps = (state) => {
  const user = state[namespace].user;
  return {
    user,
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    login: (newUser) => {
      const login = {
        type: `${namespace}/userLogin`,
        payload: newUser,
      };
      dispatch(login);
    },
  };
};

@connect(mapStateToProps, mapDispatchToProps)
class LoginDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            password: '',
            errorMessage: '',
        }

  }

    handleLogin = (e) => {
      e.preventDefault();
      this.props.login(
        {
          id: 1,
          name: 'zhy',
          role: 'admin',
          img:'',
        }
      );
      router.push('/');
    };


    handleChangePhone = (e) => {
        this.setState({phone: e.target.value});
    };

    handleChangePassword = (e) => {
        this.setState({password: e.target.value});
    };


    render() {
        const {phone, password} = this.state;
        const {getFieldDecorator} = this.props.form;
        return (
          <div id='starBg'>
          <div id="stars"></div>
          <div className="login">
                <img id="logo"
                     src={logo}/>
            <Form onSubmit={(e) => { this.handleLogin(e) }} className="login-form">
                    <FormItem>
                        <h2 id='pleaseLogin'>欢迎登录</h2>
                        {getFieldDecorator('phone', {
                            rules: [{required: true, message: '请输入注册手机号!'},
                                {pattern: '\\d{11}', message: '请输入11位手机号!'}],
                        })(
                            <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                   placeholder="请输入注册手机号" setFieldsValue={phone} onChange={this.handleChangePhone}/>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{required: true, message: '请输入密码!'},
                                {min: 6, message: '请输入6位以上密码'}],
                        })(
                            <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                                   placeholder="请输入密码" setFieldsValue={password} onChange={this.handleChangePassword}/>
                        )}
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                        </Button>
                        或者<Link to="/sign/up">注册账号！</Link>
                    </FormItem>
                </Form>
                {/* <Footer style={{textAlign: 'center'}} className="footer">
                    SmartLab Design ©2018 Powered By 武汉理工大学智能技术实验室
                </Footer> */}

            </div>
            </div>
        );
        }
    }

    const WrappedNormalLoginForm = Form.create()(LoginDemo);

    export default WrappedNormalLoginForm;

