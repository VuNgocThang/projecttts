import "antd/dist/antd.css";
import { Layout } from "antd";
import "./App.css";
import SignIn from "./Login/SignIn";
import SignUp from "./Login/SignUp";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import SideBarComponent from "./SideBarComponent";

const { Content, Footer } = Layout;

function App() {
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <SideBarComponent></SideBarComponent>
      <Layout className="site-layout">
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Routes>
            <Route path="/" element={<SignIn />}></Route>
            <Route path="/HomePage" element={<HomePage />}></Route>
            <Route path="/SignIn" element={<SignIn />}></Route>
            <Route path="/SignUp" element={<SignUp />}></Route>
          </Routes>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Metawayholdings.net is a proud part of METAWAY Holdings Inc., a
          leading business services company. METAWAY Holdings.net is a
          Registered Trademark. © 2022 – 2027 All Rights Reserved
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
