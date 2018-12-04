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
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
        />

        <WorkSection
          title="Discovery"
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
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
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
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
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
        >
          <WorkRow>
            <Col sm={10} offset={{ sm: 1 }}>
              <Figure imgSrc={imgCortana04} imgSrc2x={imgCortana04_2x} />
            </Col>
          </WorkRow>
          <WorkRow>
            <Col sm={10} offset={{ sm: 1 }}>
              <Figure
                videoSrc="../../../assets/cortana/cortana-vid-01.mp4"
                caption="Lorem ipsum dolor sit amet"
              />
            </Col>
          </WorkRow>
        </WorkSection>
        <WorkSection
          title="In-store Setup"
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
        >
          <WorkRow>
            <Col sm={10} offset={{ sm: 1 }}>
              <Figure
                imgSrc="https://placehold.it/860x565"
                imgSrc2x="https://placehold.it/1720x1130"
                caption="Lorem ipsum dolor sit amet"
              />
            </Col>
          </WorkRow>
          <WorkRow>
            <Col sm={10} offset={{ sm: 1 }}>
              <Figure
                imgSrc="https://placehold.it/860x565"
                imgSrc2x="https://placehold.it/1720x1130"
                caption="Lorem ipsum dolor sit amet"
              />
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
