import styled from 'styled-components';

const HeaderStyles = styled.h1`
    z-index: 2;
    background-color: transparent;
    font-family: Oswald;
    font-size: 6rem;
    -webkit-text-stroke: 1px rgb(181, 181, 181);
    color: black;
    div {
        position: absolute;
        transform: translate(3rem, -1.6rem);
        font-size: 2rem;
        font-family: QuickSand;
        font-weight: bold;
        -webkit-text-stroke: 0.2px black;
        color: white;
        filter: drop-shadow(0 2mm 4mm white);
    }
`;

const Header = () => {
    return (
        <HeaderStyles>
            Zu Verschenken
            <div>Tracking and finding Berlins hidden treasures...</div>
        </HeaderStyles>
    );
};

export default Header;