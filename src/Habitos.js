

import axios from "axios";
import { useState, useEffect } from 'react';
import styled from "styled-components";

export default function Habitos(){
    const [habitinfo, setHabitinfo] = useState("");
    const [name, setName] =  useState('');
    const [days, setDays] =  useState('');
    const [token, setToken] = useState('');

    useEffect(() = {
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",{
            headers: {
             Authorization: `Bearer ${token}`
            }
        }
    }
    
    
    
    
    
    )

    function cadastrarhabito(){
    
        
        const allDays = [
            {
                id: "7",
                day: "D",
            },
            {
                id: "1",
                day: "S",
            },
            {
                id: "2",
                day: "T",
            },
            {
                id: "3",
                day: "Q",
            },
            {
                id: "4",
                day: "Q",
            },
            {
                id: "5",
                day: "S",
            },
            {
                id: "6",
                day: "S",
            },
        ];
    
    
    const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',allDays,config );

  
    promise.then(res =>{
        console.log(res.data);
        setToken(res.data.token);
        setDays(res.data)
        })
    .catch(err => {
        console.log(err)
        })
    }

   

    return (
        <Container>
            <Input type="text" placeholder="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <Button>{days}</Button>
            <Button onClick={cadastrarhabito}>Salvar</Button>
        </Container>
    
    
        );
        
}

const Input = styled.input`
    width: 303px;
`



const Container = styled.div`
    display:flex;
`
const Button = styled.button`
    display:flex;
`

// export default function Habitos(){
//     return (
//         <h2>ola</h2>
//     )
// }