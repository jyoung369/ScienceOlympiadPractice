import React from 'react'
import { Lora } from 'next/font/google'
import Image from 'next/image'

const play = Lora({ 
  subsets: ['latin'],
  display: "swap"
 })

export default function ContactUs() {
  return (
    <div className="bg-slate-200 dark:bg-black md:min-h-[88vh] lg:min-h-[74vh] ">
        <div id="all content" className="w-screen flex flex-col items-center">
          <div id="header" className="bg-[url('/images/contact.jpg')] w-screen flex justify-center items-center h-48">
            <h1 className={`text-white font-bold border-8 p-4 m-16 text-5xl md:text-7xl text-center ${play.className}`}>Contact Us </h1>
          </div>
        <p className="text-black dark:text-white border-4 text-center text-lg m-8 mx-72 p-4">
          If you have any questions or comments regarding competing, sponsoring, or anything else related to Science Olympiad at Georgia Tech, we would love to hear from you! Please do not hesitate to reach out to us at <a href="malito:scioly.gatech@gmail.com" className="underline font-semibold">scioly.gatech@gmail.com</a>.
        </p>
        <figure>
          <Image src="/images/biggerLogo.jpeg" alt="Picture of the Science Olympiad at Georgia Tech Logo" width="288" height="300"/>
          <figcaption className="sr-only">
            Picture of the Science Olympiad at Georgia Tech Logo
          </figcaption>
        </figure>
        </div>
    </div>
  )
}
