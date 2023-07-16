import ButtonComponent from "./ButtonComponent";
const InputComponent = () => {

    return (
        <div>
            <input placeholder="Title" type="text"></input>
            <input placeholder="Description" type="text"></input>
            <ButtonComponent />
        </div>
    )
}

export default InputComponent;