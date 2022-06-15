import React, { Component } from 'react'
// import cart from './cart'

class product extends Component {

    render() {
        return (
            <>
                <cart />
            </>
        )
    }
}

export default product;

class cart extends Component {

    constructor(props) {
        super(props)

        this.state = {
            qty: 0
        }
    }

    UpdateQty = () => {
        this.setState({
            qty: this.state.qty + 1
        })
    }

    componentDidMount() {
        console.log("Execute after component render")
    }

    componentDidUpdate(prevProps, prevStates) {
        console.log("component updated")
    }


    render() {
        return (
            <div>
                <h1>CART : {this.state.qty} </h1>
                <button onClick={this.UpdateQty} >Update</button>
            </div>
        )
    }

}







