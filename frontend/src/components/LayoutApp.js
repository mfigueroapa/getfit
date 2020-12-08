import { Layout, Row, Col, Button, Avatar } from "antd"
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useContextInfo } from "../hooks/context"
import MY_SERVICE from "../services"
import logo from "../images/logo.svg"
import Profile from "../components/profile/Profile"

const { Header, Content, Footer } = Layout

export default function LayoutApp({ children }) {
  const { user, logout } = useContextInfo()
  const [image, setImage] = useState()
  const [profile, setProfile] = useState(false)

  useEffect(() => {
    if (user) {
      setImage(user.profile_pic)
    } else {
      setImage("")
    }
  })

  async function handleLogout() {
    console.log("handleLogout")
    await MY_SERVICE.logOut()
    logout()
  }

  function handleProfile() {
    if (profile) {
      setProfile(false)
    } else {
      setProfile(true)
    }
  }

  return (
    <div id="custom">
      <Layout className="layout">
        <Row>
          <Col
            className="custom-container"
            xs={{ span: 24 }}
            s={{ span: 22, offset: 1 }}
            lg={{ span: 22, offset: 1 }}
          >
            <Header>
              <div className="layout__container">
                <div>
                  <div className="layout__image">
                    {!user ? (
                      <Link to="/">
                        <img src={logo} />
                      </Link>
                    ) : (
                      <img src={logo} />
                    )}
                  </div>
                </div>
                <div className="layout__links">
                  {!user ? (
                    <>
                      <Link to="/signup">
                        <Button type="primary">Signup</Button>
                      </Link>
                      <Link to="/login">
                        <Button>Login</Button>
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link to="/dashboard">
                        <Button type="text">Feed</Button>
                      </Link>
                      <Link to="/workouts">
                        <Button type="text">workouts</Button>
                      </Link>
                      <Link to="/create-workout">
                        <Button type="text">make workout</Button>
                      </Link>

                      <a onClick={handleProfile}>
                        <Avatar size="large" src={image} />
                      </a>
                    </>
                  )}
                </div>
              </div>
            </Header>
          </Col>
        </Row>
        <br />
        <Content>
          <Row>
            <Col
              xs={{ span: 24 }}
              s={{ span: 22, offset: 1 }}
              lg={{ span: 22, offset: 1 }}
            >
              <div className="site-layout-content">
                {profile && <Profile />}
                {children}
              </div>
            </Col>
          </Row>
        </Content>
        <Footer>
          <Row>
            <Col
              xs={{ span: 24 }}
              s={{ span: 22, offset: 1 }}
              lg={{ span: 22, offset: 1 }}
            >
              <div className="footer__container">
                <div className="footer__image">
                  <img src={logo} />
                  <p>Powered by IRONHACK</p>
                </div>
                <div>GetFitTeam © Copyright 2020</div>
              </div>
            </Col>
          </Row>
        </Footer>
      </Layout>
    </div>
  )
}
