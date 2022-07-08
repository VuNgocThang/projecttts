import { Button, Checkbox, Form, Input } from "antd";
import "../index.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookSquare, FaGoogle, FaSms } from "react-icons/fa";

function SignIn() {
  const onFinish = (values:any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="container">
      <div id="login" className="account">
        <div className="tab">
          <NavLink
            // exact
            // activeStyle={{
            //   backgroundColor: "white",
            //   color: "red",
            // }}
            to="/SignIn"
          >
            Đăng nhập
          </NavLink>
          <NavLink
            // exact
            // activeStyle={{
            //   backgroundColor: "white",
            //   color: "red",
            // }}
            to="/SignUp"
          >
            Đăng ký
          </NavLink>
        </div>

        <div className="login-title">
          <div className="title">
            <h1>Chào mừng bạn đã trở lại Homedy!</h1>
            <p>Tiếp tục kết nối với hàng triệu khách hàng và quốc gia</p>
          </div>
          <p>Đăng nhập bằng</p>
        </div>
        <div className="login__social-top">
          <div className="login-item">
            <a href="http://facbook.com" title="Đăng nhập bằng Facebook">
              <FaFacebookSquare style={{ fontSize: 18, marginRight: 5 }} />{" "}
              Facebook
            </a>
          </div>
          <div className="login-item">
            <a href="https://google.com" title="Đăng nhập bằng Google">
              <FaGoogle
                style={{ fontSize: 18, marginRight: 5, color: "red" }}
              />{" "}
              Google
            </a>
          </div>

          <div className="login-item">
            <a href="https://gmail.com" title="Đăng nhập bằng PhoneNumber">
              <FaSms style={{ fontSize: 18, marginRight: 5 }} /> Số điện thoại
            </a>
          </div>
        </div>
        <div className="inputInfo">
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Số điện thoại/Email"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input placeholder="Số điện thoại/Email" />
            </Form.Item>

            <Form.Item
              label="Mật khẩu"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password placeholder="Nhập mật khẩu" />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            ></Form.Item>
          </Form>
        </div>
        <Button type="primary" htmlType="submit" className="button">
          Đăng Nhập
        </Button>
      </div>
    </div>
  );
}

export default SignIn;
