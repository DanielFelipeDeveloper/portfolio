'use client'
import { About } from "./components/About";
import { Banner } from "./components/Banner";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Work } from "./components/Work";

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Experience />
      <Work />
      <Contact />
    </>
  )
}
