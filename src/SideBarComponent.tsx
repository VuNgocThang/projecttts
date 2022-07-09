import React, { useState } from "react";
import {
  HomeOutlined,
  AppstoreOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { NavLink, useLocation } from "react-router-dom";
const { Sider } = Layout;

function SideBarComponent() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const items = [
    // trang chủ?
    {
      key: "home",
      icon: <HomeOutlined />,
      title: "Trang chủ",
      link: "/",
    },
    // quản lý người dùng
    {
      key: "userManagement",
      title: "Quản lý người dùng",
      children: [
        {
          key: "user",
          icon: <UserOutlined />,
          title: "Người dùng",
          link: "/user/list/user",
        },
        {
          key: "agent",
          icon: <UserOutlined />,
          title: "Đại lý",
          link: "/user/list/agent",
        },
        {
          key: "admin",
          icon: <UserOutlined />,
          title: "Quản trị viên",
          link: "/user/list/admin",
        },
        {
          key: "all",
          icon: <UserOutlined />,
          title: "Tất cả người dùng",
          link: "/user/list/all",
        },
      ],
    },
  ];
  return (
    <>
      <div id="sideBar" className="aloha">
        <div className="sideBar-bg">
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
          >
            {/* <div className="metaway-logo py-4">
              {collapsed == true ? (
                <img src={metaIcon} alt="metaway-holdings-logo" />
              ) : (
                <img src={metaLogo} alt="metaway-holdings-logo" />
              )}
            </div> */}

            <Menu
              theme="dark"
              defaultSelectedKeys={[location.pathname]}
              mode="inline"
            >
              {items.map((item) =>
                !item.children ? (
                  <Menu.Item key={item.key}>
                    <NavLink
                      className="d-flex align-items-center"
                      to={item.link}
                    >
                      {item.icon}
                      <span>{item.title}</span>
                    </NavLink>
                  </Menu.Item>
                ) : (
                  <Menu.SubMenu
                    title={item.title}
                    key={item.key}
                    icon={<AppstoreOutlined />}
                  >
                    {item.children.map((child) => (
                      <Menu.Item key={child.key}>
                        <NavLink
                          className="d-flex align-items-center"
                          to={child.link}
                        >
                          {child.icon}
                          <span>{child.title}</span>
                        </NavLink>
                      </Menu.Item>
                    ))}
                  </Menu.SubMenu>
                )
              )}
            </Menu>
          </Sider>
        </div>
      </div>
    </>
  );
}

export default SideBarComponent;
