/* eslint-disable no-unused-expressions */

import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import './styles.css';
import { Link, useNavigate } from "react-router-dom";
import react from "react";
import { useRef } from "react";
import ListarHabito from "./ListarHabito";

export default function Habitos() {

    const [name, setName] = useState('');
    const info = [1, 2, 3, 4, 5, 6, 7];
    const [days, setDays] = useState(info);
    const selecionados = [];
    const navigate = useNavigate();

    const [id, setId] = useState('');

    const enviar = localStorage.getItem("ola");

    function habittoken(e) {
        const body = {
            name,
            days:selecionados,
        };
        const config = {
            headers: {
                Authorization: `Bearer ${enviar}`
            }
        };
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', body, config)
         promise.then((obj) => {
            setId(obj.data.token);
            setName(obj.data.name);
            setDays(obj.data.days);
            localStorage.setItem("sim", obj.data.token);
            navigate(`/habitoslistados`);
            console.log(obj.data);
            
        });
    }
    const handle = (e) => {
           selecionados.push(parseInt(e.currentTarget.innerText));
           e.currentTarget.classList.toggle('cinza');
           console.log(selecionados);
    }
 

   

return (
    <Container>
        <Input type="text" placeholder="text" value={name} onChange={(e) => setName(e.target.value)} />
        <div className="criacaohabitos" >
            {days.map(b => <h3 key={b} onClick={handle}>{b}</h3>)}
        </div>
            <Button onClick={habittoken}>Salvar</Button>
    </Container>


);



}

const Input = styled.input`
    width: 303px;
`;



const Container = styled.div`
    display:flex;
    flex-direction: column;
`;
const Button = styled.div`
    display:flex;
`;

