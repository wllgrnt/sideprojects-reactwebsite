import React from 'react'
import styled from 'styled-components'

import { Section, Container, SectionHeader } from '@components/global'
// import Form from '@common/Form'
import ExternalLink from '@common/ExternalLink'

const RSVP = () => (
  <Section id="rsvp">
    <Container>
      <SectionHeader accent="rgba(94, 186, 189, 0.2)">
        <h1>RSVP (by 29/02/20) </h1>
      </SectionHeader>
      <Grid>
        <div>
          <p>
            To let us know you're coming, and choose your dinner options, please
            use the form below: <br />
            <br />
            <StyledExternalLink href="https://docs.google.com/forms/d/e/1FAIpQLSfIzqQRGCqsW2pdUSMcEx2uWtCTIHQxavdRxrlIWs2nBj3ikg/viewform">
              <b>Click here to RSVP</b>
            </StyledExternalLink>
            <br />
            <br />
            Thanks!
          </p>
        </div>
      </Grid>
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

const StyledExternalLink = styled(ExternalLink)`
  // margin: 2em 0;
  &:hover {
    color: ${props => props.theme.color.black.lighter};
  }
  text-decoration: none;
  color: inherit;
  ${props => props.theme.font_size.regular};
`

// const StyledExternalLink = styled(ExternalLink)`
//   &:hover {
//     color: ${props => props.theme.color.black.regular};
//   }
//   max-width: 150px;
//   margin: 50px 0;
//   padding: 12px 20px;
//   border-style: none;
//   border-radius: 5px;
//   background-color: #08c;
//   box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
//   font-size: 20px;
//   font-weight: 500;
//   color: #fff;
//   cursor: pointer;
//   outline: none;
//   -webkit-appearance: none;
//   text-decoration: none;
// `

export default RSVP
