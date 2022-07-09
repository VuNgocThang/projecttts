import { Button, Form, Input } from "antd";
import "../index.css";
import { NavLink } from "react-router-dom";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    // number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

function SignUp() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Success:", values);
    const userName = values.userName;
    const passWord = values.passWord;
    localStorage.setItem("userName", userName);
    localStorage.setItem("passWord", passWord);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <div className="container">
        <div id="login" className="account">
          <div className="tab">
            <NavLink to="/SignIn">Đăng nhập</NavLink>
            <NavLink to="/SignUp">Đăng ký</NavLink>
          </div>
          <div className="login-title">
            <div className="title">
              <h1>Chào mừng bạn đến với Homedy!</h1>
              <p>Bắt đầu kết nối với hàng triệu chuyên gia và khách hàng.</p>
            </div>
          </div>
          <div className="inputInfo">
            <Form
              {...layout}
              name="basic"
              form={form}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              validateMessages={validateMessages}
            >
              <Form.Item
                label="Email"
                name="userName"
                rules={[
                  {
                    required: true,
                    type: "email",
                    // type: "email" || "number",
                  },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>

              <Form.Item
                label="Mật khẩu"
                name="passWord"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input.Password placeholder="Nhập mật khẩu" />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="button signUp"
                >
                  Đăng Ký
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
