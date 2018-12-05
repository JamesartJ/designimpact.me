import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { Container, Row, Col } from 'react-grid-system'
import Figure from '../components/Figure'
import Layout from '../components/layout'
import GlobalHeader from '../components/GlobalHeader'
import { rhythm } from '../system/typography'
import { css, cx, Global } from 'emotion'
import { color, typography } from '../system'

// images
import LearnWhoIAm00 from '../assets/index/learnwhoiam00.png'
import LearnWhoIAm00_2x from '../assets/index/learnwhoiam00@2x.png'
import LearnWhoIAm01 from '../assets/index/learnwhoiam01.png'
import LearnWhoIAm01_2x from '../assets/index/learnwhoiam01@2x.png'
import LearnWhoIAm02 from '../assets/index/learnwhoiam02.png'
import LearnWhoIAm02_2x from '../assets/index/learnwhoiam02@2x.png'

import WhatIMake00 from '../assets/index/whatimake00.png'
import WhatIMake00_2x from '../assets/index/whatimake00@2x.png'
import WhatIMake01 from '../assets/index/whatimake01.png'
import WhatIMake01_2x from '../assets/index/whatimake01@2x.png'
import WhatIMake02 from '../assets/index/whatimake02.png'
import WhatIMake02_2x from '../assets/index/whatimake02@2x.png'

const page = css`
  background: ${color.black};
  height: 100vh;
  width: 100vw;
  color: ${color.white};
  overflow: hidden;
  span {
    display: block;
  }
`

const foreground = css`
  position: fixed;
  background: ${color.transparentDark};
  height: 100vh;
  width: 100vw;
  color: ${color.white};
  overflow: hidden;
  z-index: 2;
`

const background = css`
  position: fixed;
  background: black;
  height: 100vh;
  width: 100vw;
  color: ${color.white};
`

const container = css`
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const heroLink = css`
  font-size: ${typography.rhythm(5)};
  text-decoration: none;
  color: rgba(255, 255, 255, 0.5);

  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`

const heroLinkActive = css`
  color: rgba(255, 255, 255, 1);
`

const heroLinkSmall = css`
  font-size: ${typography.rhythm(1.4)};
  font-size: ${typography.scale(2.65)};
  font-family: 'Georgia';
  font-style: italic;
  font-weight: normal;
  color: rgba(255, 255, 255, 1);
`

const sceneBackground = css`
  position: fixed;
  height: 100vh;
  width: 100vw;
  transition: all 0.3s ease-in-out;
`

const sceneActive = css`
  opacity: 1;
`

const sceneInactive = css`
  opacity: 0;
`

const heroLinkDefault = css`
  color: ${color.white};
`
class HomeIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scene: '',
    }
  }

  handleSceneChange(scene) {
    this.setState({
      scene,
    })
  }

  render() {
    // TODO: this (103:123-ish) is extremely verbose (aka trash) streamline with better logic.
    const scenePrimary = cx({
      [sceneBackground]: true,
      [sceneActive]: this.state.scene === 'primary',
      [sceneInactive]: this.state.scene !== 'primary',
    })

    const sceneSecondary = cx({
      [sceneBackground]: true,
      [sceneActive]: this.state.scene === 'secondary',
      [sceneInactive]: this.state.scene !== 'secondary',
    })

    const primaryHeroLink = cx({
      [heroLink]: true,
      [heroLinkDefault]: this.state.scene === '',
      [heroLinkActive]: this.state.scene === 'primary',
    })

    const secondaryHeroLink = cx({
      [heroLink]: true,
      [heroLinkDefault]: this.state.scene === '',
      [heroLinkActive]: this.state.scene === 'secondary',
    })

    return (
      <div className={page}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: '' }]}
          title={`James Josephson`}
        />
        <GlobalHeader inverse>
          <h3>
            <Link to={'/'}>James Josephson</Link>
          </h3>
        </GlobalHeader>
        <div className={foreground}>
          <Container className={container}>
            <Row>
              <Col>
                <h1>
                  <Link
                    to="about"
                    className={primaryHeroLink}
                    onMouseEnter={() => {
                      this.handleSceneChange('primary')
                    }}
                    onMouseLeave={() => {
                      this.handleSceneChange('')
                    }}
                  >
                    Learn who I am
                  </Link>
                  <div className={heroLinkSmall}>through</div>
                  <Link
                    to="work"
                    className={secondaryHeroLink}
                    onMouseEnter={() => {
                      this.handleSceneChange('secondary')
                    }}
                    onMouseLeave={() => {
                      this.handleSceneChange('')
                    }}
                  >
                    What I make
                  </Link>
                </h1>
              </Col>
            </Row>
          </Container>
        </div>
        <div className={background}>
          <div className={scenePrimary}>
            <Container className={container}>
              <Row style={{ marginBottom: 50 }}>
                <Col offset={{ sm: 5 }} sm={7}>
                  <Figure imgSrc={LearnWhoIAm00} imgSrc2x={LearnWhoIAm00_2x} />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Figure imgSrc={LearnWhoIAm01} imgSrc2x={LearnWhoIAm01_2x} />
                </Col>
                <Col offset={{ sm: 2 }}>
                  <Figure imgSrc={LearnWhoIAm02} imgSrc2x={LearnWhoIAm02_2x} />
                </Col>
              </Row>
            </Container>
          </div>
          <div className={sceneSecondary}>
            <Container className={container}>
              <Row>
                <Col>
                  <Row>
                    <Col style={{ textAlign: 'right' }}>
                      <Figure imgSrc={WhatIMake01} imgSrc2x={WhatIMake01_2x} />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div style={{ paddingTop: 25, paddingBottom: 25 }}>
                        <Figure
                          imgSrc={WhatIMake00}
                          imgSrc2x={WhatIMake00_2x}
                        />
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <div style={{ paddingLeft: 50 }}>
                    <Figure imgSrc={WhatIMake02} imgSrc2x={WhatIMake02_2x} />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeIndex
