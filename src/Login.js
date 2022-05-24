import { useState } from "react";
import axios from 'axios';
import styled from 'styled-components';



export default function Login(){


    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function login() {

        const body = {
            email,
            senha,
        }

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', body)
        promise.then(res =>{
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <Container>
            <Input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <Input type="text" placeholder="senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>
            <Button onClick={login}>Entrar</Button>
        </Container>


    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;

`
const Input = styled.input`
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;

`
const Button = styled.button`
    background: #52B6FF;
    border-radius: 4.63636px;
    width: 303px;
    height: 45px;

`