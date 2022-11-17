import { URLSearchParams } from 'next/dist/compiled/@edge-runtime/primitives/url'
import { useEffect, useState } from 'react'
import tw from "tailwind-styled-components"
import Map from './components/Map'
import RideSelector from './components/RideSelector'
import { useRouter } from 'next/router'

const Confirm = () => {
    const router = useRouter();

    const { pickup, dropoff } = router.query // To get the pickup and dropoff names from the url

    const [pickupCoordinates, setPickupCoordinates] = useState([0, 0]);
    const [dropoffCoordinates, setDropoffCoordinates] = useState([0, 0]);

    const getPickupCoordinates = (pickup) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
            new URLSearchParams({
                access_token: 'pk.eyJ1Ijoic2Frc2hhbTkyIiwiYSI6ImNsYWU2dHpsYjBwcWMzbnJ0eWR6a2E3bjMifQ.LoFKP03X6c_FtaQDjfnPNA',
                limit: 1
            })
        )
            .then(res => res.json())
            .then(data => {
                setPickupCoordinates(data.features[0].center);
            })
    }

    const getDropoffCoordinates = (dropoff) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
            new URLSearchParams({
                access_token: 'pk.eyJ1Ijoic2Frc2hhbTkyIiwiYSI6ImNsYWU2dHpsYjBwcWMzbnJ0eWR6a2E3bjMifQ.LoFKP03X6c_FtaQDjfnPNA',
                limit: 1
            })
        )
            .then(res => res.json())
            .then(data => {
                setDropoffCoordinates(data.features[0].center);
            })
    }

    useEffect(() => {
        getPickupCoordinates(pickup);
        getDropoffCoordinates(dropoff);
    }, [pickup, dropoff]);

    return (
        <Wrapper>
            {/* Back Button */}
            <ButtonContainer onClick={() => router.back()}>
                <BackButton src='https://img.icons8.com/ios-filled/50/000000/left.png' />
            </ButtonContainer>
            <Map
                pickupCoordinates={pickupCoordinates}
                dropoffCoordinates={dropoffCoordinates}
            />

            {/* Ride Container */}
            <RideContainer>
                {/* Ride Selector */}
                <RideSelector
                    pickupCoordinates={pickupCoordinates}
                    dropoffCoordinates={dropoffCoordinates}
                />
                {/* Confirm Button */}
                <ConfirmButtonContainer>
                    <ConfirmButton>
                        Confirm UberX
                    </ConfirmButton>
                </ConfirmButtonContainer>
            </RideContainer>
        </Wrapper>
    )
}

export default Confirm

const Wrapper = tw.div`
flex
h-screen
flex-col
`
// Back Button
const ButtonContainer = tw.div`
rounded-full
absolute
top-4
left-4
z-10
bg-white
shadow-md
cursor-pointer
`
const BackButton = tw.img`
h-full
object-contain
`

// Ride Container
const RideContainer = tw.div`
flex
flex-col
flex-1
h-1/2
`
// Confirm Button
const ConfirmButtonContainer = tw.div`
border-t-2
`
const ConfirmButton = tw.div`
bg-black
text-white
my-4
mx-4
py-4
text-center
text-xl
cursor-pointer
`