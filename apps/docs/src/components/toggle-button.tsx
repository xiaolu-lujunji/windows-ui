import ToggleButton from '@wui/core/toggle-button'
import Board from './board'
import { useState } from 'react'

export default function ToggleButtonExample() {
  const [selected, setSelected] = useState(false)

  return (
    <Board title="Toggle Button">
      <ToggleButton selected={selected} onClick={() => setSelected(!selected)}>
        Text
      </ToggleButton>
      <ToggleButton
        selected={selected}
        disabled
        onClick={() => setSelected(!selected)}
        style={{ marginTop: 10 }}
      >
        Text
      </ToggleButton>
    </Board>
  )
}
