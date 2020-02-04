import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Section, Container, SectionHeader } from '@components/global'

const IndustryWork = () => (
  <StaticQuery
    query={graphql`
      query {
        epidemic: file(sourceInstanceName: { eq: "art" }, name: { eq: "sis" }) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_villa: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "villa" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        ubiquitin: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "research_image" }
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
      <Section id="education">
        <Container>
          <SectionHeader accent="rgba(157, 43, 65, 0.2)">
            <h3>About Me</h3>

            {/* <h1 style={{ marginTop: '0.25em', marginBottom: '0.5em' }}>
              Saturday, the 23rd of May
            </h1>
            <p>
              <b>Dress code:</b> Lounge suits{' '}
            </p> */}
          </SectionHeader>
          <Grid inverse>
            <div>
              <h2>Undergrad</h2>
              <p>
                I read Natural Sciences at Cambridge from 2011-2015,
                specialising in Quantum Condensed Matter (the physics behind
                crystal structures).
                <br />
                <br />I wanted to branch out, so in my fourth year master's
                project I moved into network science. Specifically, I
                investigated epidemic processes on random networks, with Dr.
                Taraskin of the Chemistry Department.
              </p>
            </div>
            <Art>
              <Img fluid={data.epidemic.childImageSharp.fluid} />
              <Caption>
                An epidemic on a square lattice within the SIS model, with
                susceptible nodes in grey and infected nodes in red.{' '}
              </Caption>
            </Art>
          </Grid>
          <Grid>
            <Art small>
              <Img fluid={data.ubiquitin.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>Postgrad</h2>
              <p>
                My PhD was based in the Physics department, supervised by Dr.
                Sebastian Ahnert.
                <br />
                <br />
              </p>
            </div>
          </Grid>
          <Grid inverse>
            <div>
              <h2>Reception</h2>
              <p>
                <b>Location:</b> Villa Richter,
                <br />
                Staré zámecké schody 6,
                <br />
                Prague
              </p>
              <br />
              <p>
                A glass of champagne in the sun, the wedding breakfast, and
                dancing.{' '}
              </p>
            </div>
            <Art>
              <Img fluid={data.art_villa.childImageSharp.fluid} />
            </Art>
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
  text-align: center;
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

export default Education
