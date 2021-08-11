import React from "react";
import {
    MenuFoldOutlined,
    ExpandOutlined,
    SettingOutlined,
    BellOutlined,
    FullscreenExitOutlined,
} from "@icon";
import { Badge, Dropdown, Menu } from "antd";
import { actions } from "module/navigation";
import { WithConfirm } from "@tools";
import { connect } from "react-redux";
import Tab from "./tabs";
import "./index.less";

class Header extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            isFullScreen: false,
        };
        this.logOut = this.logOut.bind(this);
    }

  toggleCollapseMenu = () => {
      const { dispatch } = this.props;
      console.log("ds");
      dispatch(actions.toggleCollapseMenu());
  };

  toggleFullScreen = () => {
      const { isFullScreen } = this.state;
      if (!isFullScreen) {
          const element = document.documentElement;
          if (element.requestFullscreen) {
              element.requestFullscreen();
          } else if (element.webkitRequestFullscreen) {
              element.webkitRequestFullscreen();
          }
      } else {
      // eslint-disable-next-line no-lonely-if
          if (document.exitFullscreen) {
              document.exitFullscreen();
          } else if (document.webkitExitFullscreen) {
              document.webkitExitFullscreen();
          }
      }
      this.setState({ isFullScreen: !isFullScreen });
  };

  @WithConfirm("确认要退出吗?")
  logOut() {
      const { dispatch } = this.props;
      dispatch(actions.logOut());
  }

  menu = () => (
      <Menu>
          <Menu.Item>
              <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.antgroup.com"
              >
                  个人信息
              </a>
          </Menu.Item>
          <Menu.Item danger onClick={this.logOut}>
              退出
          </Menu.Item>
      </Menu>
  );

  getTab = (id) => <div className={id === 2 ? "active" : ""}>{id}</div>;

  render() {
      const { isFullScreen } = this.state;
      return (
          <header className="ro-navigation-header">
              <div className="ro-icon ro-left-aside">
                  <MenuFoldOutlined onClick={this.toggleCollapseMenu} />
                  {!isFullScreen ? (
                      <ExpandOutlined onClick={this.toggleFullScreen} />
                  ) : (
                      <FullscreenExitOutlined onClick={this.toggleFullScreen} />
                  )}
              </div>
              {/* <div className="ro-header-tab ro-flex">
                  <Tab></Tab>
              </div> */}
              {/* <Tab /> */}
              <div className="ro-icon ro-right-aside ro-flex ro-align-items">
                  {/* <Input placeholder="Select" /> */}
                  <Badge size="small" count={5} overflowCount={99} offset={[-10, 10]}>
                      <BellOutlined />
                  </Badge>
                  <a href="#" className="ro-profile">
                      <span>rosen</span>
                      <img alt="" src={require("asset/images/global/header.jpg")} />
                  </a>
                  <Dropdown overlay={this.menu()} trigger="click">
                      <SettingOutlined />
                  </Dropdown>
              </div>
          </header>
      );
  }

}

export default connect()(Header);
