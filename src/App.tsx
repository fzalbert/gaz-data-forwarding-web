import React, { useState } from 'react';
import './index.css';
import {
  ShopOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import AuthForm from './component/form/AuthForm';
import { DevicesList } from './component/list/DevicesList';
import { TagsList } from './component/list/TagsList';
import { TagValuesList } from './component/list/TagValuesList';
import DeviceForm from './component/form/DeviceForm';
import { Footer } from 'antd/es/layout/layout';
import DevicePage from './component/page/DevicePage';
import { RequestsList } from './component/list/RequestsList';
import { ItemType } from 'antd/es/menu/hooks/useItems';

const { Header, Content, Sider } = Layout;

const MyLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const menuItems: ItemType[] = [
    {
      key: 0,
      icon: React.createElement(ShopOutlined),
      label: "Авторизация",
      onClick: (e) => navigate('/auth')
    },
    {
      key: 1,
      icon: React.createElement(ShopOutlined),
      label: "Устройства",
      onClick: (e) => navigate('/devices')
    },
    {
      key: 2,
      icon: React.createElement(ShopOutlined),
      label: "Теги",
      onClick: (e) => navigate('/tags')
    },
    {
      key: 3,
      icon: React.createElement(ShopOutlined),
      label: "Замеры",
      onClick: (e) => navigate('/tag-values')
    },
    {
      key: 4,
      icon: React.createElement(ShopOutlined),
      label: "Создание прибора.",
      onClick: (e) => navigate('/device/create')
    },
    {
      key: 5,
      icon: React.createElement(ShopOutlined),
      label: "Детали прибора.",
      onClick: (e) => navigate('/device/1')
    },
    {
      key: 6,
      icon: React.createElement(ShopOutlined),
      label: "История отчетов.",
      onClick: (e) => navigate('/requests')
    }
  ];

  const isAuthenticatedDefault = localStorage.getItem('tokenData') != null && localStorage.getItem('tokenData') !== "";
  const [isAuthenticated, setAuthenticated] = useState<boolean>(isAuthenticatedDefault);

  return (
      <Layout hasSider>
        <Sider
            collapsible
            trigger={null}
            collapsed={collapsed}
        >
          <Menu style={{ marginTop: 32 }} theme="dark" mode="inline" defaultSelectedKeys={['1']} items={isAuthenticated ? menuItems : []}
          />
        </Sider>
        <Layout className="site-layout">
          <Header style={{ padding: 0, background: colorBgContainer, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}
            <h2 style={{ color: 'black' }}>Nurlan APP</h2>
            {
              isAuthenticated ? (
                      <>
                        <Button onClick={() => {
                          localStorage.setItem('tokenData', '')
                          setAuthenticated(false);
                        }} color='blue' style={{
                          display: 'block',
                          marginLeft: 'auto',
                          marginRight: 24
                        }}>
                          Выход
                        </Button>
                      </>
                  )
                  :
                  (
                      <Button onClick={() => navigate("/auth")} color='blue' style={{
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 24
                      }}>
                        Войти
                      </Button>
                  )
            }
          </Header>
          <Content style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: '100vh',
            background: colorBgContainer,
            borderRadius: 20
          }}>
            <Routes>
              <Route path='/auth' element={<AuthForm setAutheticated={setAuthenticated} />} />
              <Route path='/devices' element={<DevicesList />} />
              <Route path='/tags' element={<TagsList items={[]} />} />
              <Route path='/tag-values' element={<TagValuesList />} />
              <Route path='/device/create' element={<DeviceForm />} />
              <Route path='/device/:deviceId' element={<DevicePage />} />
              <Route path='/requests' element={<RequestsList />} />
            </Routes>
          </Content>
          <Footer style={{ alignContent: 'center' }}>Nurlan APP @Create by MIFSoftWare</Footer>
        </Layout>
      </Layout >
  )
}

const App: React.FC = () => {

  return (
      <BrowserRouter>
        <MyLayout />
      </BrowserRouter>
  );
};

export default App;
