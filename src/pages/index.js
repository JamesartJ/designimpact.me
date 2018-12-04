import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { Container, Row, Col } from 'react-grid-system'
import Layout from '../components/layout'
import GlobalHeader from '../components/GlobalHeader'
import { rhythm } from '../system/typography'
import { css, cx, Global } from 'emotion'
import { color, typography } from '../system'

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
  font-size: ${typography.rhythm(4)};
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
  font-size: ${typography.rhythm(1.3)};
  font-size: ${typography.scale(2.65)};
  font-family: 'Georgia';
  font-style: italic;
  font-weight: normal;
  color: rgba(255, 255, 255, 0.5);
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
          <h1>
            <Link to={'/'}>James Josephson</Link>
          </h1>
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
                  <img src="https://picsum.photos/546/346/?random" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <img src="https://picsum.photos/460/350/?random" />
                </Col>
                <Col offset={{ sm: 2 }}>
                  <img src="https://picsum.photos/400/400/?random" />
                </Col>
              </Row>
            </Container>
          </div>
          <div className={sceneSecondary}>
            <Container className={container}>
              <Row>
                <Col>
                  <Row>
                    <Col>
                      <div style={{ paddingTop: 25, paddingBottom: 25 }}>
                        <img src="https://picsum.photos/475/267/?random" />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <img src="https://picsum.photos/604/339/?random" />
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <div style={{ paddingLeft: 50 }}>
                    <img src="https://picsum.photos/546/561/?random" />
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
