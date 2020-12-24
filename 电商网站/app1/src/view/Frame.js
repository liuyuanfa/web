import React from 'react'
import { Layout, Menu, } from 'antd';
// import { HomeFilled,HeartFilled } from '@ant-design/icons';

import {Routes} from '../routes/index'

import {withRouter} from 'react-router-dom'
const { Header, Content, Sider } = Layout;

const routes = Routes.filter(route=>route.isShow)
function Frame(props) {
    return (
        <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <h2 style={{color:'white'}}>电商网站</h2>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              {routes.map(route=>{
                return <Menu.Item key={route.path} onClick={p=>props.history.push(p.key)}>
                  
                  {route.title}</Menu.Item>
              })}
              
              
            </Menu>
          </Sider>
          <Layout style={{ padding: '16px' }}>
            
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
}

export default withRouter(Frame)
