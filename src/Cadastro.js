import styled from 'styled-components';
import { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';






export default function Cadastro(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');

    const navigate = useNavigate('');

    function cadastrar() {
        const body = {
            name,
            image,
            email,
            password,



        }
        
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up',body)
        promise.then(res =>{
            console.log(res.data);
            navigate("/");
        })
        .catch(err => {
            console.log(err)
        })
        
    }

    return (
        <Inputs>
            <InputCadastroEmail type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <InputCadastroSenha type="password" placeholder="senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <InputCadastroNome type="text" placeholder="nome" value={name} onChange={(e) => setName(e.target.value)}/>
            <InputCadastroFoto type="text" placeholder="foto" value={image} onChange={(e) => setImage(e.target.value)} />
            <Button onClick={cadastrar}>Cadastrar</Button>
            <Link to="/">Já possui uma conta? Faça login</Link>
        </Inputs>


    )
}
const Inputs = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
`

const InputCadastroEmail = styled.input`
    width: 303px;
    height: 45px;

`
const InputCadastroSenha = styled.input`
    width: 303px;
    height: 45px;
`
const InputCadastroNome = styled.input`
    width: 303px;
    height: 45px;
`
const InputCadastroFoto = styled.input`
    width: 303px;
    height: 45px;
`
const Button = styled.button`
    width: 303px;
    height: 45px;
    background: #52B6FF


`
