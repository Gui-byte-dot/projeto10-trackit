import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cadastro from './Cadastro';
import Login from './Login';
import Habitos from './Habitos';
import ListarHabito from './ListarHabito';



export default function App() {
    const [token, setToken] = React.useState('');
    const [tok, setTok] = React.useState('');
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Login setToken={setToken} />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/habitos" element={<Habitos token={token} setTok={setTok} />}></Route>
                <Route exact path="/habitoslistados" element={<ListarHabito tok={tok} />}></Route>
                


            </Routes>


        </BrowserRouter>

    );
}
