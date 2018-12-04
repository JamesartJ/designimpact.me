import React from 'react'
import { Link } from 'gatsby'
import { css, cx } from 'emotion'
import { color } from '../system'
import { Container } from 'react-grid-system'

const bg = css`
  margin: 0 auto;
  padding-top: 78px;
`

const pageInner = css`
  position: relative;
  z-index: 1;
  &::before {
    content: '';
    width: 1px;
    height: 100%;
    border-right: 1px solid ${color.grayLight};
    position: absolute;
    width: calc(33.3333% - 30px);
    left: 0;
    bottom: 0;
    z-index: 0;
  }
`

class Page extends React.Component {
  render() {
    const { children } = this.props

    const pageClass = cx({
      [bg]: true,
    })
    return (
      <div className={pageClass}>
        <Container className={pageInner}>{children}</Container>
      </div>
    )
  }
}

export default Page
