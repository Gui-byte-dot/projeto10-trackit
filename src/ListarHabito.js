

import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from 'axios';
import Habitos from "./Habitos";


export default function ListarHabito(){
    const [name, setName] = useState('');
    const [days, setDays] = useState('');
    const selecionados = [];
    const [data,setData] = useState('');


    const [id, setId] = useState('');
    const ok = localStorage.getItem("ola");
    const lol = localStorage.getItem("sim")



    function pegarhabito(){
        console.log(ok);

          const body = {
              name,
              days:selecionados,
          }
          
          const configuracao = {
                headers: {
                    Authorization: `Bearer ${lol}`
                }
            }
            // eslint-disable-next-line react-hooks/rules-of-hooks
            useEffect(() => {
            const promessa = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', body, configuracao)
            promessa.then((objeto) => {
                setName(objeto.data.name);
                console.log(objeto.data);
                console.log(objeto.data[0].name);
                console.log(objeto.data[167]);


                
            })
        }, []);
          
            
        
    
    }


    return (
      <List>

        
        <Button onClick={pegarhabito}>ola</Button> 
        <div className="criacao">
            <h3>{days}</h3> 
        </div>
             
       <div className="criacao">
           <ul>
                <h3 key={id}>{name}</h3>
           </ul>
       
        </div>

       


      </List>

    )


}
// function pegarhabito(a){
//     const corpo = {
//         name,
//         days: selecionados,
//     };
//     const configuracao = {
//         headers: {
//             Authorization: `Bearer ${enviar}`
//         }
//     }
//     const promessa = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', corpo, configuracao)
//     promessa.then((objeto) => {
//         setId(objeto.data.token);
//         setName(objeto.data.name);
//         setDays(objeto.data.days);
//         console.log(a)
//     })
// }
const List = styled.div`
    display: flex;
    flex-direction: column;
`
const Button = styled.button`
    display: flex;
    height: 50px;
    width: 50px;
`
const Result = styled.div`
    display: flex;
`