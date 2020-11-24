import React, { PureComponent } from 'react'
import './Styles/ToggleBtn.scss'

export default class ToggleBtn extends PureComponent {
    state = { toggle: this.props, switcher: this.props}
    
    render() {
        let {toggleBtn} = this.props
        let {switcherBtn} = this.props
        let {click} = this.props
        return (
            <div className={`toggle_btn ${toggleBtn}`}>
                <div className={`togglerBtn ${switcherBtn}`} onClick={click}></div>
            </div>
        )
    }
}
