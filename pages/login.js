import React, { useEffect } from 'react'
import tw from 'tailwind-styled-components'
import { useRouter } from 'next/router'
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth'
import { auth, provider } from '../firebase'

const login = () => {

    const router = useRouter()

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                router.push('/')
            }
        })
    })
    return (
        <Wrapper>
            {/* Uber Logo */}
            <UberLogo src='https://i.ibb.co/n6LWQM4/Post.png' />
            {/* Title */}
            <Title>Log in to access your account</Title>
            {/* Login Image */}
            <HeadImage src='https://i.ibb.co/CsV9RYZ/login-image.png' />
            {/* Sign In Button */}
            <SignInButton onClick={() => signInWithPopup(auth, provider)}>Sign in with Google</SignInButton>
        </Wrapper>
    )
}

export default login

const Wrapper = tw.div`
flex
flex-col
h-screen
w-screen
bg-gray-200
p-4
`

// Uber Logo
const UberLogo = tw.img`
h-20
w-auto
object-contain
self-start
`

// Signin Button
const SignInButton = tw.button`
bg-black
text-white
text-center
py-4
mt-8
self-center
w-full
`

const Title = tw.div`
text-5xl
pt-4
text-gray-500
`

const HeadImage = tw.img`
w-full object-contain
`