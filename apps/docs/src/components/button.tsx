import Button from '@wui/core/button'
import Board from './board'

export default function ButtonExample() {
  return (
    <Board title="Button">
      <div>
        <Button variant="accent">Accent</Button>
        <Button variant="standard" style={{ marginLeft: 10 }}>
          Standard
        </Button>
      </div>
      <div style={{ marginTop: 10 }}>
        <Button variant="accent" disabled>
          Accent
        </Button>
        <Button variant="standard" disabled style={{ marginLeft: 10 }}>
          Standard
        </Button>
      </div>
    </Board>
  )
}
