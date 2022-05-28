/* eslint-disable no-unused-expressions */

import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import './styles.css';

export default function Habitos() {

    const [name, setName] = useState('');
    const [days, setDays] = useState([1,2,3,4,5,6,7]);
    const [id, setId] = useState('');
    const [selecionado, setSelecionado] = useState(false);
    

    
    const enviar = localStorage.getItem("ola");
    function habittoken (){
        const body = {
            name,
            days,
        };
        const config = {
            headers: {
                Authorization: `Bearer ${enviar}`
            }
        };
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', body, config)
        promise.then((res) => {
            setId(res.data.token);
            setName(res.data.name);
            setDays(res.data.days);
            console.log(res.data);
        });
        
    }
    
   const toggle = () => {
       setSelecionado(!selecionado) ;
       if(!selecionado){
           all = <style>
               color:#52B6FF;
           </style>
           } else {
            all =
            <style>
                color:#CFCFCF;
            </style>
           }
   }
   
  let all;


    return (
        <Container>
            <Input type="text" placeholder="text" value={name} onChange={(e) => setName(e.target.value)} />
            <div className="criacaohabitos" >
                {days.map(b => <h3 onClick={toggle}>{b}</h3>)} 
            </div>
            {all}
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

