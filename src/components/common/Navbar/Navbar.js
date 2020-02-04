import React, { Component } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Scrollspy from 'react-scrollspy'

import { Container } from '@components/global'
import {
  Nav,
  NavItem,
  Brand,
  StyledContainer,
  NavListWrapper,
  MobileMenu,
  Mobile,
} from './style'

import { ReactComponent as MenuIcon } from '@static/icons/menu.svg'

const NAV_ITEMS = [
  'Education',
  'Industry Work',
  'Side Projects',
  // 'Transport',
  // 'About Us',
  // 'Registry',
  // 'RSVP',
]

class Navbar extends Component {
  state = {
    mobileMenuOpen: false,
  }

  toggleMobileMenu = () => {
    this.setState(prevState => ({ mobileMenuOpen: !prevState.mobileMenuOpen }))
  }

  closeMobileMenu = () => {
    if (this.state.mobileMenuOpen) {
      this.setState({ mobileMenuOpen: false })
    }
  }

  getNavAnchorLink = item => (
    <AnchorLink
      href={`#${item
        .toLowerCase()
        .split(' ')
        .join('')}`}
      onClick={this.closeMobileMenu}
    >
      {item}
    </AnchorLink>
  )

  getNavID = item =>
    // Needed for styling
    'navlink_' +
    item
      .toLowerCase()
      .split(' ')
      .join('')

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  getNavList = ({ mobile = false }) => (
    <NavListWrapper mobile={mobile}>
      <Scrollspy
        items={NAV_ITEMS.map(item =>
          item
            .toLowerCase()
            .split(' ')
            .join('')
        )}
        currentClassName="active"
        mobile={mobile}
        offset={-300}
      >
        {NAV_ITEMS.map(navItem => (
          <NavItem key={navItem} id={this.getNavID(navItem)}>
            {this.getNavAnchorLink(navItem)}
          </NavItem>
        ))}
      </Scrollspy>
    </NavListWrapper>
  )

  render() {
    const { mobileMenuOpen } = this.state

    return (
      <Nav {...this.props}>
        <StyledContainer>
          <button onClick={this.scrollToTop} style={{ color: 'black' }}>
            <Brand>William Grant</Brand>
          </button>
          <Mobile>
            <button onClick={this.toggleMobileMenu} style={{ color: 'black' }}>
              <MenuIcon />
            </button>
          </Mobile>

          <Mobile hide>{this.getNavList({})}</Mobile>
        </StyledContainer>
        <Mobile>
          {mobileMenuOpen && (
            <MobileMenu>
              <Container>{this.getNavList({ mobile: true })}</Container>
            </MobileMenu>
          )}
        </Mobile>
      </Nav>
    )
  }
}

export default Navbar
