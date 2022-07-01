import styled from '@emotion/styled'
import { NextPage } from 'next'

const Wrapper = styled.div`
  margin: auto;
  text-align: center;
  margin-top: 60px;

  & h1 {
    font-size: 120px;
    margin: 0;
  }
  
`

const NotFoundPage: NextPage = () => {
  return <Wrapper>
    <h1>404</h1>
    <span>Page not found!</span>
  </Wrapper>
}

export default NotFoundPage
