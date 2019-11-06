import React, { Component } from 'react'

export default class Post extends Component {
    render() {
        return (
            <div className='post-wrapper'>
                <h3 className='post-wrapper_title'> { this.props.title } </h3>
                <p className='post-wrapper_text'> { this.props.body } </p>
                <p className='post-wrapper_date'>{ 'Date: '+this.props.date } </p>
            </div>
        )
    }
}
