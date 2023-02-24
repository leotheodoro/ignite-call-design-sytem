import { colors } from '@igniteui/tokens'
import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite500',
  borderRadius: '$md',
})

export function App() {
  return (
    <>
      <h1 style={{ color: colors.ignite300 }}>Hello World</h1>
      <Button>oi</Button>
    </>
  )
}