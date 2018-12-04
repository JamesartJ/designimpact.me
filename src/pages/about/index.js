import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { Container, Col } from 'react-grid-system'
import { css } from 'emotion'
import ReactPlayer from 'react-player'

import Layout from '../../components/Layout'
import PageHeader from '../../components/PageHeader'
import PageFooter from '../../components/PageFooter'
import WorkSection from '../../components/WorkSection'
import Figure from '../../components/Figure'
import WorkRow from '../../components/WorkRow'
import WorkHeader from '../../components/WorkHeader'
import { typography } from '../../system'

// images
import imgFirstSteps00 from '../../assets/about/first-steps-00.png'
import imgFirstSteps00_2x from '../../assets/about/first-steps-00@2x.png'
import imgFirstSteps01 from '../../assets/about/first-steps-01.png'
import imgFirstSteps01_2x from '../../assets/about/first-steps-01@2x.png'
import imgHighSchool00 from '../../assets/about/high-school-00.png'
import imgHighSchool00_2x from '../../assets/about/high-school-00@2x.png'
import imgHighSchool01 from '../../assets/about/high-school-01.png'
import imgHighSchool01_2x from '../../assets/about/high-school-01@2x.png'
import imgHighSchool02 from '../../assets/about/high-school-02.png'
import imgHighSchool02_2x from '../../assets/about/high-school-02@2x.png'
import imgCollege00 from '../../assets/about/college-00.png'
import imgCollege00_2x from '../../assets/about/college-00@2x.png'
import imgCollege01 from '../../assets/about/college-01.png'
import imgCollege01_2x from '../../assets/about/college-01@2x.png'
import imgFinishingCollege00 from '../../assets/about/finishing-college-00.png'
import imgFinishingCollege00_2x from '../../assets/about/finishing-college-00@2x.png'
import imgFinishingCollege01 from '../../assets/about/finishing-college-01.png'
import imgFinishingCollege01_2x from '../../assets/about/finishing-college-01@2x.png'
import imgFinishingCollege02 from '../../assets/about/finishing-college-02.png'
import imgFinishingCollege02_2x from '../../assets/about/finishing-college-02@2x.png'
import imgRealWorld00 from '../../assets/about/real-world-00.png'
import imgRealWorld00_2x from '../../assets/about/real-world-00@2x.png'
import imgRealWorld01 from '../../assets/about/real-world-01.png'
import imgRealWorld01_2x from '../../assets/about/real-world-01@2x.png'

