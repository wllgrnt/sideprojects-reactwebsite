import React from 'react'
import styled from 'styled-components'

import { Section, Container, SectionHeader } from '@components/global'

const TheDayAfter = () => (
  <Section id="thedayafter">
    <Container>
      <SectionHeader accent="rgba(204, 88, 49, 0.2)">
        <h3>The Day After</h3>
        <h1 style={{ marginTop: '0.25em', marginBottom: '0.5em' }}>
          Sunday, the 24th of May
        </h1>
        <p>Dress code: Comfy</p>
      </SectionHeader>
      <Grid>
        <div style={{ marginTop: '1em', textAlign: 'center' }}>
          <h2 style={{ marginTop: '0.5em' }}>Brunch</h2>
          <p>
            <b>Start time:</b> Eleven o' clock <br />
            <b>Location:</b> Hotel Hoffmeister, <br />
            Pod Bruskou 144,
            <br /> Prague
            <br />
            {/* (insert map pic if possible) */}
            <br />
            The brunch is optional and informal. Feel free to explore the city
            instead!
          </p>
        </div>
      </Grid>
      {/* <Art>
              <Img fluid={data.art_castle.childImageSharp.fluid} />
            </Art>
          </Grid> */}
      {/* <Grid inverse>
            <Art>
              <Img fluid={data.art_learn.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>Nothing new to learn here</h2>
              <p>
                Enjoy the power of the latest web technologies – React.js ,
                Webpack , modern JavaScript and CSS and more — all set up and
                waiting for you to start building.
              </p>
            </div>
          </Grid> */}
    </Container>
  </Section>
)

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
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
  }
`

export default TheDayAfter
