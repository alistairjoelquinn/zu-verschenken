import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from '@reach/combobox';

export default functon SearchBar() {
    const { ready, value, suggestions: { status, data }, setValue, clearSuggestions } = usePlacesAutocomplete({
        requestOptions: {
            lat: () => 52.520008,
            lng: () => 13.404954,
            radius: 20 * 1000
        }
    });

    return (
        <Combobox onSelect={(address) => { console.log('address: ', address); }}>
            <ComboboxInput value={value} />
        </Combobox>
    )
}