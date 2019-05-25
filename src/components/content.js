import React from "react"

import feature from "../images/feature.png"
import SectionHeader from "./section-header"
import { COLORS } from "../styles/constants"

const Content = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="What is CodeEveryday?"
      description="CodeEveryday is an online platform dedicated to helping developers from non-traditional and underrepresented backgrounds prepare to enter the tech workforce by providing them access to interview prep, mentorship and resources to further their learning. Founded by Tae;lur Alexis."
    />
    <content
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
      }}
    >
      <div>
      <SectionHeader
      title="Features"
      description="How can we add value to your coding journey?"
      />
      <h4> Mentorship</h4>
      <p>We select only the best mentors who are compassionate, supportive, and only want to see you win in the game. Gain access to a great professional network, an accountability system and top-notch support from an experienced professioanl from your desired career path (iOS, Android, web, game development, etc).</p>
      <h4> Interview Prep </h4>  
      <p>The core of what we provide, we will handcraft a curriculum of resources, mock interview sessions and projects to help prepare you to apply for your dream roles.</p>
      
      </div>
      <div>
        <img src={feature} alt="a blank card floating over colorful graphics" />
      </div>
    </content>
  </div>
)

export default Content
