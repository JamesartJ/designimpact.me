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

// images
import imgKarma00 from '../../../assets/karma/karma-00.png'
import imgKarma00_2x from '../../../assets/karma/karma-00@2x.png'
import imgKarma01 from '../../../assets/karma/karma-01.png'
import imgKarma01_2x from '../../../assets/karma/karma-01@2x.png'
import imgKarma02 from '../../../assets/karma/karma-02.png'
import imgKarma02_2x from '../../../assets/karma/karma-02@2x.png'
import imgKarma03 from '../../../assets/karma/karma-03.png'
import imgKarma03_2x from '../../../assets/karma/karma-03@2x.png'
import imgKarma06 from '../../../assets/karma/karma-06.png'
import imgKarma06_2x from '../../../assets/karma/karma-06@2x.png'


class WorkItemKarma extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <WorkHeader
          title="Karma"
          when="Fall 2015"
          role="Student"
          tools="Google Voice, Twillio, Sketch"
        />

        <WorkSection
          title="The Problem"
          description={'In the fall semester of 2015, a Lewis & Clark student was the victim of a hate crime on campus. Word quickly spread the night of the assault, and students were left not only enraged but feeling incredibly unsafe. That night I joined a small group of students who had a set up shop in a rec building. Our first priority was to ensure no other students were harmed. We made a spreadsheet of all the students we could brainstorm and had everyone there reach out accordingly. We’d had radio silence from the school, and we all agreed we needed a solution to help students feel safe.'}
        >
          <WorkRow>
            <Col sm={8} offset={{ sm: 1 }}>
              <Figure
                imgSrc={imgKarma00}
                imgSrc2x={imgKarma00_2x}
                caption="Lorem ipsum dolor sit amet"
              />
            </Col>
          </WorkRow>
        </WorkSection>

        <WorkSection
          title="Taking Action"
          description="The morning after, the student body responded in a campus wide protest. Many from our group were corresponding with the institution and discussing with faculty. I worked with a friend from the CS department to quickly build a buddy system, the fastest method we devised for ensuring student safety. Using Google Voice and Twilio, we built a text forwarding system and deployed a sign up page. Within the first couple days we received 500 signups and forwarded buddy requests to group chats based on the times our signups marked they were available. On the school news site, we encouraged students to also use the app companion for friends to remotely monitor their safe travel."
          >
          <WorkRow>
            <Col sm={9} offset={{ sm: 1 }}>
              <Figure
                imgSrc={imgKarma01}
                imgSrc2x={imgKarma01_2x}
              />
            </Col>
          </WorkRow>

          <WorkRow>
            <Col sm={9} offset={{ sm: 1 }}>
              <Figure
                videoSrc="https://www.youtube.com/watch?v=i4MCMvEK530"
                caption="Lorem ipsum dolor sit amet (vimeo)"
              />
            </Col>
          </WorkRow>
          
        </WorkSection>

        <WorkSection
          title="A Longerm Solution"
          description={'Students taking a class in the entrepreneurship department reached out, with plans to build an app allowing students similar access to a community transportation. By virtue of their attendance, each student has a student ID. This account information was used for both requesting rides as well as tracking the driving of other students. Volunteering to drive other students earned "Karma points" which the app tracked These points could then be spent on future rides or on special rewards offered by the college. After login, the landing screen allowed users to request rides. If the user wished to earn points by giving rides, they would navigate to the points section.'}
        >
          <WorkRow>
            <Col sm={10} offset={{ sm: 1 }}>
              <Figure
                imgSrc={imgKarma06}
                imgSrc2x={imgKarma06_2x}
              />
            </Col>
          </WorkRow>


      
        </WorkSection>

        <PageFooter>
          <ul>
            <li>
              <Link to="/work/stockt">Stockt</Link>
            </li>
            <li>
              <Link to="/work/cortana">Cortana</Link>
            </li>
            <li>
              <Link to="/work/fandor">Fandor</Link>
            </li>
          </ul>
        </PageFooter>
      </Layout>
    )
  }
}

export default WorkItemKarma
