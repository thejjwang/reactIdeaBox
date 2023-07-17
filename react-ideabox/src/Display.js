
const Display = ({handleDeleteInputs, ideas}) => {
    return (
        <div className="list-container">
        {ideas.map((idea) => (
            <li className="card" key={idea.id}>
                <h2>{idea.idea}</h2>
                <p>{idea.description}</p>
                <button className="deleteBtn" onClick={() => handleDeleteInputs(idea.id)}></button>
            </li>
        ))}
    </div>
    )
}

export default Display;