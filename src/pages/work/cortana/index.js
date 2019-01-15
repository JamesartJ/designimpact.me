import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { Container, Col, Row } from 'react-grid-system'
import { css } from 'emotion'
import ReactPlayer from 'react-player'

import Layout from '../../../components/Layout'
import PageHeader from '../../../components/PageHeader'
import PageFooter from '../../../components/PageFooter'
import WorkSection from '../../../components/WorkSection'
import Figure from '../../../components/Figure'
import WorkRow from '../../../components/WorkRow'
import WorkHeader from '../../../components/WorkHeader'
import { typography } from '../../../system'

// images
import imgCortana00 from '../../../assets/cortana/cortana-00.png'
import imgCortana00_2x from '../../../assets/cortana/cortana-00@2x.png'
import imgCortana01 from '../../../assets/cortana/cortana-01.png'
import imgCortana01_2x from '../../../assets/cortana/cortana-01@2x.png'
import imgCortana02 from '../../../assets/cortana/cortana-02.png'
import imgCortana02_2x from '../../../assets/cortana/cortana-02@2x.png'
import imgCortana03 from '../../../assets/cortana/cortana-03.png'
import imgCortana03_2x from '../../../assets/cortana/cortana-03@2x.png'
import imgCortana04 from '../../../assets/cortana/cortana-04.png'
import imgCortana04_2x from '../../../assets/cortana/cortana-04@2x.png'
import imgCortana05 from '../../../assets/cortana/cortana-05.png'
import imgCortana05_2x from '../../../assets/cortana/cortana-05@2x.png'

class WorkItemCortana extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <WorkHeader
          title="Cortana"
          when="Mar 2018 - Jun 2018"
          role="UX Designer"
          tools="Sketch, Framer"
        />

        <WorkSection
          title="The Problem"
          description={`Working at Swirl on Microsoft Cortana, our challenge was to create an in-store experience showcasing Cortana’s many skills and everyday utility. The proposal took the form of a voice guided experience with an attached tv to demonstrate the outcome of different Cortana skills.`}
        />

        <WorkSection
          title="Discovery"
          description={`Much of the research was handed over to our team from the client. It focused on the aspects of Cortana which provided users felt added the most value, along with different situations and circumstances where its feature set shines. `}
        >
          <WorkRow>
            {
              <Col sm={10} offset={{ sm: 1 }}>
                <Figure imgSrc={imgCortana00} imgSrc2x={imgCortana00_2x} />
              </Col>
            }
          </WorkRow>
          <WorkRow>
            {
              <Col sm={10} offset={{ sm: 1 }}>
                <Figure imgSrc={imgCortana01} imgSrc2x={imgCortana01_2x} />
              </Col>
            }
          </WorkRow>
        </WorkSection>
        <WorkSection
          title="Information Architecture"
          description={`In creating the IA for this experience, we needed to strike a balance of guiding the users while still giving them percieved freedom to explore the features of their own interest. First the user selects whether their intereseted in Cortana's use at home or at work. From there the IA funcctions as a branching decision tree. At the base leaves, users are moved back to the tops of alternative trees to continue exploring new skills along new branches. This allows the user to immediately explore skills that matter most to them while still have the freedom to explore all skills as part of a continuous experience.`}
        >
          <WorkRow>
            <Col sm={10} offset={{ sm: 1 }}>
              <Figure imgSrc={imgCortana02} imgSrc2x={imgCortana02_2x} />
            </Col>
          </WorkRow>
          <WorkRow>
            <Col sm={10} offset={{ sm: 1 }}>
              <Figure imgSrc={imgCortana03} imgSrc2x={imgCortana03_2x} />
            </Col>
          </WorkRow>
        </WorkSection>
        <WorkSection
          title="Interaction Design"
          description={`As we moved into parallel sprints for both design and development, it became increasingly likely that the experience could not be navigated with voice alone, our build wasn’t reliable enough. So we added a Microsoft surface tablet to the stand. I designed an interaction on the surface intended to confirm selection and draw the eye up towards the experience on the tv display.`}
        >
          <WorkRow>
            <Col sm={10} offset={{ sm: 1 }}>
              <Figure
                videoSrc="https://youtu.be/AH8W85VIlt4"
                caption="Display interaction demo"
              />
            </Col>
          </WorkRow>
          <WorkRow>
            <Col sm={10} offset={{ sm: 1 }}>
            <Figure
                videoSrc="https://www.youtube.com/watch?v=wnd1P1sYoYg"
                caption="Microsoft Surface Interaction prototype"
              />
            </Col>
          </WorkRow>
        </WorkSection>
        <WorkSection
          title="In-store Setup"
          description={`Designing the installation process required some quick guerilla research. I interview store employees to discuss their regular installation process, and designed an web app to step them through the process of setting up the installation. After a successful test of the experience at the Microsoft store in Corte Madera, from employee setup through to the customer’s journey, the experience was rolled out to stores across the country.`}
        >
          <WorkRow>
            <Col sm={10} offset={{ sm: 1 }}>
              <Figure imgSrc={imgCortana05} imgSrc2x={imgCortana05_2x}
              caption="Installation at demo store/>
            </Col>
          </WorkRow>
        </WorkSection>

        <PageFooter>
          <ul>
            <li>
              <Link to="/work/karma">Karma</Link>
            </li>
            <li>
              <Link to="/work/stockt">Stockt</Link>
            </li>
            <li>
              <Link to="/work/fandor">Fandor</Link>
            </li>
          </ul>
        </PageFooter>
      </Layout>
    )
  }
}

export default WorkItemCortana
