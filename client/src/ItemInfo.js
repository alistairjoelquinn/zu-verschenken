import { formatRelative } from 'date-fns';
import styled from 'styled-components';

const ItemInfoStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 0.5rem;
    font-family: RobotoMedium;
    p {
        font-family: Roboto;
        margin: 0;
    }
    .image-cont {
        width: 170px;
        height: 170px;
        overflow: hidden;
        border: 0.5px solid black;
        border-radius: 70%;
        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
`;

const ItemInfo = ({ selectedGift, getDirections }) => {
    return (
        <ItemInfoStyles>
            <h3>Zu Verschenken!</h3>
            <p>Seen {formatRelative(new Date(selectedGift.date), new Date())}</p>
            <p>Contains: {selectedGift.contents}</p>
            <div className="image-cont">
                <img src={selectedGift.url} alt={selectedGift.contents} />
            </div>
            <button onClick={() => getDirections(parseFloat(selectedGift.lat), parseFloat(selectedGift.lng))}>
                Directions
            </button>
        </ItemInfoStyles>
    );
};

export default ItemInfo;