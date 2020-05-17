import styled from 'styled-components'

export const PlaceholderElement = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: #dbdbdc;
  border-radius: 6px;
  margin: ${({ margin }) => margin};
`
