import { useCallback, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useLoadScript } from '@react-google-maps/api';
import 'normalize.css';
import styled from 'styled-components';
import Map from './Map';

import SearchBar from './SearchBar';
import Typography from './styles/Typography';
import config from './mapConfig';
import UserLocation from './UserLocation';
import Header from './Header';
import UserInputModal from './UserInputModal';
import { updateUserLocations } from '../store/actions';

const MainPageStyles = styled.div`
    background-color: rgb(215, 158, 157);
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    overflow: hidden;
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
    const dispatch = useDispatch();
    const [clearSearchBar, setClearSearchBar] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const [file, setFile] = useState(null);
    const [userCoords, setUserCoords] = useState(null);

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: apiKey,
        libraries: config.libraries
    });

    const submitNewLocationToServer = useCallback(async (userTextInput) => {
        var fd = new FormData;
        fd.append('image', file);
        fd.append('userTextInput', userTextInput);
        fd.append('lat', userCoords.lat);
        fd.append('lng', userCoords.lng);
        fd.append('date', userCoords.time);
        try {
            const { data } = await axios.post('/new-location-click', fd);
            dispatch(updateUserLocations(data));
        } catch (err) {
            console.log('err: ', err);
        }
    }, [file, userCoords]);

    const mapRef = useRef();
    const assignMapToRef = useCallback(map => mapRef.current = map, []);

    const relocateMap = useCallback(({ lat, lng }, zoom = 16) => {
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(zoom);
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
                    <SearchBar
                        relocateMap={relocateMap}
                        clearSearchBar={clearSearchBar}
                        setClearSearchBar={setClearSearchBar}
                    />
                    <UserLocation relocateMap={relocateMap} />
                    <Map
                        onMapLoad={assignMapToRef}
                        relocateMap={relocateMap}
                        setClearSearchBar={setClearSearchBar}
                        setShowModal={setShowModal}
                        setUserCoords={setUserCoords}
                    />
                </div>
                {showModal &&
                    <UserInputModal
                        setShowModal={setShowModal}
                        setFile={setFile}
                        submitNewLocationToServer={submitNewLocationToServer}
                    />
                }
            </MainPageStyles>
        </div>
    );
};

export default App;