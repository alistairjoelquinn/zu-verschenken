import styled from 'styled-components';

const ResetStyles = styled.div`
    position: absolute;
    top: 1rem;
    left: 1rem;
    height: 3rem;
    width: 5rem;
    background-color: black;
    color: white;
    border-radius: 1rem;
    line-height: 3rem;
    font-family: Oswald;
    text-align: center;
    font-size: 1.6rem;
    cursor: pointer;
    &:hover {
        box-shadow: 0 2px 4px 0 white;
    }
`;

const MapReset = (props) => {
    const resetHandler = () => {
        props.setDirectionsRequested(false);
        props.setUserCurrentLocation('');
        props.setUserCurrentDestination('');
        props.setDirectionsResponse(null);
        props.relocateMap({
            lat: 52.520008,
            lng: 13.404954
        }, 13);
        props.setClearSearchBar(true);
    };

    return (
        <ResetStyles onClick={resetHandler}>
            Done?
        </ResetStyles>
    );
};

export default MapReset;