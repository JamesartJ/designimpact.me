import React from 'react'
import { Link } from 'gatsby'
import { css, cx } from 'emotion'
import { color, typography } from '../system'
import { Container, Row, Col } from 'react-grid-system'

const headerStyle = css`
  background: rgba(255,255,255, 0.95);
  border-bottom: 1px solid #ededed;
  position: fixed;
  width: 100%;
  z-index: 3;
  * {
    margin-bottom: 0;
  }
  a {
    text-decoration: none;
    color: ${color.black};
    font-size: ${typography.scale(2)};
  }
`

const headerStyleInverse = css`
  position: fixed;
  width: 100%;
  z-index: 3;
  * {
    margin-bottom: 0;
  }
  a {
    text-decoration: none;
    color: ${color.white};
    font-size: ${typography.scale(2)};
  }
`

const headerInner = css``

class GlobalHeader extends React.Component {
  render() {
    const { location, children, inverse } = this.props

    const headerClass = cx({
      [headerStyle]: !inverse,
      [headerStyleInverse]: inverse,
    })
    return (
      <div className={headerClass}>
        <Container>
          <Row className={headerInner}>
            <Col sm={12}>{children}</Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default GlobalHeader
