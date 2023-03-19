import React from 'react';
import { LaptopOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, MenuProps, Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Sider } = Layout;

const menu = [{
  icon: LaptopOutlined,
  name: "Create Training"
}, {
  icon: UserOutlined,
  name: "User Panel"
}];

const items2: MenuProps['items'] = menu.map(
  (item, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(item.icon),
      label: item.name,
    };
  },
);

function App() {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Layout style={{ height: '100vh' }}>
      <Header className="header">
        <div className="logo" />
      </Header>
      <Layout>
        <Sider width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={items2}
          />
        </Sider>
        <Layout style={{ padding: '24px' }}>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}

          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: 'white'
            }}
          >
            <Form
              name="basic"
              labelCol={{span: 4 }}
              wrapperCol={{span: 16 }}
              style={{
                maxWidth: 600,
              }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item
                label="Time"
                name="time"
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Movement Count"
                name="movementCount"
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Second for Each Time"
                name="secondForEachTime"
              >
                <Input />
              </Form.Item>

              {/* <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item> */}
            </Form>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default App
