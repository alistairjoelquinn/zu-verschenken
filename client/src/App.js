import { useLoadScript } from '@react-google-maps/api';
import 'normalize.css';
import styled from 'styled-components';
import Map from './Map';

import SearchBar from './SearchBar';
import Typography from './styles/Typography';

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

const libraries = ['places'];

export default function App() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: apiKey,
        libraries
    });

    if (loadError) return 'Error loading!';
    if (!isLoaded) return 'Loading Maps...';

    return (
        <div>
            <Typography />
            <HeaderStyles>Zu Verschenken</HeaderStyles>
            <SearchBar />
            <Map />
        </div>
    );
};

