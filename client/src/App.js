import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { formatRelative } from 'date-fns';
import 'normalize.css';
import '@reach/combobox/styles.css';

import mapStyles from './mapStyles';

const libraries = ['places'];
const mapContainerStyle = {
    width: '100vw',
    height: '100vh'
};
const center = {
    lat: 52.520008,
    lng: 13.404954
};
const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true
};

export default function App() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: apiKey,
        libraries
    });

    if (loadError) {
        return 'Error loading!';
    }
    if (!isLoaded) {
        return 'Loading Maps...';
    }
    return (
        <div>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={12}
                center={center}
                options={options}
            >

            </GoogleMap>
        </div>
    );
}