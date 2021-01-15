import { formatRelative } from 'date-fns';
import styled from 'styled-components';

const ItemInfoStyles = styled.div`
    img {
        display: block;
        max-width: 10vh;
    }
`;

const ItemInfo = ({ selectedGift, getDirections }) => {
    return (
        <ItemInfoStyles>
            <h3>Zu Verschenken!</h3>
            <p>Seen {formatRelative(new Date(selectedGift.time), new Date())}</p>
            <p>Contains: {selectedGift.contents}</p>
            <img src={selectedGift.url} alt={selectedGift.contents} />
            <button onClick={() => getDirections(selectedGift.lat, selectedGift.lng)}>
                Directions
            </button>
        </ItemInfoStyles>
    );
};

export default ItemInfo;