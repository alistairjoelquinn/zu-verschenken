import styled from 'styled-components';

const ResetStyles = styled.div`
    position: absolute;
    top: 1rem;
    left: 1rem;
    height: 3rem;
    width: 5rem;
    background-color: black;
    color: white;
    border-radius: 1rem;
    line-height: 3rem;
    font-family: Oswald;
    text-align: center;
    font-size: 1.6rem;
    cursor: pointer;
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
`;

const MapReset = () => {
    return (
        <ResetStyles>
            Done?
        </ResetStyles>
    );
};

export default MapReset;