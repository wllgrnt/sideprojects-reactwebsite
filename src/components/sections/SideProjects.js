import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Section, Container, SectionHeader } from '@components/global'

const SideProjects = () => (
  <StaticQuery
    query={graphql`
      query {

        bartracker: file(sourceInstanceName: { eq: "art" }, name: { eq: "bartracker" }) {
            childImageSharp {
              fluid(maxWidth: 760) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
  

        islr: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "decisiontree" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="sideprojects">
        <Container>
          <SectionHeader accent="rgba(94, 186, 189, 0.2)">
            <h3>Side Projects</h3>
            <p>
              I've spent a lot of time coding up other things, normally in an
              effort to teach myself something, and other in colloboration with
              my PhD officemates. These will probably get spun into blog posts shortly.
            </p>
          </SectionHeader>
          <Grid inverse>
            <div>
              <h2>Barbell Tracking</h2>
              <p>
              A neural network, trained on weightlifters, which recognises the bounding box for a barbell - the centroid of this bounding box is then tracked through the course of a video using OpenCV (the object detection and tracking all work, but integrating this into a app/website proved more difficult). </p>
            </div>
            <Art small>
                <Img fluid={data.bartracker.childImageSharp.fluid} />
                <Caption>The bar tracker as applied to a Dip Snatch.</Caption>
            </Art>
          </Grid>
          <Grid>
            <Art>
              <Img fluid={data.islr.childImageSharp.fluid} />
              <Caption>A single decision tree (overfitting), applied to the OJ dataset from ISLR. We predict whether a customer buys Citrus Hill or Minute Maid orange juice.</Caption>
            </Art>
            <div>
              <h2>Introduction to Statistical Learning</h2>
              <p>
                Solutions to all the exercises in James et al.’s book, using Python and the Numpy/SKLearn/Pandas data science stack, rather than R.
              </p>
            </div>
          </Grid>
        </Container>
      </Section>
    )}
  />
)

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 3fr 2fr;

  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: center;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 1;
        }
    `}

    ${props =>
      !props.inverse &&
      `
        ${Art} {
          order: 3;
        }
    `}
  }
`

const Art = styled.figure`
  margin: 0;
  max-width: 500px;
  ${props => props.small && `max-width: 360px;`};
  width: 100%;
`

const Caption = styled.div`
  text-align: center;
  ${props => props.theme.font_size.tiny};
  color: ${props => props.theme.color.black.regular};
`
const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className="video">
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
)




export default SideProjects
