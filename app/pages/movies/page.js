'use client';

import {useState, useEffect} from 'react'
import {useRouter} from 'next/navigation'
import ShowMovies from '../../components/showMovies/showMovies'

import './style.css'

export default function Home() {
    const [filteredTitle, setFilteredTitle] = useState('')
    const [filteredMovies, setFilteredMovies] = useState('')
    const [buttonPressed, setButtonPressed] = useState(false)
    const router = useRouter()

    const handleClickCadastrar = () => {
        router.push('/pages/addMovie'); // Navega para a página de cadastro
    };

    const handleSearchChange = (event) => {
        setFilteredTitle(event.target.value);  // Atualiza o termo de busca
        console.log(filteredTitle)
    };

    const handleButton = () => {
        setButtonPressed(true)
    }

    useEffect(() => {
        async function findByName (){
            const requestBody = {}

            if(filteredTitle) {
                requestBody.name = filteredTitle
                console.log(requestBody)
                const response = await fetch("http://localhost:5001/movies/get", {
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json"
                    },
                    body: JSON.stringify(requestBody)
                });

                if (!response.ok) {
                    throw new Error(`Erro na requisição: ${response.status}`);
                }

                const movie = await response.json();
                
                const imageMovieTitle = {
                    name: movie.movie.name, 
                    coverURL: movie.movie.cover.imageURL
                };
                setFilteredMovies(imageMovieTitle)
                setButtonPressed(false)
                console.log(filteredMovies)
            }
        }
        if (filteredTitle) {
            findByName();
        }
        findByName()
        
    },[filteredTitle])

    return (
        <div id='home'>
            <div id="header-bar">
                <div id="searchBar">
                    <input type="text" placeholder="Buscar filme..." id="searchInput" value = {filteredTitle} onChange={handleSearchChange}/>
                    <button id="lupa" onClick={handleButton}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
                                fill="#F9A826"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <ShowMovies filteredMovies = {filteredMovies}/>
            <button id='cadastrar' onClick={handleClickCadastrar}>
                Cadastrar
            </button>
        </div>
    );
}
  