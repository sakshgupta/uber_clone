import React, { useState } from 'react'
import tw from "tailwind-styled-components"
import { useRouter } from 'next/router'
import Link from 'next/link'

const Search = () => {
    const [pickup, setPickup] = useState("");
    const [dropoff, setDropoff] = useState("");

    const router = useRouter()
    return (
        <Wrapper>
            {/* Back Button */}
            <ButtonContainer onClick={() => router.back()}>
                <BackButton src='https://img.icons8.com/ios-filled/50/000000/left.png' />
            </ButtonContainer>
            {/* Input Container */}
            <InputContainer>
                {/* From to Icons */}
                <FromToIcons>
                    <Circle src='https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png' />
                    <Line src='https://img.icons8.com/ios/50/9CA3AF/vertical-line.png' />
                    <Square src='https://img.icons8.com/windows/50/000000/square-full.png' />
                </FromToIcons>
                {/* Input Boxes */}
                <InputBoxes>
                    <Input
                        placeholder='Enter pickup location'
                        value={pickup}
                        onInput={e => setPickup(e.target.value)}
                    />
                    <Input
                        placeholder='Where to?'
                        value={dropoff}
                        onInput={e => setDropoff(e.target.value)}
                    />
                </InputBoxes>
                {/* Plus Button */}
                <PlusIcon src='https://img.icons8.com/ios/50/000000/plus-math.png' />
            </InputContainer>
            {/* Saved Places */}
            <SavedPlaces>
                <StarIcon src='https://img.icons8.com/ios-filled/50/ffffff/star--v1.png' />
                SavedPlaces
            </SavedPlaces>
            {/* Confirm Location */}
            <Link href={{
                pathname: '/Confirm',
                query: {
                    pickup: pickup,
                    dropoff: dropoff,
                }
            }}>
                <ConfirmLocation>
                    <ConfirmButton>
                        Confirm Location
                    </ConfirmButton>
                </ConfirmLocation>
            </Link>
        </Wrapper>
    )
}

export default Search

const Wrapper = tw.div`
bg-gray-200
h-screen
`
// Back Button
const ButtonContainer = tw.div`
bg-white
px-4
`
const BackButton = tw.img`
h-12
cursor-pointer
`
// Input Container
const InputContainer = tw.div`
bg-white
flex
items-center
px-4
mb-2
`
// FromToIcons
const FromToIcons = tw.div`
w-10
flex
flex-col
mr-2
items-center
`
const Circle = tw.img`
h-2.5
`
const Line = tw.img`
h-10
`
const Square = tw.img`
h-3
`
// Input Boxes
const InputBoxes = tw.div`
flex
flex-col
flex-1
`
const Input = tw.input`
h-10
bg-gray-200
my-2
rounded-2
p-2
outline-none
border-none
`
// Plus Button
const PlusIcon = tw.img`
w-10
h-10
bg-gray-200
rounded-full
ml-3
`
// SavedPlaces
const SavedPlaces = tw.div`
flex
items-center
bg-white
px-4
py-2
mb-2
`
const StarIcon = tw.img`
bg-gray-400
w-10
h-10
p-2
rounded-full
mr-2
`

// Confirm Location
const ConfirmLocation = tw.div`
flex
`
const ConfirmButton = tw.button`
bg-black
text-white
flex-1
mx-4
py-3
text-2xl
cursor-pointer
`