import { useEffect } from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2Frc2hhbTkyIiwiYSI6ImNsYWU2dHpsYjBwcWMzbnJ0eWR6a2E3bjMifQ.LoFKP03X6c_FtaQDjfnPNA';

const Map = (props) => {
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
            center: [77.12, 28.38],
            zoom: 4,
        });

        if (props.pickupCoordinates) {
            addToMap(map, props.pickupCoordinates)
        }
        if (props.dropoffCoordinates) {
            addToMap(map, props.dropoffCoordinates)
        }
        if(props.pickupCoordinates && props.dropoffCoordinates){
            map.fitBounds([
                props.dropoffCoordinates, props.pickupCoordinates
            ], {
                padding: 60
            })
        }
    }, [props.pickupCoordinates]);

    const addToMap = (map, coordinates) => {
        const marker1 = new mapboxgl.Marker()
            .setLngLat(coordinates)
            .addTo(map);
    }

    return (
        <Wrapper id='map'>Map</Wrapper>
    )
}

export default Map

const Wrapper = tw.div`
flex-1
h-1/2
`