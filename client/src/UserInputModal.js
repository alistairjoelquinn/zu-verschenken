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
    justify-content: center;
`;

const UserInputModal = ({ setShowModal }) => {
    return (
        <UserInputStyles>
            User Input Modal
            <button onClick={() => setShowModal(false)}>Done!</button>
        </UserInputStyles>
    );
};

export default UserInputModal;