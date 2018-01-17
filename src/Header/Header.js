import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Menu,Input, Dropdown, Icon, Image } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
const logo = require('../images/logo.png');

class Header extends Component {
  static propTypes = {
    color: PropTypes.string,
  }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <Menu.Item>
            <a href="/auth/google">Login</a>
          </Menu.Item>
        );
      default:
        return (
          <Menu.Item>
            <a href="/api/logout">Log Out</a>
          </Menu.Item>
        );
    }

  }
  constructor(props)
  {
    super(props)  
    this.state={
      user : ''
    }
    this.doLogout = this.doLogout.bind(this);
  }

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { color,categories } = this.props
    const { activeItem } = this.state
 
    return (
      <Menu color={'red'}  size='large'>
        <Link to="/"><Menu.Item color={'red'} link={true}  >
        <Image src={logo} size="small" /> 
        </Menu.Item></Link>
       
        <Menu.Menu  position='right'>
          <Menu.Item>
            <Icon color={'red'} name="search"/>
          </Menu.Item>

          {(() => {
                      if (this.state.user){

                        return (
                          <div>
                          {/* <NavItem>
                            <NavLink>{this.props.auth.displayName}</NavLink>
                          </NavItem> */}
                                  <Menu.Item color={'red'} name='logout' active={activeItem === 'logout'} onClick={this.doLogout} />
                                  <Dropdown item text="Thapelo Motene">
                                    <Dropdown.Menu>
                                      <Dropdown.Item><Icon name="user" /> Account</Dropdown.Item>
                                      <Link to="/manage"><Dropdown.Item><Icon name="gear" /> Manage Store</Dropdown.Item></Link>
                                      <Dropdown.Item><Icon name="sign out" /> Logout</Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                          </div>
                        )
                      } else {
                        return [
                          <Menu.Item key="1" color={'red'} icon="arrow circle right" href="/login" name='Login' active={activeItem === 'Login'} onClick={this.handleItemClick} />,
                          <Dropdown item text="Thapelo Motene" key="2">
                          <Dropdown.Menu>
                            <Dropdown.Item><Icon name="user" /> Account</Dropdown.Item>
                            <Link to="/manage"><Dropdown.Item><Icon name="setting" /> Manage Store</Dropdown.Item></Link>
                            <Dropdown.Item><Icon name="sign out" /> Logout</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        ]
                      }
                   })()}
        </Menu.Menu>
      </Menu>
    )
  }
  async _getUser(){
    let response = await fetch('/user/get-current-user');
    let data = await response.json();

    this.setState({user : data},()=>(console.log('User', data)))
  }

  doLogout(){
    console.log("fired");
    //this.props.logout();
  }
}

export default Header