import React from 'react'
import { Link } from 'gatsby'
import { css, cx } from 'emotion'
import { color, typography } from '../system'
import { Row, Col } from 'react-grid-system'

const rowClass = css`
  padding-bottom: 3rem;
  &:last-child {
    padding-bottom: 0;
  }
`

class WorkRow extends React.Component {
  render() {
    const { children } = this.props
    return <Row className={rowClass}>{children}</Row>
  }
}

export default WorkRow
