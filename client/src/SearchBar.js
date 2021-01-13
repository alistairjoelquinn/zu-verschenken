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
    width: 60%;
    position: absolute;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    color: dimgrey;
    z-index: 2;
    input {
        padding: 0.5rem;
        padding-left: 1rem;
        padding-right: 1rem;
        font-size: 1rem;
        width: 100%;
        &:focus {
            outline: none;
        }
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
                        <ComboboxList>
                            {status === 'OK' &&
                                data.map(({ place_id, description }) => (
                                    <ComboboxOption key={v4()} value={description} />
                                ))
                            }
                        </ComboboxList>
                    </ComboboxPopover>
                </Combobox>
            </SearchBarStyles>
        </SearchContainerStyles>
    );
};

export default SearchBar;