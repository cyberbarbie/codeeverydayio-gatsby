import React from "react"

import Button from "../components/button"
import SectionHeader from "./section-header"

const CallToAction = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="Join the Movement"
      description="Stay up to date on upcoming releases"
    />
    <Button>Get Early Access</Button>
  </div>
)

export default CallToAction
