import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Section, Container, SectionHeader } from '@components/global'

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        art_candw_skiing: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "candw_skiing_circle_cropped" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        art_candw_ham: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "candw_ham_circle_crop" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        art_candw_japan: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "kinkakuji" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="aboutus">
        <Container>
          <SectionHeader accent="rgba(171, 189, 111, 0.2)">
            <h1>About Us</h1>
          </SectionHeader>
          <Grid>
            <div>
              <p>
                We met at Trinity College, Cambridge, where we both studied
                Natural Sciences (Christina reading chemistry, Will reading
                physics), and started dating in October 2013.
              </p>
              {/* <p>Here is </p> */}
            </div>
            <Art>
              <Img fluid={data.art_candw_skiing.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid>
            <Art>
              <Img fluid={data.art_candw_japan.childImageSharp.fluid} />
            </Art>
            <div>
              <p>
                We got engaged in Japan in August 2018 (Will tried to propose by
                Mt Fuji, but it was too cloudy to be seen!){' '}
              </p>
              {/* <p>Here is </p> */}
            </div>
          </Grid>
          <Grid>
            <div>
              <p>
                Now we live in San Francisco! Christina is a postdoctoral
                researcher at UCSF, whilst Will has just submitted his PhD.
              </p>
            </div>
            <Art>
              <Img fluid={data.art_candw_ham.childImageSharp.fluid} />
            </Art>
          </Grid>
        </Container>
      </Section>
    )}
  />
)

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: center;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: center;
    grid-template-columns: 2fr 3fr;
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
  max-width: 380px;
  width: 100%;
`

export default About
