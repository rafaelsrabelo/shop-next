import { styled } from "../styles"

const Button = styled('button', {
  backgroundColor: '$green500',
  color: '#fff',
  borderRadius: 4,
  border: 0,
  padding: '4px 8px',

  span: {
    color: 'red'
  },

  '&:hover': {
    filter: 'brightness(0.8)'
  }
})

export default function Home() {
  return (
    <>
      <Button>
        <span>teste</span>
        Enviar
      </Button>
    </>
  )
}
