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
import imgStockt01 from '../../../assets/stockt/stockt-01.png'
import imgStockt01_2x from '../../../assets/stockt/stockt-01@2x.png'
import imgStockt02 from '../../../assets/stockt/stockt-02.png'
import imgStockt02_2x from '../../../assets/stockt/stockt-02@2x.png'
import imgStockt03 from '../../../assets/stockt/stockt-03.png'
import imgStockt03_2x from '../../../assets/stockt/stockt-03@2x.png'
import imgStockt04 from '../../../assets/stockt/stockt-04.png'
import imgStockt04_2x from '../../../assets/stockt/stockt-04@2x.png'
import imgStockt05 from '../../../assets/stockt/stockt-05.png'
import imgStockt05_2x from '../../../assets/stockt/stockt-05@2x.png'
import imgStockt06 from '../../../assets/stockt/stockt-06.png'
import imgStockt06_2x from '../../../assets/stockt/stockt-06@2x.png'
import imgStockt07 from '../../../assets/stockt/stockt-07.png'
import imgStockt07_2x from '../../../assets/stockt/stockt-07@2x.png'
import imgStockt08 from '../../../assets/stockt/stockt-08.png'
import imgStockt08_2x from '../../../assets/stockt/stockt-08@2x.png'
import imgStockt09 from '../../../assets/stockt/stockt-09.png'
import imgStockt09_2x from '../../../assets/stockt/stockt-09@2x.png'
import imgStockt11 from '../../../assets/stockt/stockt-11.png'
import imgStockt11_2x from '../../../assets/stockt/stockt-11@2x.png'

class WorkItemFandor extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <WorkHeader
          title="Stockt"
          when="Feb 2017 - May 2017"
          role="Product Designer"
          tools="Sketch, Invision, HTML, CSS"
        />

        <WorkSection
          title="The Problem"
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
        >
          <WorkRow>
            {/* 
            <Col sm={8} offset={{ sm: 1 }}>
              <Figure
                imgSrc="https://placehold.it/860x565"
                imgSrc2x="https://placehold.it/1720x1130"
                caption="Lorem ipsum dolor sit amet"
              />
            </Col> 
            */}
          </WorkRow>
        </WorkSection>

        <WorkSection
          title="Discovery"
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
        >
          <WorkRow>
            {
              <Col sm={10} offset={{ sm: 1 }}>
                <Figure
                  imgSrc="https://placehold.it/860x565"
                  imgSrc2x="https://placehold.it/1720x1130"
                  caption="Lorem ipsum dolor sit amet"
                />
              </Col>
            }
          </WorkRow>
        </WorkSection>
        <WorkSection
          title="Ideation"
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
        >
          <WorkRow>
            <Col offset={{ sm: 1 }} sm={10}>
              <Row>
                <Col sm={6}>
                  <Figure
                    imgSrc={imgStockt04}
                    imgSrc2x={imgStockt04_2x}
                    caption="Lorem ipsum dolor sit amet"
                  />
                </Col>
                <Col sm={6}>
                  <Figure
                    imgSrc={imgStockt05}
                    imgSrc2x={imgStockt05_2x}
                    caption="Lorem ipsum dolor sit amet"
                  />
                </Col>
              </Row>
            </Col>
          </WorkRow>
          <WorkRow>
            <Col offset={{ sm: 1 }} sm={10}>
              <Row>
                <Col sm={6}>
                  <Figure
                    imgSrc={imgStockt06}
                    imgSrc2x={imgStockt06_2x}
                    caption="Lorem ipsum dolor sit amet"
                  />
                </Col>
                <Col sm={6}>
                  <Figure
                    imgSrc={imgStockt07}
                    imgSrc2x={imgStockt07_2x}
                    caption="Lorem ipsum dolor sit amet"
                  />
                </Col>
              </Row>
            </Col>
          </WorkRow>
          <WorkRow>
            <Col sm={9} offset={{ sm: 1 }}>
              <Figure
                imgSrc={imgStockt08}
                imgSrc2x={imgStockt08_2x}
                caption="Lorem ipsum dolor sit amet"
              />
            </Col>
          </WorkRow>
        </WorkSection>
        <WorkSection
          title="Ideation"
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
        >
          <WorkRow>
            <Col sm={9} offset={{ sm: 1 }}>
              <Figure
                imgSrc={imgStockt09}
                imgSrc2x={imgStockt09_2x}
                caption="Lorem ipsum dolor sit amet"
              />
            </Col>
          </WorkRow>
        </WorkSection>
        <WorkSection
          title="Ideation"
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
        >
          <WorkRow>
            <Col sm={9} offset={{ sm: 1 }}>
              <Figure
                imgSrc={imgStockt11}
                imgSrc2x={imgStockt11_2x}
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
              <Link to="/work/cortana">Cortana</Link>
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

export default WorkItemFandor
