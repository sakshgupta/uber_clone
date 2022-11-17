import React, { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import { CarList } from '../../data/carList'

const RideSelector = ({ pickupCoordinates, dropoffCoordinates }) => {
    const [rideDuration, setRideDuration] = useState(0)

    const accessToken = 'pk.eyJ1Ijoic2Frc2hhbTkyIiwiYSI6ImNsYWU2dHpsYjBwcWMzbnJ0eWR6a2E3bjMifQ.LoFKP03X6c_FtaQDjfnPNA';

    useEffect(() => {
        fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]}, ${pickupCoordinates[1]}; ${dropoffCoordinates[0]}, ${dropoffCoordinates[1]}?access_token=${accessToken}`)
            .then(res => res.json())
            .then(data => {
                if (data.code == "Ok")
                    setRideDuration(data.routes[0].duration / 100) //This calculates and saves the duration of the ride in the rideDuration state var
            })
    }, [pickupCoordinates, dropoffCoordinates]);
    return (
        <Wrapper>
            <Title>Choose a ride, or swipe up for more</Title>
            <CarListContainer>
                {
                    CarList.map((car, index) => (
                        <Car key={index}>
                            <CarImage src={car.imgUrl} />
                            <CarDetails>
                                <Service>{car.service}</Service>
                                <Time>5 min away</Time>
                            </CarDetails>
                            <Price>₹{(rideDuration * car.multiplier).toFixed(2)}</Price>
                        </Car>
                    ))
                }

            </CarListContainer>
        </Wrapper>
    )
}

export default RideSelector

const Wrapper = tw.div`
flex-1
overflow-clip
flex
flex-col
`
// Title
const Title = tw.div`
text-gray-500
text-center
text-xs
py-2
border-b
`
// Car List
const CarListContainer = tw.div`
overflow-y-scroll
`
// Car
const Car = tw.div`
flex
p-4
items-center
`
const CarImage = tw.img`
h-14
mr-4
`
const CarDetails = tw.div`
flex-1
`
const Service = tw.div`
font-medium
`
const Time = tw.div`
text-xs
text-blue-500
`
// Price
const Price = tw.div`
text-sm
`