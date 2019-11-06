import React from 'react'
import MenuItem from './MenuItem'

export default class Menu extends React.Component {
    render() {
        const items = this.props.items.map((item, index) => 
            <MenuItem key={index} href={item.href}>{item.title}</MenuItem>)
        return (
            <div className='navbar'>
                <img src={this.props.logoLink} className='menu-logo' width={261} height={57} alt='Company logo'></img>
                <nav className='menu-wrapper'>
                    <ul className='menu-list'> {items} </ul>
                </nav>
            </div>
        )
    }
}