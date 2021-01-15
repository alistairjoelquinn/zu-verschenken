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
`;

const UserInputModal = () => {
    return (
        <UserInputStyles>
            User Input Modal
        </UserInputStyles>
    );
};

export default UserInputModal;