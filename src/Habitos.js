/* eslint-disable no-unused-expressions */

import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import './styles.css';
import { Link } from "react-router-dom";
import react from "react";
import { useRef } from "react";
import { useEffect } from "react/cjs/react.production.min";
import ListarHabito from "./ListarHabito";

export default function Habitos() {

    const [name, setName] = useState('');
    const info = [1, 2, 3, 4, 5, 6, 7];
    const [days, setDays] = useState(info);
    const selecionados = [];


    const [id, setId] = useState('');




    const enviar = localStorage.getItem("ola");

    // function reset(e){
    //     setDays(info);


    // }
    


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
            localStorage.setItem("sim", obj.data.token)


            console.log(obj.data);
            // console.log(e);
            
        });
        // reset(e);   

    }
    // function pegarhabito(){
      
     
    //   const configuracao = {
    //         headers: {
    //             Authorization: `Bearer ${enviar}`
    //         }
    //     }
    //     const promessa = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', configuracao)
    //     promessa.then((objeto) => {
    //         setId(objeto.data.token);
    //         console.log(objeto.data);
    //         console.log(objeto.data[0].name);
            
    //     });

    //    console.log(enviar);

        


       
       
    // }
   

   


    const handle = (e) => {
           selecionados.push(parseInt(e.currentTarget.innerText));
           e.currentTarget.classList.toggle('cinza');
           console.log(selecionados);

    }
   

    // const onClick = () => {
    //     setDays(arr => [...arr, `${arr.length}`]);
    // }
    // const onClick = () => {
    //     box.current.backgroundColor = "blue";
    //     // }
    // const change = () => {
    //     setSelecionado('azul')
    // }

    //   const addTodo = () => {
    //       setDays((t) => [...t, "cinza"]);
    //   };

    // const handleClick = () => {
    //     setSelecionado(current => !current);
    // }

    

    // const handleChange = event => {
    //     setIngrediens({[event.target.name]: event.target.value})
    //     setRecipe({[event.target.name]: event.target.value})
    // }





return (
    <Container>
        <Input type="text" placeholder="text" value={name} onChange={(e) => setName(e.target.value)} />


        <div className="criacaohabitos" >

            {days.map(b => <h3 key={b} onClick={handle}>{b}</h3>)} 
            {/* {days.map((e) => <h2 key={e} style={{
                color: selecionado ? 'red' : '',
            }} onClick={handleClick}>{e}</h2>)} */}


        </div>
        <Button onClick={habittoken}>Salvar</Button>
        <Link to="/habitoslistados">
            <Button>habitos</Button> 
        </Link>


       
        


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

