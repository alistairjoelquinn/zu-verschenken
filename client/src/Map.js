import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import { v4 } from 'uuid';
import { formatRelative } from 'date-fns';

import config from './mapConfig';
import { getInitialUserLocations } from '../store/actions';

const Map = ({ onMapLoad }) => {
    const dispatch = useDispatch();
    const giftMarkers = useSelector(state => state.userLocations);
    // const [giftMarkers, setGiftMarkers] = useState([]);
    const [selectedGift, setSelectedGift] = useState(null);

    const onMapClick = useCallback(
        e =>
            setGiftMarkers(val => [...val, {
                lat: e.latLng.lat(),
                lng: e.latLng.lng(),
                time: new Date()
            }]),
        []
    );

    useEffect(() => {
        dispatch(getInitialUserLocations());
    }, []);

    return (
        <GoogleMap
            {...config.mainConfig}
            onClick={onMapClick}
            onLoad={onMapLoad}
        >
            {giftMarkers && giftMarkers.map(item => (
                <Marker
                    key={v4()}
                    position={{
                        lat: item.lat,
                        lng: item.lng
                    }}
                    icon={{
                        url: '/gift.png',
                        scaledSize: new window.google.maps.Size(30, 30),
                        origin: new window.google.maps.Point(0, 0),
                        anchor: new window.google.maps.Point(15, 15)
                    }}
                    onClick={() => {
                        console.log('item: ', item);
                        setSelectedGift(item);
                    }}
                />
            ))}
            {selectedGift ? (
                <InfoWindow
                    position={{
                        lat: selectedGift.lat,
                        lng: selectedGift.lng
                    }}
                    onCloseClick={() => setSelectedGift(null)}
                >
                    <div>
                        <h3>Zu Verschenken!</h3>
                        <p>Spotted {formatRelative(new Date(selectedGift.time), new Date())}</p>
                    </div>
                </InfoWindow>
            ) : null}
        </GoogleMap>
    );
};

export default Map;