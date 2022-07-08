import { Button, Form, Input } from "antd";
import "../index.css";
import React from "react";
import { NavLink } from "react-router-dom";

function SignUp() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Success:", values);
    const username = values.username;
    const password = values.password;
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <div className="container">
        <div id="login" className="account">
          <div className="tab">
            <NavLink
              //   exact
              //   activeStyle={{
              //     backgroundColor: "white",
              //     color: "red",
              //   }}
              to="/SignIn"
            >
              Đăng nhập
            </NavLink>
            <NavLink
              //   exact
              //   activeStyle={{
              //     backgroundColor: "white",
              //     color: "red",
              //   }}
              to="/SignUp"
            >
              Đăng ký
            </NavLink>
          </div>
          <div className="login-title">
            <div className="title">
              <h1>Chào mừng bạn đến với Homedy!</h1>
              <p>Bắt đầu kết nối với hàng triệu chuyên gia và khách hàng.</p>
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
              form={form}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              {/* <Input  placeholder="Số điện thoại/Email" /> */}
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
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
