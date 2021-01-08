import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from '@reach/combobox';
import styled from 'styled-components';
import { v4 } from 'uuid';

const SearchBarStyles = styled.div`
    position: absolute;
    top: 1rem;
    left: 1rem;
    color: dimgrey;
    z-index: 2;
    margin: 0;
    padding: 0;
`;

const SearchBar = () => {
    const { ready, value, suggestions: { status, data }, setValue, clearSuggestions } = usePlacesAutocomplete({
        requestOptions: {
            location: {
                lat: () => 52.520008,
                lng: () => 13.404954,
            },
            radius: 20 * 1000
        }
    });

    return (
        <SearchBarStyles>
            <Combobox onSelect={(address) => { console.log('address: ', address); }}>
                <ComboboxInput
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    disabled={!ready}
                    placeholder="Enter a location in Berlin..."
                />
                <ComboboxPopover>
                    {status === 'OK' && data.map(({ place_id, description }) => (
                        <ComboboxOption key={v4()} value={description} />
                    ))}
                </ComboboxPopover>
            </Combobox>
        </SearchBarStyles>
    );
};

export default SearchBar;