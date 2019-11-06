import React from 'react'
import ReactDOM from 'react-dom'
import './app/styles/style.css'
import Menu from './app/components/Menu'
import Blog from './app/components/Blog'
import WelcomeModal from './app/components/WelcomeModal'

class App extends React.Component {
    render() {
        const menuItems = [
            { href: './tech.html', title: 'Technologies'},
            { href: './service.html', title: 'Services'},
            { href: './about.html', title: 'About us'},
            { href: './contacts.html', title: 'Contacts'}
        ]
        const currentPosts = [
            { title: 'POST №1. Lorem ipsum dolor sit amet consectetur adipisicingelit.',
              postBody: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, perferendis. Officia illo doloribus, ad soluta tenetur officiis optio consequuntur, corrupti natus rem facere at ipsa repudiandae ipsum aliquid error odio tempora voluptates? Quibusdam quod voluptatum beatae, quas rerum, cupiditate dolorem architecto nemo voluptatibus modi illo corporis ipsa sapiente error iusto.',
              createDate: ''},
            { title: 'POST №2. Lorem ipsum dolor sit amet consectetur adipisicingelit. Quibusdam, sed!',
              postBody: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, perferendis. Officia illo doloribus, ad soluta tenetur officiis optio consequuntur, corrupti natus rem facere at ipsa repudiandae ipsum aliquid error odio tempora voluptates? Quibusdam quod voluptatum beatae, quas rerum, cupiditate dolorem architecto nemo voluptatibus modi illo corporis ipsa sapiente error iusto.',
              createDate: ''},
            { title: 'POST №3. Lorem ipsum dolor sit amet consectetur adipisicingelit. Quibusdam, sed!',
              postBody: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, perferendis. Officia illo doloribus, ad soluta tenetur officiis optio consequuntur, corrupti natus rem facere at ipsa repudiandae ipsum aliquid error odio tempora voluptates? Quibusdam quod voluptatum beatae, quas rerum, cupiditate dolorem architecto nemo voluptatibus modi illo corporis ipsa sapiente error iusto.',
              createDate: ''},
            { title: 'POST №4. Lorem ipsum dolor sit amet consectetur adipisicingelit.',
              postBody: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, perferendis. Officia illo doloribus, ad soluta tenetur officiis optio consequuntur, corrupti natus rem facere at ipsa repudiandae ipsum aliquid error odio tempora voluptates? Quibusdam quod voluptatum beatae, quas rerum, cupiditate dolorem architecto nemo voluptatibus modi illo corporis ipsa sapiente error iusto.',
              createDate: ''},
            { title: 'POST №5. Lorem ipsum dolor sit amet consectetur adipisicingelit. Quibusdam, sed!',
              postBody: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, perferendis. Officia illo doloribus, ad soluta tenetur officiis optio consequuntur, corrupti natus rem facere at ipsa repudiandae ipsum aliquid error odio tempora voluptates? Quibusdam quod voluptatum beatae, quas rerum, cupiditate dolorem architecto nemo voluptatibus modi illo corporis ipsa sapiente error iusto.',
              createDate: ''},

        ]
        const logoMainPath = './img/logo1.png'
        const blogTitle = 'Current blog posts'
        const modalTitle = 'New modal welcome!'
        const modalText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium vel iure modi ipsa inventore, maxime asperiores magni unde fugit repudiandae dolore praesentium nam delectus quos iusto ut maiores iste! Delectus, magnam consectetur eligendi reiciendis reprehenderit iste. Molestias iste suscipit sed ipsum sint nesciunt ratione cum explicabo. Nihil deserunt quisquam repellat.'
        return (
        <div>
            <Menu items = { menuItems } logoLink = {logoMainPath}/>
            <Blog posts = { currentPosts } title = { blogTitle }/>
            <WelcomeModal title={ modalTitle } text={ modalText }/>
        </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))