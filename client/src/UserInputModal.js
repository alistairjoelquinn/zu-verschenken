import { useState } from 'react';
import styled from 'styled-components';

const UserInputStyles = styled.div`
    position: absolute;
    top: 35vh;
    left: 50vw;
    transform: translateX(-50%);
    height: 50vh;
    width: 50vw;
    background-color: white;
    color: black;
    border: 3px solid black;
    border-radius: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    p {
        margin: 0;
    }
    input[name="contents"] {
        width: 60%;
    }
    input[type='file'] {
        color: transparent;
        width: 6rem;
    }
    #drop {
        height: 40%;
        width: 70%;
        border: 5px dashed black;
        border-radius: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
`;

const UserInputModal = ({ setShowModal, setFile, file, submitNewLocationToServer }) => {
    const [boxContents, setboxContents] = useState('');

    const userSubmitHandler = () => {
        setShowModal(false);
        submitNewLocationToServer(boxContents);
    };

    return (
        <UserInputStyles>
            <label htmlFor="contents">Can you list the items contained? e.g books, records</label>
            <input name="contents" type="text" onChange={(e) => setboxContents(e.target.value)} />
            <label id="drop" htmlFor="file">
                <p>Drag & drop a photo here</p>
                <p>or</p>
                <input id="browse" type="file" name="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
                {file && <p>{file.name} selected</p>}
            </label>
            <button onClick={() => userSubmitHandler()}>Done!</button>
        </UserInputStyles>
    );
};

export default UserInputModal;