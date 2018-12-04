import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { Container, Col } from 'react-grid-system'
import { css } from 'emotion'
import ReactPlayer from 'react-player'

import Layout from '../../../components/Layout'
import PageHeader from '../../../components/PageHeader'
import PageFooter from '../../../components/PageFooter'
import WorkSection from '../../../components/WorkSection'
import Figure from '../../../components/Figure'
import WorkRow from '../../../components/WorkRow'
import WorkHeader from '../../../components/WorkHeader'
import { typography } from '../../../system'

class WorkItemFandor extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <WorkHeader
          title="Fandor"
          when="MMMM YY"
          role="Your Role"
          tools="Tools used, comma separated"
        />

        <WorkSection
          title="Section Title A"
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
        >
          <WorkRow>
            {/* 
            <Col sm={8} offset={{ sm: 1 }}>
              <Figure
                imgSrc="https://placehold.it/860x565"
                imgSrc2x="https://placehold.it/1720x1130"
                caption="Lorem ipsum dolor sit amet"
              />
            </Col> 
            */}
          </WorkRow>
        </WorkSection>

        <WorkSection
          title="Section Title B"
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
        >
          <WorkRow>
            {/* 
            <Col sm={8} offset={{ sm: 1 }}>
              <Figure
                imgSrc="https://placehold.it/860x565"
                imgSrc2x="https://placehold.it/1720x1130"
                caption="Lorem ipsum dolor sit amet"
              />
            </Col> 
            */}
          </WorkRow>
        </WorkSection>
        <WorkSection
          title="Section Title C"
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
        >
          <WorkRow>
            {/* 
            <Col sm={8} offset={{ sm: 1 }}>
              <Figure
                imgSrc="https://placehold.it/860x565"
                imgSrc2x="https://placehold.it/1720x1130"
                caption="Lorem ipsum dolor sit amet"
              />
            </Col> 
            */}
          </WorkRow>
        </WorkSection>

        <PageFooter>
          <ul>
            <li>
              <Link to="/work/karma">Karma</Link>
            </li>
            <li>
              <Link to="/work/stockt">Stockt</Link>
            </li>
            <li>
              <Link to="/work/cortana">Cortana</Link>
            </li>
          </ul>
        </PageFooter>
      </Layout>
    )
  }
}

export default WorkItemFandor
