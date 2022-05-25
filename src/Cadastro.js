import styled from 'styled-components';
import { useState } from "react";





export default function Cadastro(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [foto, setFoto] = useState('');

    function cadastrar() {
        const body = {
            email: email,
            senha: senha,
            nome: nome,
            foto: foto,


        }
        console.log(body);
    }

    return (
        <Inputs>
            <InputCadastroEmail type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <InputCadastroSenha type="password" placeholder="senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>
            <InputCadastroNome type="text" placeholder="nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
            <InputCadastroFoto type="text" placeholder="foto" value={foto} onChange={(e) => setFoto(e.target.value)} />
            <Button onClick={cadastrar}>Cadastrar</Button>
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