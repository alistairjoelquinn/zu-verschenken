import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from '@reach/combobox';
import '@reach/combobox/styles.css';
import styled from 'styled-components';
import { v4 } from 'uuid';

const SearchContainerStyles = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SearchBarStyles = styled.div` 
    width: 60vw;
    position: absolute;
    top: 1rem;
    color: dimgrey;
    z-index: 2;
    input {
        padding: 1rem;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        font-size: 1.5rem;
        width: 100%;
    }
`;

const SearchBar = ({ relocateMap }) => {
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
        <SearchContainerStyles>
            <SearchBarStyles>
                <Combobox onSelect={async (address) => {
                    setValue(address, false);
                    clearSuggestions();
                    try {
                        const response = await getGeocode({ address });
                        const { lat, lng } = await getLatLng(response[0]);
                        relocateMap({ lat, lng });
                    } catch (err) {
                        console.log('err: ', err);
                    }
                }}>
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
        </SearchContainerStyles>
    );
};

export default SearchBar;