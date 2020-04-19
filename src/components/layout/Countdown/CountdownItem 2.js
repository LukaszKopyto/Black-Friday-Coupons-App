import styled from 'styled-components'

const CountdownItem = styled.div`
  font-size: 0.875rem;
  color: white;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  & span:first-of-type {
    font-size: 36px;
    font-weight: 800;
  }
  & span:nth-child(2) {
    padding-top: 7px;
  }
`

export default CountdownItem
