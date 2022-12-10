import Hyperlink from '@wui/core/hyperlink'
import Board from './board'

export default function HyperlinkExample() {
  return (
    <Board title="Hyperlink">
      <Hyperlink href="https://www.github.com/xiaolu-lujunji/windows-ui" target="_blank">
        Text
      </Hyperlink>
      <Hyperlink href="https://www.github.com/xiaolu-lujunji/windows-ui" disabled target="_blank">
        Text
      </Hyperlink>
    </Board>
  )
}
