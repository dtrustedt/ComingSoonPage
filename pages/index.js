import React, { useEffect } from 'react'
import Head from 'next/head'
import Background from '../components/Background/Background'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('https://flapmax.com')
    }, 5000)

    return () => clearTimeout(timer) // Clean up the timer on unmount
  }, [router])

  return (
    <>
      <Head>
        <title>Coming Soon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background />
    </>
  )
}

