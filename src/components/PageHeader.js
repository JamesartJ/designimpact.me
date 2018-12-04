import React from 'react'
import { Link } from 'gatsby'
import { css, cx } from 'emotion'
import { color, typography } from '../system'
import { Container, Row, Col } from 'react-grid-system'

const headerStyle = css`
  background: ${color.white};
  margin-bottom: 5rem;
  position: relative;
  z-index: 1;
  padding: 0;

  h1 {
    color: ${color.black};
    ${typography.scale(2.5)};
    ${typography.rhythm(5)};
  }
`

const headerInner = css`
  border-bottom: 1px solid ${color.grayLight};
  padding: 6.6rem 0 2rem;
`

class PageHeader extends React.Component {
  render() {
    const { location, children } = this.props

    const headerClass = cx({
      [headerStyle]: true,
    })
    return (
      <div className={headerClass}>
        <div>
          <div sm={12} className={headerInner}>
            {children}
          </div>
        </div>
      </div>
    )
  }
}

export default PageHeader
