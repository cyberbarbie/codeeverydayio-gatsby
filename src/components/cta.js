import React from "react"

import Button from "../components/button"
import SectionHeader from "./section-header"

const CallToAction = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="Join the Movement"
    />
    <p>Join our mailing list to stay up to date on our launch and free resources!</p>
    <Button target="_blank" onclick="window.location.href = 'http://eepurl.com/gmB1zr';">Sign Up!</Button>
  </div>
)

export default CallToAction
