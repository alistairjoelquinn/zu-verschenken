import { formatRelative } from 'date-fns';

const ItemInfo = ({ selectedGift }) => {
    return (
        <div>
            <h3>Zu Verschenken!</h3>
            <p>Seen {formatRelative(new Date(selectedGift.time), new Date())}</p>
        </div>
    );
};

export default ItemInfo;