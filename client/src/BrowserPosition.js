import styled from 'styled-components';

const BrowserPositionStyles = styled.div`
    position: absolute;
    top: 1.5rem;
    right: 1rem;
    background: none;
    z-index: 2;
    img {
        height: 3rem;
        background-color: transparent;
        cursor: pointer;
    }
`;

export default function BrowserPosition({ relocateMap }) {
    return (
        <BrowserPositionStyles onClick={() => {
            navigator.geolocation.getCurrentPosition((position) => {
                relocateMap({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                })
            }, () => null);
        }}>
            <img src="/compass.png" alt="compass icon for locating browser position" />
        </BrowserPositionStyles>
    );
}