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
import imgStockt00 from '../../../assets/stockt/stockt-00.png'
import imgStockt00_2x from '../../../assets/stockt/stockt-00@2x.png'
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
          description={`In a world saturated with the benefits of digital communication, restaurants rely on text messages and phone calls for managing their orders and vendor communication. The goal was to solve issues with their current communication and deliver a solution in the form of a mobile first web application.`}
        >
  
        </WorkSection>

        <WorkSection
          title="Discovery"
          description={`Beginning with research, I interviewed several chefs in different industries. I compiled these research findings into multiple takeaways. Some major insights included: Chefs value clear and concise communication with vendors that’s easily tracked, they need to manage order minimums, quickly restock on items they’ve run out of, and reorder items that consistently appear on their fixed menu.
`}
        >
          <WorkRow>
            { 
            <Col sm={10} offset={{ sm: 1 }}>
              <Figure
                imgSrc={imgStockt00}
                imgSrc2x={imgStockt00_2x}
                caption="Lorem ipsum dolor sit amet"
              />
            </Col> 
            }
          </WorkRow>
        </WorkSection>
        <WorkSection
          title="Ideation"
          description={`I began on the white board by describing the user stories for both chefs and vendors. I then worked to translate these stories into initial ordering flows. From there, I mapped a preliminary information architecture and potential UI components.`}
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
          title="Interface Design"
          description={`After validating our initial direction with these chefs and internal stakeholders, I began necessary components with an atomic design approach. Assembling these atoms into larger components, I designed initial screens for the different sates of the application.`}
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
          title="Prototyping"
          description={`It was imperative to test at this stage before engineering the front end. So I created an invision prototype which we disseminated to our user group for feedback. It quickly became apparent that there needed to be more information surfaced for billing purposes. The solution was to include a pdf export of purchase orders for restaurant owners to maintain their paper-trail of orders.`}
        > </WorkSection>

        <WorkSection
          title="Deployment"
          description={`Working with our full-stack engineer, I applied styles to the front end react components. There were many opportunities to incorporate stronger interactions, which pushed my knowledge of front-end interaction design. After a successful product launch with a limited user set, we raised a quarter-million in seed. I left shortly after as much of the work that remained was logistics and sales for the projected year of growth.`}
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
