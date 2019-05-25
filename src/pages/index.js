import React from "react"
import Particles from 'react-particles-js';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Content from "../components/content"
import CallToAction from "../components/cta"
import { css } from 'emotion'

const particleOpt = {
  particles: {
    move: {
      speed: 10,
    },
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

const particlesStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const IndexPage = () => (
  <Layout>
    <Particles
      params={particleOpt}
      className={particlesStyles}
      />
    <SEO />
    <Hero />
    <Content />
    <CallToAction />
  </Layout>
)

export default IndexPage
