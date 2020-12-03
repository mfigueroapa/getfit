import { Layout, Menu } from "antd"
import React, {useState} from "react"
import { Link } from "react-router-dom"
import { useContextInfo } from "../hooks/context"
import MY_SERVICE from "../services"


const { Header, Content, Footer } = Layout

export default function LayoutApp({ children }) {
  const {user, logout} = useContextInfo()
  
  async function handleLogout() {
    console.log("handleLogout")
    await MY_SERVICE.logOut()
    logout()
  }
 
  return (
    <>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>
            {!user ? (
              <>
                <Menu.Item key="2">
                  <Link to="/signup">Signup</Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to="/login">Login</Link>
                </Menu.Item>
              </>
            ) : (
              <React.Fragment>
                <Menu.Item key="4">
                  <Link to="/profile">Profile</Link>
                </Menu.Item>
                <Menu.Item key="5" onClick={handleLogout}>
                  Logout
                </Menu.Item>
              </React.Fragment>
            )}
          </Menu>
        </Header>
        <br />
        <Content
          style={{
            padding: "0 50px",
            height: "calc(100vh - 153.6px)",
            minHeight: "100vh",
          }}
        >
          <div className="site-layout-content">{children}</div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </>
  )
}
