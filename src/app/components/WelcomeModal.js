import React, { Component } from 'react'

export default class WelcomeModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: false
        }
        this.handClose = this.handClose.bind(this)
    }
    handClose() {
        this.setState( { modal: false })
    }
    render() {
        return this.state.modal && (
            <div className='modal-wrapper'>
                <div className='modal'>
                <div className='modal_header'>
                    <h3 className='modal_header-text'> { this.props.title } </h3>
                    <button className='modal_button-close small' onClick={this.handClose}>X</button>
                </div>
                <div className='modal_body'>
                    <p className='modal_body-text'> { this.props.text } </p>
                    <button className='modal_button-close' onClick={this.handClose}>Close</button>
                </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.setState({ modal: true })
    }
}
