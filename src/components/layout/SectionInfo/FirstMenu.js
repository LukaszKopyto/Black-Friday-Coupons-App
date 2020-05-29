import styled from 'styled-components'

export const FirstMenu = styled.div`
  height: 90px;
  display: flex;
  justify-content: ${({ toLeft }) => (toLeft ? 'unset' : 'space-between')};
  align-items: center;
  padding: 0 30px;
  border-top: ${({ theme }) => `1px solid ${theme.colors.border}`};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.border}`};
  color: ${({ theme }) => theme.colors.textColor};

  @media ${({ theme }) => theme.device.md} {
    justify-content: flex-start;
    font-size: 24px;
    width: 100%;
  }

  @media ${({ theme }) => theme.device.xl} {
    width: ${({ toLeft }) => (toLeft ? '100%' : '50%')};
    padding: 0 50px;
  }
`
