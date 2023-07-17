import React from "react";
import { useState, useEffect } from "react";
import ButtonComponent from "./ButtonComponent";
// import Display from "../Display";

const InputComponent = () => {
    const [ideas, setIdeas] = useState([])
    const [titleInput, setTitleInput] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/ideas', {
                    method: 'GET',
                });
                const data = await response.json();
                setIdeas(data);
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    const handleAddInputs = async () => {
        try {
            const response = await fetch('http://localhost:3000/ideas', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ idea: titleInput, description: descriptionInput})
                });
                const data = await response.json();
                setIdeas(data);
                // console.log(data);
                setTitleInput("");
                setDescriptionInput("");
                // console.log(data.description);
            } catch (error) {
                console.log(error);
        }
    }
    const handleDeleteInputs = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/ideas/${id}`, {
              method: 'DELETE',
            });
            setIdeas(ideas.filter((idea) => idea.id !== id));
          } catch (error) {
            console.log(error);
          }
    };

    const handleTitleChange = (e) => {
        setTitleInput(e.target.value);
    }
    const handleDescriptionChange = (e) => {
        setDescriptionInput(e.target.value);
    }

    return (
        <>
            <div className="app-container">
                <div className="input-container">
                    <input placeholder="Title" type="text" onChange={handleTitleChange} value={titleInput}></input>
                    <input placeholder="Description" type="text" onChange={handleDescriptionChange} value={descriptionInput}></input>
                    <ButtonComponent handleAddInputs={handleAddInputs}/>
                </div>
                <div className="list-container">
                    {ideas.map((idea) => (
                        <li className="card" key={idea.id}>
                            <h2>{idea.idea}</h2>
                            <p>{idea.description}</p>
                            <button className="deleteBtn" onClick={() => handleDeleteInputs(idea.id)}></button>
                        </li>
                    ))}
                </div>
            </div>  
        </>
    )
}

export default InputComponent;