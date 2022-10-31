import React from 'react'
import { useState } from 'react'
import Cookies from 'universal-cookie'

import Input from '../../atoms/Input'

import * as Styled from './styles'
import { Navigate } from 'react-router-dom'

const Login = () => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const cookies = new Cookies()

    const isLoggedIn = cookies.get('isLoggedIn', user, password)

    const handleSubmit = () => {
        //setUser('')
        //setPassword('')
        cookies.set('isLoggedIn', user)

        const isPasswordValid = validatePassword(password)
        console.log(isPasswordValid)

        if (isPasswordValid) {
            return true
        } else {
            setErrorMessage('Password is not strong')
        }
       
    }
    // const handlePasswordChange = (value) => {
    //     setErrorMessage('')
    //     setPassword(value)
    // }

    const validatePassword = (password) => {
        console.log('kfdsgsdf', password)

        if (!password.length > 8) {
            return true
        }

        return false
    }

    if (isLoggedIn) {
        return <Navigate to="/" return />
    }

    return (
        <Styled.LoginWrapper>
            <Styled.LoginForm>
                <Styled.Header>Sign In</Styled.Header>
                <Input
                    type="text"
                    placeholder="username"
                    onChange={setUser}
                    value={user}
                ></Input>

                <Input
                    type="password"
                    placeholder="password"
                    onChange={setPassword}
                    value={password}
                ></Input>
                <span>{errorMessage}</span>

                <Styled.ButtonLogin text="Login" onClick={handleSubmit}>
                    Login
                </Styled.ButtonLogin>
            </Styled.LoginForm>
        </Styled.LoginWrapper>
    )
}

export default Login
