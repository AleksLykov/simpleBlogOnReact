import React from 'react'
import PropTypes from 'prop-types'

export default class MenuItem extends React.Component {
    render() {
        return <li className='menu-list_item'><a href={this.props.href} className='menu-list_link'>{this.props.children}</a></li>
    }
}

MenuItem.propTypes = {
    children: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
}