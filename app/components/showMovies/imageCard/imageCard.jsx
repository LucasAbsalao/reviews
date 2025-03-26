import { useEffect, useState } from 'react';
import './imageCard.css';
import TrashSVG from './trashSVG'

export default function ImageCard({ imageURL, title }) {
    const [trash, setTrash] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    const handleClickDeletar = () => {
        setTrash(true)
    };

    
    useEffect(() => {
        async function deletarMovie(){
            const requestBody = {}
            if(trash){
                requestBody.name = title

                const response = await fetch("http://localhost:5001/movies/delete", {
                    method: "DELETE",
                    headers: {
                    "Content-Type": "application/json"
                    },
                    body: JSON.stringify(requestBody)
                });

                const data = await response.json();
                if (!response.ok) {
                    throw new Error(`Erro na requisição: ${response.status}`);
                }

                setTrash(false)
            }
        }

        deletarMovie()
    })
    return (
        <div className="image-card" onMouseEnter={() => setShowDelete(true)} onMouseLeave={() => setShowDelete(false)}>
            <img src={imageURL} alt={title} width={200} height={200} className="image" />
            <h3 className="title">{title}</h3>
            {showDelete && 
                (<button id='deletar' onClick={handleClickDeletar}> <TrashSVG id="trash"/> </button>
                )
            }
        </div>
    );
}