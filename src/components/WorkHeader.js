import React from 'react'
import { Link } from 'gatsby'
import { css, cx } from 'emotion'
import { color, typography } from '../system'
import { Row, Col } from 'react-grid-system'
import PageHeader from './PageHeader'
const sectionClass = css`
  margin-bottom: 6rem;
`

const copy = css`
  font-size: ${typography.rhythm(0.6)};
  font-size: ${typography.scale(0.6)};
`

const label = css`
  margin-bottom: 3px;
  font-weight: normal;
  color: #4a4a4a;
`

const value = css`
  margin: 0;
`

const workTitle = css`
  margin: 0 0 5rem;
`

class WorkHeader extends React.Component {
  render() {
    const { children, title, when, role, tools } = this.props
    return (
      <PageHeader>
        <h1 className={workTitle}>{title}</h1>

        <Row>
          <Col sm={4}>
            <h5 className={label}>When</h5>
            <h3 className={value}>{when}</h3>
          </Col>
          <Col sm={4}>
            <h5 className={label}>Role</h5>
            <h3 className={value}>{role}</h3>
          </Col>
          <Col sm={4}>
            <h5 className={label}>Tools</h5>
            <h3 className={value}>{tools}</h3>
          </Col>
        </Row>
      </PageHeader>
    )
  }
}

export default WorkHeader
