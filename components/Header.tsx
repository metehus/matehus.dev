import styled from '@emotion/styled'
import Link from 'next/link'
import type { FC } from 'react'
import { Container } from './base/Container'

const HeaderFlex = styled.div`
  display: flex;
  height: 70px;
  align-items: center;
`

const Line = styled.hr`
  background: linear-gradient(
    90deg,
    ${({ theme: { colors } }) => `${colors.purpur}, ${colors.teal}`}
  );
  margin: 0;
  border: none;
  height: 1px;
  width: 100%;
`

const Logo = styled.div`
  flex: 1;

  & span {
    display: block;
    font-weight: 700;
    font-size: 18px;
    line-height: 20px;
  }
  & span:nth-child(1) {
    color: ${({ theme: { colors } }) => colors.purpur};
  }
  & span:nth-child(2) {
    color: ${({ theme: { colors } }) => colors.teal};
  }
`

const HeaderLink = styled.a`
  color: white;
  height: 100%;
  align-items: center;
  display: inline-flex;
  padding: 0 10px;
  position: relative;
  z-index: 1;
  text-decoration: none;

  // https://medium.com/@dave_lunny/animating-css-gradients-using-only-css-d2fd7671e759
  &:before {
    background-image: linear-gradient(
      transparent,
      ${({ theme }) => theme.colors.teal}
    );
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    z-index: -1;
    transition: all 250ms ease-in-out;
    width: 100%;
    height: 100%;
  }

  &:hover {
  &:before {
      opacity: 0.3;
    }
  }
`

const Header: FC = () => {
  return (
    <header>
      <Container>
        <HeaderFlex>
          <Logo>
            <span>Matheus</span>
            <span>Sanches</span>
          </Logo>
          <Link passHref href="/">
            <HeaderLink>About</HeaderLink>
          </Link>
          <Link passHref href="/projects">
            <HeaderLink>Projects</HeaderLink>
          </Link>
        </HeaderFlex>
      </Container>
      <Line />
    </header>
  )
}

export default Header
