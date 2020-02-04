import React from 'react'
import styled from 'styled-components'

import { Container } from '@components/global'
import ExternalLink from '@common/ExternalLink'

import GithubIcon from '@static/icons/github.svg'
import TwitterIcon from '@static/icons/twitter.svg'

const SOCIAL = [
  {
    icon: GithubIcon,
    link: 'https://github.com/wllgrnt/sideprojects-reactwebsite',
  },
  {
    icon: TwitterIcon,
    link: 'https://twitter.com/wllgrnt',
  },
]

const Footer = () => (
  <FooterWrapper>
    <StyledContainer>
      <Copyright>
        <span>
          Adapted from
          {` `}
          <StyledExternalLink href="https://www.gatsbyjs.org/starters/ajayns/gatsby-absurd/">
            gatbsy-absurd
          </StyledExternalLink>
          .
        </span>
      </Copyright>
      <SocialIcons>
        {SOCIAL.map(({ icon, link }) => (
          <ExternalLink key={link} href={link}>
            <img src={icon} alt="link" />
          </ExternalLink>
        ))}
      </SocialIcons>
    </StyledContainer>
  </FooterWrapper>
)

const SocialIcons = styled.div`
  display: flex;

  img {
    margin: 0 8px;
    width: 24px;
    height: 24px;
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-top: 40px;
  }
`

const FooterWrapper = styled.footer`
  // background-color: rgba(110, 46, 91,0.4);
  background-color: rgba(56, 84, 148, 0.4);

  padding: 32px 0;
`

const Copyright = styled.div`
  font-family: ${props => props.theme.font.secondary};
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.black.regular};

  a {
    text-decoration: none;
    color: inherit;
  }
`

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    text-align: center;
  }
`

const StyledExternalLink = styled(ExternalLink)`
  // margin: 2em 0;
  &:hover {
    color: ${props => props.theme.color.black.lighter};
  }
  text-decoration: none;
  color: inherit;
  // ${props => props.theme.font_size.regular};
`

export default Footer
