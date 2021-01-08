import { useCallback, useRef, useState } from 'react';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import { v4 } from 'uuid';
import { formatRelative } from 'date-fns';

import config from './mapConfig';

export default function Map() {
    const [giftMarkers, setGiftMarkers] = useState([]);
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

    const mapRef = useRef();
    const onMapLoad = useCallback(map => mapRef.current = map, []);

    return (
        <GoogleMap
            {...config.mainConfig}
            onClick={onMapClick}
            onLoad={onMapLoad}
        >
            {giftMarkers.map(item => (
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
                    onClick={() => setSelectedGift(item)}
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
                        <p>Spotted {formatRelative(selectedGift.time, new Date())}</p>
                    </div>
                </InfoWindow>
            ) : null}
        </GoogleMap>
    );
}