import React, { Component } from 'react'
import classes from './Layout.css'

class Layout extends Component {
  render () {
    return (
      /*корневой див всего проекта, на который будет повешены глобальные стили + сюда будут выноситься корневые меню*/
      <div className={classes.Layout}>
        {/*весь контент будет тут (все страницы приложения)*/}
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Layout