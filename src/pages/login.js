import React, { Component } from 'react'
import { FireApp, Auth, Firestore } from '../database/database'
import Layout from '../components/layout'

export default class Login extends Component {
    state = {
        email: '',
        password: ''
    }
    login = () => {
        Auth.signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(val => {
                
            }).catch(console.log)
    }

    signUp = () => {
        
        Auth
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(obj => {
                Firestore.collection('users')
                    .add({...obj.user.toJSON(), isAdmin: true})
                    .then(console.log)
            })
            .catch(console.log)
    }

    render() {
        return (
            <Layout>
                <div>
                <p>Login or Sign Up: </p>
                <input onChange={e => this.setState({email: e.target.value})}
                    value={this.state.email}
                    type="text" placeholder="Email" />
                <input type="text"
                    value={this.state.password}
                    onChange={e => this.setState({password: e.target.value})}
                 placeholder="Password" />
                <button onClick={this.login}>Login</button>
                <button onClick={this.signUp}>Sign Up</button>

                <button onClick={() => Auth.signOut()}>Logout</button>
                </div>

            </Layout>
        )
    }
}
