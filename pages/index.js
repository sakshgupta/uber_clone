import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import tw from "tailwind-styled-components"
import Map from './components/Map'
import Link from 'next/link'
import { auth } from '../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'next/router'

export default function Home() {

  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    return onAuthStateChanged(auth, user => {
      if (user) {
        setUser({
          name: user.displayName,
          photoUrl: user.photoURL,
        })
      }
      else {
        setUser(null)
        router.push('/Login')
      }
    })
  }, [])

  return (
    <Wrapper>
      <Map />
      <ActionItems>
        {/* Header */}
        <Header>
          <UberLogo src='https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg' />

          <Profile>
            <Name>{user && user.name}</Name>
            <UserImage
              src={user && user.photoUrl}
              onClick={() => signOut(auth)}
            />
          </Profile>
        </Header>
        {/* ActionButtons */}
        <ActionButtons>
          <Link href='/Search'>
            <ActionButton>
              <ActionButtonImg src='https://i.ibb.co/cyvcpfF/uberx.png' />
              Ride
            </ActionButton>
          </Link>
          <Link href='/Search'>
            <ActionButton>
              <ActionButtonImg src='https://i.ibb.co/n776JLm/bike.png' />
              Wheels
            </ActionButton>
          </Link>
          <Link href='/Search'>
            <ActionButton>
              <ActionButtonImg src='https://i.ibb.co/5RjchBg/uberschedule.png' />
              Reserved
            </ActionButton>
          </Link>
        </ActionButtons>
        {/* InputButton */}
        <InputButton>
          Where to?
        </InputButton>
      </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
flex
flex-col
h-screen
`

const ActionItems = tw.div`
flex-1
p-4
`

// Header
const Header = tw.div`
flex
justify-between
items-center
`

const UberLogo = tw.img`
h-28
`
const Profile = tw.div`
flex
items-center
`

const Name = tw.div`
mr-4
w-30
text-sm
`
const UserImage = tw.img`
h-16
w-16
rounded-full
border
border-gray-200
p-px
cursor-pointer
`

// ActionButtons
const ActionButtons = tw.div`
flex
justify-evenly	
`

const ActionButton = tw.div`
flex
bg-gray-200
flex-1
m-1
h-32
w-20
sm:w-60
items-center
flex-col
justify-center
rounded-lg
transform
hover:scale-105
transition
text-xl
`
const ActionButtonImg = tw.img`
h-3/5
`
// Input Button
const InputButton = tw.div`
h-20
bg-gray-200
text-2xl
p-4
flex
items-center
mt-7
ml-1
rounded-lg
`