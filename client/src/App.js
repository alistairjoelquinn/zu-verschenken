import { useCallback, useRef } from 'react';
import { useLoadScript } from '@react-google-maps/api';
import 'normalize.css';
import styled from 'styled-components';
import Map from './Map';

import SearchBar from './SearchBar';
import Typography from './styles/Typography';
import config from './mapConfig';
import UserLocation from './UserLocation';

const MainPageStyles = styled.div`
    background-color: rgb(215, 158, 157);
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    .map-container {
        height: 70vh;
        width: 85vw;
        border: 2px solid black;
        position: relative;
    }
`;

const HeaderStyles = styled.h1`
    z-index: 2;
    background-color: transparent;
    font-family: Oswald;
    font-size: 6rem;
    -webkit-text-stroke: 1px rgb(181, 181, 181);
    color: black;
`;

const SpinnerStyles = styled.div`
    background-color: white;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const App = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: apiKey,
        libraries: config.libraries
    });

    const mapRef = useRef();
    const assignMapToRef = useCallback(map => mapRef.current = map, []);

    const relocateMap = useCallback(({ lat, lng }) => {
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(16);
    }, []);

    if (!isLoaded) {
        return (
            <SpinnerStyles>
                <img src="/spinner.gif" />
            </SpinnerStyles>
        );
    }

    return (
        <div>
            <Typography />
            <MainPageStyles>
                <HeaderStyles>
                    Zu Verschenken
                    <div>Tracking and finding Berlins hidden treasures...</div>
                </HeaderStyles>
                <div className="map-container">
                    <SearchBar relocateMap={relocateMap} />
                    <UserLocation relocateMap={relocateMap} />
                    <Map onMapLoad={assignMapToRef} />
                </div>
            </MainPageStyles>
        </div>
    );
};

export default App;