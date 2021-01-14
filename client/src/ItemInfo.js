import { formatRelative } from 'date-fns';

const ItemInfo = ({ selectedGift, getDirections }) => {
    return (
        <div>
            <h3>Zu Verschenken!</h3>
            <p>Seen {formatRelative(new Date(selectedGift.time), new Date())}</p>
            <button onClick={() => getDirections(selectedGift.lat, selectedGift.lng)}>
                Directions
            </button>
        </div>
    );
};

export default ItemInfo;