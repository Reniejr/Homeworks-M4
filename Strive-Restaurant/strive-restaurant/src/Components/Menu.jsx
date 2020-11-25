import React, { PureComponent } from 'react'
import MenuShow from './MenuShow'
import './Styles/Menu.scss'

export default class Menu extends PureComponent {
    render() {
        return (
            <div id='menu'>
                <MenuShow/>
            </div>
        )
    }
}
