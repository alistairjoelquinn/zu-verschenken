import styled from 'styled-components';

const UserLocationStyles = styled.div`
    position: absolute;
    bottom: 1.5rem;
    left: 1rem;
    background: none;
    z-index: 2;
    img {
        height: 2rem;
        background-color: transparent;
        cursor: pointer;
    }
`;

const UserLocation = ({ relocateMap }) => {
    return (
        <UserLocationStyles onClick={() => {
            navigator.geolocation.getCurrentPosition((position) => {
                relocateMap({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });
            });
        }}>
            <img src="/compass.png" alt="compass icon for locating browser position" />
        </UserLocationStyles>
    );
};

export default UserLocation;