class About extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <PageHeader>
          <h1>Learn who I am</h1>
        </PageHeader>
        <WorkSection
          title="My First Steps"
          description="When I was four I kept a notebook of inventions. Under the monicker Inventor Jaime Gadget, I dreamed of a future, sketched out in heavy black pencil, where everything could fly. Elementary school lunches were spent pouring over Star Wars cross sections as I searched for answers to the mysteries of designing lightsabers and X-wings. I wanted to build the mythical and magical, creations unconstrained by what I was taught possible. So I sketched diagrams and labeled the measurements and specifications, envisioning how to bring these dreams to life."
        >
          <WorkRow>
            <Col offset={{ sm: 1 }}>
              <Figure
                imgSrc={imgFirstSteps00}
                imgSrc2x={imgFirstSteps00_2x}
                caption="Dreaming of Flight"
              />
            </Col>
          </WorkRow>
          <WorkRow>
            <Col offset={{ sm: 1 }}>
              <Figure
                imgSrc={imgFirstSteps01}
                imgSrc2x={imgFirstSteps01_2x}
                caption="Submarine Schematic - 3D navigation and electric fencing to protect it in the deep sea 🙃"
              />
            </Col>
          </WorkRow>
        </WorkSection>

        <WorkSection
          title="Highschool"
          description="I discovered graphic design in high-school. As a student of the theatre department, I taught myself photoshop and illustrator and began designing posters for our school plays. A local parent in the community to notice, and asked me to design a logo for her company, a women’s health and beauty startup called Flora. During this time, I also found the joy of Physics and Math though AP classes and on the weekends around the busked around the bay."
        >
          <WorkRow>
            <Col sm={4} offset={{ sm: 1 }}>
              <Figure
                imgSrc={imgHighSchool00}
                imgSrc2x={imgHighSchool00_2x}
                caption="All women production of Julius Caesar"
              />
            </Col>
            <Col sm={6}>
              <Figure
                imgSrc={imgHighSchool01}
                imgSrc2x={imgHighSchool01_2x}
                caption="Will Eno’s Middletown"
              />
            </Col>
          </WorkRow>
          <WorkRow>
            <Col sm={4} offset={{ sm: 1 }}>
              <Figure
                videoSrc="https://vimeo.com/161198786"
                videoOrientation="portrait"
                caption="Sausalito Busking 🎻"
              />
            </Col>
            <Col sm={6}>
              <Figure
                imgSrc={imgHighSchool02}
                imgSrc2x={imgHighSchool02_2x}
                caption="First Logo!"
              />
            </Col>
          </WorkRow>

          {/* https://vimeo.com/161198786 */}
        </WorkSection>

        <WorkSection
          title="Off to College"
          description="Over the summer leading up to school, I began teaching myself web development. When I arrived at school I took upper level computer science course, and was invited to stay on over summer as a researcher developing a cybersecurity platform called <u>EDURange</u>. I was quickly drawn towards ways to make the platform more engaging and accessible, which lead me to redesign and develop an new interface for it. After research that summer, I started a design shop with another pier called <u>On Point Design</u>, and acted in as well as helped to direct a feature called Malaria."
        >
          <WorkRow>
            <Col sm={5} offset={{ sm: 1 }}>
              <Figure
                imgSrc={imgCollege00}
                imgSrc2x={imgCollege00_2x}
                caption="The Standard Model"
              />
            </Col>
            <Col sm={3}>
              <Figure
                videoSrc="https://vimeo.com/171235189"
                videoOrientation="portrait"
                caption="Late Night Jammin"
              />
            </Col>
          </WorkRow>
          <WorkRow>
            <Col sm={11} offset={{ sm: 1 }}>
              <Figure
                videoSrc="https://vimeo.com/122205576"
                caption="Malaria - think Resovoir Dogs with a hint of  Breaking Bad"
              />
            </Col>
          </WorkRow>
          <WorkRow>
            <Col sm={7} offset={{ sm: 1 }}>
              <Figure
                imgSrc={imgCollege01}
                imgSrc2x={imgCollege01_2x}
                caption="Check out onpointdesign.org"
              />
            </Col>
          </WorkRow>
        </WorkSection>

        <WorkSection
          title="Finishing School"
          description="The fall of my sophomore year I was a member of a five person team that competed in the national Intel sponsored startup competition, as the designer on the team. We won and were awarded a five thousand dollar prize. As I continued my academic studies, I focused my major on Mathematics and Physics, and I was invited to join the honorary national mathematics society, Pi Mu Epsilon. I played violin in the college’s symphony and performed in the theatre department’s production of the musical, <u>Spring Awakening</u>. During this time, I also continued to expand On Point Design, and took on clients such as World Music Entertainment, Hurst Creative, the Sausalito Art Festival as well as various startups in the Portland area. In my last semester, I interned as the product designer on a mobile app for eBay’s charity department."
        >
          <WorkRow>
            <Col sm={10} offset={{ sm: 1 }}>
              <Figure
                imgSrc={imgFinishingCollege00}
                imgSrc2x={imgFinishingCollege00_2x}
                caption="Trngle, a social app for creative collaboration. Designed by On Point Design"
              />
            </Col>
          </WorkRow>{' '}
          <WorkRow>
            <Col sm={10} offset={{ sm: 1 }}>
              <Figure
                imgSrc={imgFinishingCollege01}
                imgSrc2x={imgFinishingCollege01_2x}
                caption="Abroad, an app for students to engage with local communities while studying abroad. Designed by On Point Design"
              />
            </Col>
          </WorkRow>
          <WorkRow>
            <Col sm={10} offset={{ sm: 1 }}>
              <Figure
                imgSrc={imgFinishingCollege02}
                imgSrc2x={imgFinishingCollege02_2x}
                caption="Oregon Gear Up, an app to empower students during the college application process as part of my Ebay internship."
              />
            </Col>
          </WorkRow>
        </WorkSection>

        <WorkSection
          title="The Real World"
          description="After finishing my coursework early in the fall of 2016, I began working for a startup in Oakland as a product designer. After a successful product launch, I left for India to volunteer at a summer camp in Janwar, Madhya Pradesh. Taking inspiration from Skateistan, a German woman Ulrike built a skate park there which has encouraged community development and academic participation. I taught music and english, and for the first time really saw how powerful an impact simple changes in infrastructure can have on a community."
        >
          <WorkRow>
            <Col sm={10} offset={{ sm: 1 }}>
              <Figure
                imgSrc={imgRealWorld00}
                imgSrc2x={imgRealWorld00_2x}
                caption="First guitar in the village, everyone was stoked to learn!"
              />
            </Col>
          </WorkRow>
          <WorkRow>
            <Col sm={10} offset={{ sm: 1 }}>
              <Figure
                imgSrc={imgRealWorld01}
                imgSrc2x={imgRealWorld01_2x}
                caption="Posing with the squad, these kids are too cool for me."
              />
            </Col>
          </WorkRow>
        </WorkSection>

        <WorkSection
          title="New Horizons"
          description="I returned with a renewed sense in the power of design to create an impact, and to continue my growth joined the Agency Swirl in the Presidio. While there, I worked as a UX designer on products for Microsoft, American Express, Juniper Networks, and others. I have since joined Facebook as a product designer on their bizapps team, designing software for use across internal supply chains. While my work has allowed for an improvement in the experience of many users, the scope has been narrow. Design can go beyond a human centered approach to a humanity centered one. I plan to use of these skills, and the many more to learn, in order to tackle the problems that affect us all globally, to design impact."
        />

        <PageFooter>
          <h1>
            <Link to="work">What I make</Link>
          </h1>
        </PageFooter>
      </Layout>
    )
  }
}

export default About
