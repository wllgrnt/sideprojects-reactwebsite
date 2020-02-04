import React from 'react'
import styled from 'styled-components'

import { Section, Container, SectionHeader } from '@components/global'

const Transport = () => (
  <Section id="transport">
    <Container>
      <SectionHeader accent="rgba(236, 150, 58, 0.2)">
        <h1>Transport</h1>
      </SectionHeader>
      <Grid>
        {/* <Art>
              <Img fluid={data.art_tram.childImageSharp.fluid} />
            </Art> */}
        <div>
          {/* <h2>Transport Info</h2> */}
          <h3>Getting from the airport</h3>
          <p>
            An Uber from the airport will cost £15. Alternatively, take public
            transport! A 90-minute ticket costs 32Kc, and you can take bus 100
            or 119, followed by the underground. There are ticket machines in
            the baggage reclaim area as well as at the airport station. Hailing
            a regular taxi from the airport without pre-booking isn't
            recommended.
          </p>
        </div>
        <div>
          <h3> In and around Prague</h3>
          <p>
            Prague probably has the world's best public transport system. The
            tram system takes contactless payments, and costs 24Kc for a
            30-minute trip. Google maps or equivalent will give routes and
            directions.
          </p>
        </div>
      </Grid>
    </Container>
  </Section>
)

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  text-align: center;
  // align-items: center;
  // justify-items: center;
  margin: 24px 0;
  margin-top: 48px;

  h2 {
    margin-bottom: 16px;
  }

  h3 {
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

export default Transport
