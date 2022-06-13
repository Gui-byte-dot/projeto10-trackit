

import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from 'axios';
import Habitos from "./Habitos";


export default function ListarHabito(){
    
    const [data,setData] = useState('');

    let number = [{'days':1}]
    const ok = localStorage.getItem("ola");
    const lol = localStorage.getItem("sim");
    const [habitos, setHabitos] = useState([]);
    const infos = [1,2,3,4,5,6,7];


    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${ok}`
            }
        }
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config);
        promise.then((object) => {
            setHabitos(object.data);
            console.log(object.data);
        })
        .catch(err => {
            console.log(err);
        })


    }, []);

    // arr.push.apply(arr, ['c', 'd']); // equivalent to Array.prototype.push.apply(arr, [...])

    return (
        <div className="habitos">
               {habitos.map((t) => {
               return (
                <>  
                    <div className="listados">
                        <div>{t.name}</div>
                        <div className="days" key={t.id}> 
                              <p>{t.days}<span>{infos}</span></p>
                        </div>

                    </div>
                </>
// var novaArr = arr.filter((este, i) => arr.indexOf(este) === i);

               )})}
        </div>
    )
}



// {t.days.map((s) => {
//     return(
//         <div className="days1">{s}</div>
//     )
// })}




// .map((s) => {
//     return (
//         <div className="destaque" style={{color:'#FFFFFF',background: '#CFCFCF'}}>
//             {s}
//         </div>
//     )
// })}