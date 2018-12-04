import React from 'react'
import { Link } from 'gatsby'
import { css } from 'emotion'
import Helmet from 'react-helmet'
import Page from './Page'
import GlobalHeader from './GlobalHeader'
import iconBack from '../assets/icon-back.svg'
import { typography } from '../system'

const backStyle = css`
  font-weight: normal;
  flex-align: center;
  display: inline-flex;
  font-size: ${typography.rhythm(0.8)};
`

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header
    const isWorkPage =
      location.pathname.split('/')[1] === 'work' &&
      location.pathname.split('/').length >= 3

    if (location.pathname === rootPath) {
      header = (
        <GlobalHeader>
          <h1>
            <Link to={'/'}>James Josephson</Link>
          </h1>
        </GlobalHeader>
      )
    } else if (isWorkPage) {
      header = (
        <GlobalHeader>
          <h3>
            <Link className={backStyle} to={'work'}>
              <img src={iconBack} style={{ marginRight: '15px' }} /> Back
            </Link>
          </h3>
        </GlobalHeader>
      )
    } else {
      header = (
        <GlobalHeader>
          <h3>
            <Link to={'/'}>James Josephson</Link>
          </h3>
        </GlobalHeader>
      )
    }
    return (
      <div>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: 'siteDescription' }]}
          title={`James Josephson`}
        />
        {header} <Page>{children}</Page>
      </div>
    )
  }
}

export default Template
