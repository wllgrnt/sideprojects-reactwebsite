import React from 'react'
import styled from 'styled-components'

import { Section, Container, SectionHeader } from '@components/global'

const IndustryWork = () => (
  <Section id="industrywork">
    <Container>
      <SectionHeader accent="rgba(236, 150, 58, 0.2)">
        <h3>Industry Experience</h3>
        <p>
          My main love is Python, but I've had the chance to try several other
          technologies in a professional context.
        </p>
      </SectionHeader>
      <Grid>
        <ExperiencePanel>
          <h3>Java (Testing)</h3>
          <p>
            As an intern at BAE Systems Detica (summer 2013) I helped generate
            test scaffolding for a new version of a Java codebase.
          </p>
        </ExperiencePanel>
        <ExperiencePanel>
          <h3>Java (Development), Hadoop, MapReduce </h3>
          <p>
            In summer 2014, I refactored a large Hadoop project to reduce
            technical debt and improve performance.
          </p>
        </ExperiencePanel>
        <ExperiencePanel>
          <h3>D3.JS</h3>
          <p>
            As a freelance consultant in summer 2016 I created an interactive
            visualisation for the Materials Department, linking the set of
            researchers to their research topics.
          </p>
        </ExperiencePanel>
        <ExperiencePanel>
          <h3>NumPy, Pandas, SciPy</h3>
          <p>
            For Bell Labs UK, I helped parse a set of co-purchases for a
            supermarket chain into a ingredient co-occurence network for
            studying consumption patterns, with the focus on transparent and
            reproducible processing.
          </p>
        </ExperiencePanel>
      </Grid>
    </Container>
  </Section>
)

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
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

const ExperiencePanel = styled.div`
  margin-top: 1em;

  h3 {
    margin-top: 0.5em;
  }
`

export default IndustryWork
