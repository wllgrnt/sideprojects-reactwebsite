import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Container } from '@components/global'
import ExternalLink from '@common/ExternalLink'

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        art_presentation: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "presentation" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <HeaderWrapper>
        <Container>
          <Grid>
            <Text>
              <h1
                style={{ fontFamily: `"Lorca", serif`, fontWeight: 'normal' }}
              >
                Hello!
              </h1>
              {/* <br /> */}
              <p>
                I'm Will, and I've just finished my PhD in Physics at the
                University of Cambridge. This website explains who I am, what
                I've done, and also lets me learn some React (which is why it's
                unnecessarily fancy)
                <br />
                <br />
                My public university page is{' '}
                <StyledExternalLink href="http://www.tcm.phy.cam.ac.uk/profiles/wpg23/">
                  here
                </StyledExternalLink>
                .
                <br />
                <br />
                If you want to get in touch, use{' '}
                <StyledExternalLink href="mailto:contact@wpg.io">
                  contact@wpg.io
                </StyledExternalLink>
              </p>
            </Text>
            <Art>
              <Img fluid={data.art_presentation.childImageSharp.fluid} />
            </Art>
          </Grid>
        </Container>
      </HeaderWrapper>
    )}
  />
)

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.white.regular};
  padding-top: 96px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 80px;
  }
`

const Art = styled.figure`
  width: 100%;
  margin: 10 auto;
  margin-left: -5px;

  // > div {
  //   width: 120%;
  //   margin-bottom: -4.5%;

  @media (max-width: ${props => props.theme.screen.md}) {
    order: -1;
  }
  // }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 4fr;
  align-items: center;
  text-align: center;
  grid-gap: 64px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;
  }
`

const Text = styled.div`
  justify-self: center;
  text-align: left;
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
    text-align: center;
  }
`

const StyledExternalLink = styled(ExternalLink)`
  // margin: 2em 0;
  color: ${props => props.theme.color.black.light};

  &:hover {
    color: ${props => props.theme.color.black.lighter};
  }
  text-decoration: none;
  // ${props => props.theme.font_size.regular};
`

export default Header
