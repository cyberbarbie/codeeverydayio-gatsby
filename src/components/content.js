import React from "react"

import feature from "../images/feature.png"
import SectionHeader from "./section-header"
import { COLORS } from "../styles/constants"

const Content = () => (
  <div style={{marginTop:"250px", padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="Who We Are"
      description="CodeEveryday's 2020 Vision is based on the statistic that there will be 1.4 million computer-science related jobs available with only 400,000 computer science graduates to fill those roles. With the rise of online learning platforms and coding bootcamps to help individuals find alternative ways to learn how to code, CodeEveryday is the best asset to help you establish your career.
      "
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
        <h3>What We Offer</h3>
        <p style={{ color: COLORS.gray }}> Explore the latest features</p>
        <h4>Mentorship</h4>
        <p style={{ color: COLORS.gray }}>
        We select only the best mentors who are compassionate, supportive, and only want to see you win in the game. Gain access to a great professional network, an accountabilty system, and top notch support from an experienced professional from your desired career path (front-end development, iOS, Android, etc)
        </p>
        <h4>Interview Prep</h4>
        <p style={{ color: COLORS.gray }}>
        One of the most difficult parts of one's coding journey is the interview process. Gain access to mock interview sessions.
        </p>
        <h4>Online Workshops</h4>
        <p style={{ color: COLORS.gray }}>
        Live, interactive workshops in efforts of building a stellar portfolio, learn effective networking skills and build a professional brand to increase chances of landing amazing career opportunities.
        </p>

      </div>
      <div>
        <img src={feature} alt="a blank card floating over colorful graphics" />
      </div>
    </content>
  </div>
)

export default Content
