import { useCallback, useRef } from 'react';
import { useLoadScript } from '@react-google-maps/api';
import 'normalize.css';
import styled from 'styled-components';
import Map from './Map';

import SearchBar from './SearchBar';
import Typography from './styles/Typography';
import config from './mapConfig';
import BrowserPosition from './BrowserPosition';

const HeaderStyles = styled.h1`
    position: absolute;
    bottom: 1rem;
    left: 1rem; 
    z-index: 2;
    background-color: transparent;
    font-family: RobotoBold;
    -webkit-text-stroke: 2px black;
    color: white;
`;

const SpinnerStyles = styled.div`
    background-color: white;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default function App() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: apiKey,
        libraries: config.libraries
    });

    const mapRef = useRef();
    const assignMapToRef = useCallback(map => mapRef.current = map, []);

    const relocateMap = useCallback(({ lat, lng }) => {
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(16);
    }, []);

    if (loadError) return 'Error loading!';
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
            <HeaderStyles>Zu Verschenken</HeaderStyles>
            <SearchBar relocateMap={relocateMap} />
            <BrowserPosition relocateMap={relocateMap} />
            <Map onMapLoad={assignMapToRef} />
        </div>
    );
}

