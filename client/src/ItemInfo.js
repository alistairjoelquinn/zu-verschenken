import { formatRelative } from 'date-fns';
import styled from 'styled-components';

const ItemInfoStyles = styled.div`
    width: 20vw;
    img {
        display: block;
        width: 100%;
        height: 60%;
        object-fit: cover;
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