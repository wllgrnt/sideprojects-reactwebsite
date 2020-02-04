import React from 'react'
import styled from 'styled-components'

import { Section, Container, SectionHeader } from '@components/global'
import ExternalLink from '@common/ExternalLink'

const Registry = () => (
  <Section id="registry">
    <Container>
      <SectionHeader accent="rgba(99,177,94, 0.2)">
        <h1>Registry</h1>
      </SectionHeader>
      <Grid>
        <div>
          <p>
            If you're coming to the wedding, your company is gift enough!
            <br />
          </p>
          <p>
            If you do feel like contributing, then we support the following
            charities:
            <br />
            <br />
          </p>
          <p>
            <b>
              <StyledExternalLink href="https://sarcoma.org.uk/donate">
                Sarcoma UK
              </StyledExternalLink>
            </b>{' '}
            <br />
            <br />
            <StyledExternalLink href="https://sandbag.org.uk/">
              <b>Sandbag (Climate Policy think tank)</b>
            </StyledExternalLink>{' '}
            <br />
            <br />
          </p>
          <p>
            If you really want to put something in our house, you can find our
            registry here:
            <br />
            <br />
            <StyledExternalLink href="https://www.blueprintregistry.com/registry/willandchristina2020">
              <b>Blueprint Registry</b>
            </StyledExternalLink>{' '}
            <br />
            <br />
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

export default Registry
