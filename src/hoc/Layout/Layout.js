import React, { Component } from 'react'
import classes from './Layout.css'
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle'
import Drawer from '../../components/Navigation/Drawer/Drawer'

class Layout extends Component {

  state = {
    menu: false,
  }

  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu,
    })
  }

  menuCloseHandler = () => {
    this.setState({
      menu: false
    })
  }

  render () {
    return (
      /*корневой див всего проекта, на который будет повешены глобальные стили + сюда будут выноситься корневые меню*/
      <div className={classes.Layout}>

        <Drawer
          isOpen={this.state.menu}
          onClose={this.menuCloseHandler}
        />

        <MenuToggle
          onToggle={this.toggleMenuHandler}
          isOpen={this.state.menu}
        />

        {/*весь контент будет тут (все страницы приложения)*/}
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Layout