import { Button, Checkbox, Form, Input } from "antd";
import "../index.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookSquare, FaGoogle, FaSms } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

function SignIn() {
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    const storeUserName = localStorage.getItem("userName");
    const storePassWord = localStorage.getItem("passWord");

    // console.log("userName nhap", values.userName);
    // console.log("userName o store", storeUserName);
    // console.log("password nhap", values.passWord);
    // console.log("password o store", storePassWord);
    if (
      values.userName === storeUserName &&
      values.passWord === storePassWord
    ) {
      navigate("HomePage");
      alert("login sucessed");
    } else {
      alert("login failed");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const [form] = Form.useForm();
  return (
    <div className="container">
      <div id="login" className="account">
        <div className="tab">
          <NavLink to="/SignIn">Đăng nhập</NavLink>
          <NavLink to="/SignUp">Đăng ký</NavLink>
        </div>

        <div className="login-title">
          <div className="title">
            <h1>Chào mừng bạn đã trở lại Homedy!</h1>
            <p>Tiếp tục kết nối với hàng triệu khách hàng và quốc gia</p>
          </div>
          <p>Đăng nhập bằng</p>
        </div>
        <div className="login__social-top">
          {/* <div className="login-item"> */}
          <a
            href="http://facbook.com"
            title="Đăng nhập bằng Facebook"
            className="item"
          >
            <FaFacebookSquare style={{ fontSize: 18, marginRight: 5 }} />{" "}
            Facebook
          </a>
          {/* </div> */}
          {/* <div className="login-item"> */}
          <a
            href="https://google.com"
            title="Đăng nhập bằng Google"
            className="item"
          >
            <FaGoogle style={{ fontSize: 18, marginRight: 5, color: "red" }} />{" "}
            Google
          </a>
          {/* </div> */}

          {/* <div className="login-item"> */}
          <a
            href="https://gmail.com"
            title="Đăng nhập bằng PhoneNumber"
            className="item"
          >
            <FaSms style={{ fontSize: 18, marginRight: 5 }} /> Số điện thoại
          </a>
          {/* </div> */}
        </div>
        <div className="inputInfo">
          <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Email"
              name="userName"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please input your userName!",
                },
              ]}
            >
              <Input placeholder="Số điện thoại/Email" />
            </Form.Item>

            <Form.Item
              label="Mật khẩu"
              name="passWord"
              rules={[
                {
                  required: true,
                  message: "Please input your passWord!",
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
            <Button type="primary" htmlType="submit" className="button">
              Đăng Nhập
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
