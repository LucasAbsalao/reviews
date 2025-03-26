'use client';

import './style.css'
import {useRouter} from 'next/navigation'
import MovieRegister from '../../components/movieRegister/movieRegister'

export default function Home() {
    const router = useRouter()

    const handleClickVoltar = () => {
        router.push('/pages/movies'); // Navega para a página de cadastro
    };

    return (
        <div id='cad'>
            <div id='voltar' onClick = {handleClickVoltar}> voltar </div>
            <MovieRegister/>
        </div>
    );
}