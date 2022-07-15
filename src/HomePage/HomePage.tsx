import React, { useEffect, useRef, useState } from "react";
import "antd/dist/antd.css";
import type { ColumnsType } from 'antd/es/table';
import { Col, Row, Input, Select, Button, InputRef, Space, Table } from "antd";
import { NavLink } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import { ColumnType, FilterConfirmProps } from "antd/lib/table/interface";
import Highlighter from "react-highlight-words";

const { Search } = Input;

const onSearch = (value: string) => console.log(value);

const { Option } = Select;


function HomePage() {
  interface DataType {
    key: string;
    name: string;
    username: string;
    email: string;
    phone: number;
    website: string
  }
  type DataIndex = keyof DataType;

  const [users, setUsers] = useState<any[]>([]);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        console.log(users);
      });
  }, []);

 
  const searchInput = useRef<InputRef>(null);

  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: DataIndex
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (
    dataIndex: DataIndex
  ): ColumnType<DataType> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            handleSearch(selectedKeys as string[], confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() =>
              handleSearch(selectedKeys as string[], confirm, dataIndex)
            }
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        // setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "20%",
      ...getColumnSearchProps("name"),
    },
    {
      title: "username",
      dataIndex: "username",
      key: "username",
      width: "20%",
      ...getColumnSearchProps("username"),
    },

    {
      title: "email",
      dataIndex: "email",
      key: "email",
      width: "20%",
      ...getColumnSearchProps("email"),
    },
    {
      title: "phone",
      dataIndex: "phone",
      key: "phone",
      width: "20%",
      ...getColumnSearchProps("phone"),
    },
    {
      title: "website",
      dataIndex: "website",
      key: "website",
      ...getColumnSearchProps("website"),
      sorter: (a: any, b: any) => a.address.length - b.address.length,
      sortDirections: ["descend", "ascend"],
    },
  ];
  return (
    <div className="container-home">
      {/* navbar */}
      <Row className="navbar">
        <Col span={12}>
          <Row>
            <Col offset={2}>
              <img
                src=" https://metawayholdings.net/wp-content/uploads/2022/04/Logo-cmc.png"
                alt="HomePageLogo"
              />
            </Col>
            <Col offset={1}>
              <Row>
                <Col className="navbar-item">
                  <Input.Group>
                    <Select defaultValue="sellBuy">
                      <Option value="sellBuy">Mua bán</Option>
                      <Option value="rent">Cho thuê</Option>
                      <Option value="project">Dự án</Option>
                      <Option value="community">Cộng đồng</Option>
                      <Option value="news">Tin Tức</Option>
                    </Select>
                    <Search
                      placeholder="Tìm kiếm"
                      onSearch={onSearch}
                      style={{ width: 200, height: 50 }}
                    />
                  </Input.Group>
                </Col>
                <Col className="navbar-item"></Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col span={12}>
          <Row justify="center">
            <Col className="navbar-item">
              <NavLink to="/SignIn">Đăng nhập</NavLink>
            </Col>
            <Col className="navbar-item">
              <NavLink to="">Đăng Tin</NavLink>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* header */}
      <Row className="header" justify="space-around">
        <Col className="header-item">Cộng đồng</Col>
        <Col className="header-item">Dự án</Col>
        <Col className="header-item">Mua bán</Col>
        <Col className="header-item">Cho thuê</Col>
        <Col className="header-item">Chuyên gia</Col>
        <Col className="header-item">Thiết kế nhà đẹp</Col>
        <Col className="header-item">Tin tức</Col>
        <Col className="header-item">Tiện ích</Col>
      </Row>
      <div className="content" style={{ marginTop: 150 }}>
        <Row>
          <p>Danh sách các bài viết hot</p>
        </Row>
      </div>
      <Table columns={columns} dataSource={users} />;
    </div>
  );
}

export default HomePage;
