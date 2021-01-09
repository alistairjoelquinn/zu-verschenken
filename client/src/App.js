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

export default function App() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: apiKey,
        libraries: config.libraries
    });

    const mapRef = useRef();
    const onMapLoad = useCallback(map => mapRef.current = map, []);

    const relocateMap = useCallback(({ lat, lng }) => {
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(16);
    }, []);

    if (loadError) return 'Error loading!';
    if (!isLoaded) return 'Loading Maps...';

    return (
        <div>
            <Typography />
            <HeaderStyles>Zu Verschenken</HeaderStyles>
            <SearchBar relocateMap={relocateMap} />
            <BrowserPosition relocateMap={relocateMap} />
            <Map onMapLoad={onMapLoad} />
        </div>
    );
}

