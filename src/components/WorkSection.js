import React from 'react'
import { Link } from 'gatsby'
import { css, cx } from 'emotion'
import { color, typography } from '../system'
import { Row, Col } from 'react-grid-system'
import WorkRow from './WorkRow'

const sectionClass = css`
  margin-bottom: 6rem;
  z-index: 2;
  position: relative;
`

const copy = css`
  line-height: ${typography.scale(.3)};
`

class WorkSection extends React.Component {
  render() {
    const { children, title, description } = this.props
    return (
      <div className={sectionClass}>
        <WorkRow>
          <Col sm={4}>
            <h3>{title}</h3>
          </Col>
          <Col sm={7} offset={{ sm: 1 }}>
            <p
              className={copy}
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            />
          </Col>
        </WorkRow>
        {children}
      </div>
    )
  }
}
import { from } from 'apollo-link'

export default WorkSection
