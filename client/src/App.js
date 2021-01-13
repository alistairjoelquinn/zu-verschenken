import { useCallback, useRef } from 'react';
import { useLoadScript } from '@react-google-maps/api';
import 'normalize.css';
import styled from 'styled-components';
import Map from './Map';

import SearchBar from './SearchBar';
import Typography from './styles/Typography';
import config from './mapConfig';
import UserLocation from './UserLocation';
import Header from './Header';

const MainPageStyles = styled.div`
    background-color: rgb(215, 158, 157);
    height: 100vh;
    width: 100vw;
    display: flex;
    padding-bottom: 10vh;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    .map-container {
        height: 70vh;
        width: 85vw;
        border: 2px solid black;
        position: relative;
        margin-bottom: 5vh;
    }
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
                <Header />
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