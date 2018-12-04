import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { Container, Row, Col } from 'react-grid-system'
import { css } from 'emotion'
import { typography } from '../../system'

import Layout from '../../components/Layout'
import Figure from '../../components/Figure'

import PageHeader from '../../components/PageHeader'
import PageFooter from '../../components/PageFooter'
import KarmaImage from '../../assets/karma-index.png'
import StocktImage from '../../assets/stockt-index.png'
import CortanaImage from '../../assets/cortana-index.png'
import FandorImage from '../../assets/fandor-index.png'
import KarmaImage_2x from '../../assets/karma-index@2x.png'
import StocktImage_2x from '../../assets/stockt-index@2x.png'
import CortanaImage_2x from '../../assets/cortana-index@2x.png'
import FandorImage_2x from '../../assets/fandor-index@2x.png'

const title = css`
  a {
    color: #000;
    text-decoration: none;
    border-bottom: 2px solid #fff;

    &:hover {
      border-color: #000;
    }
  }
`
const copy = css``

const itemContainer = css`
  margin-bottom: 6rem;
`
const date = css`
  color: #4a4a4a;
  font-size: ${typography.rhythm(0.6)};
  font-size: ${typography.scale(0.6)};
`

class BlogIndex extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <PageHeader>
          <h1>What I make</h1>
        </PageHeader>

        <div className={itemContainer}>
          <Row>
            <Col sm={12}>
              <Link to="work/karma">
                <Figure imgSrc={KarmaImage} imgSrc2x={KarmaImage_2x} />
              </Link>
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              <h1 className={title}>
                <Link to="work/karma">Karma</Link>
              </h1>
              <div className={date}>Fall 2015</div>
            </Col>
            <Col sm={7} offset={{ sm: 1 }}>
              <p className={copy}>
                In the Fall of 2015, a Lewis & Clark student was the victim of a
                hate crime. In part of a campus wide reaction, I instigated and
                coordinated a buddy system, to help students feel safe traveling
                to, from and across campus. To make the buddy system more
                ubiquitous and lasting, I worked with our entrepreneurship
                department to design this app.
              </p>
            </Col>
          </Row>
        </div>

        <div className={itemContainer}>
          <Row>
            <Col sm={12}>
              <Link to="work/stockt">
                <Figure imgSrc={StocktImage} imgSrc2x={StocktImage_2x} />
              </Link>
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              <h1 className={title}>
                <Link to="work/stockt">Stockt</Link>
              </h1>
              <div className={date}>Fall 2017</div>
            </Col>
            <Col sm={7} offset={{ sm: 1 }}>
              <p className={copy}>
                Stockt, formerly known as Pindi, is a mobile-first marketplace
                for restaurants, allowing restaurant owners to source from
                multiple vendors in one unified storefront. As the projects
                product designer, I performed user research and designed the
                information architecture, and user experience, and developed the
                UI on the front-end.
              </p>
            </Col>
          </Row>
        </div>

        <div className={itemContainer}>
          <Row>
            <Col sm={12}>
              <Link to="work/cortana">
                <Figure imgSrc={CortanaImage} imgSrc2x={CortanaImage_2x} />
              </Link>
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              <h1 className={title}>
                <Link to="work/cortana">Cortana</Link>
              </h1>
              <div className={date}>March 2018</div>
            </Col>
            <Col sm={7} offset={{ sm: 1 }}>
              <p className={copy}>
                An in-store visual and voice experience where Microsoft’s
                Cortana showcases its many uses. Using research from the client,
                we mapped multiple user journeys into a unified information
                architecture. Then from that IA designed interactions on the
                display to coincide with a voice UI developed in tandem with
                content strategy.
              </p>
            </Col>
          </Row>
        </div>

        <div className={itemContainer}>
          <Row>
            <Col sm={12}>
              <Link to="work/fandor">
                <Figure imgSrc={FandorImage} imgSrc2x={FandorImage_2x} />
              </Link>
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              <h1 className={title}>
                <Link to="work/fandor">Fandor</Link>
              </h1>
              <div className={date}>Sep 2018</div>
            </Col>
            <Col sm={7} offset={{ sm: 1 }}>
              <p className={copy}>
                As part of a cross platform redesign of Fandor’s applications, I
                worked as a supporting UX designer for their web experience and
                as the lead designer on their TV application. Using personas and
                competitive analysis, I designed both low and high fidelity
                wireframes which were handed off to visual design before being
                delivered to the client.
              </p>
            </Col>
          </Row>
        </div>

        <PageFooter>
          <h1>
            <Link to="about">Who I am</Link>
          </h1>
        </PageFooter>
      </Layout>
    )
  }
}

export default BlogIndex
