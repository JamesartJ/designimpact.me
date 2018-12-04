import React from 'react'
import { Link } from 'gatsby'
import { css, cx } from 'emotion'
import { color, typography } from '../system'

const headerStyle = css`
  background: ${color.white};
  margin-top: 5rem;
  z-index: 1;
  position: relative;

  a {
    color: ${color.black};
    text-decoration: none;
    border-bottom: 7px solid ${color.white};

    &:hover {
      border-bottom: 7px solid ${color.black};
    }
  }

  h3 {
    font: ${typography.rhythm(0)};
  }

  h1 {
    line-height: ${typography.scale(2.5)};
    font-size: ${typography.rhythm(5)};
    color: ${color.black};
  }

  ul {
    line-height: ${typography.scale(2.5)};
    font-weight: bold;

    li {
      list-style-type: none;
      font-size: ${typography.rhythm(3)};
      line-height: ${typography.scale(2.8)};

      a {
        border-color: ${color.white};

        &:hover {
          border-color: ${color.black};
        }
      }
    }
  }
`

const headerInner = css`
  border-top: 1px solid ${color.grayLight};
  padding: 4rem 0;
`

class PageFooter extends React.Component {
  render() {
    const { location, children } = this.props

    const headerClass = cx({
      [headerStyle]: true,
    })
    return (
      <div className={headerClass}>
        <div className={headerInner}>{children}</div>
      </div>
    )
  }
}

export default PageFooter
