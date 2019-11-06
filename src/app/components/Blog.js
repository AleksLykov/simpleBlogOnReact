import React, { Component } from 'react'
import Post from './Post'
import WelcomeModal from './WelcomeModal'

export default class Blog extends Component {
    render() {
        const posts = this.props.posts.map( (item, index) =>
            <Post key={index} title={item.title} body={item.postBody} date={item.createDate}></Post>)
        return (
            <section className='blog'>
                <h2 className='blog_title'> { this.props.title } </h2>
                { posts }
            </section>
        )
    }
}
