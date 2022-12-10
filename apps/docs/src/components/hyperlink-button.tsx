import HyperlinkButton from '@wui/core/hyperlink-button'
import Board from './board'

export default function HyperlinkButtonExample() {
  return (
    <Board title="Hyperlink Button">
      <HyperlinkButton href="https://www.github.com/xiaolu-lujunji/windows-ui" target="_blank">
        Text
      </HyperlinkButton>
      <HyperlinkButton
        href="https://www.github.com/xiaolu-lujunji/windows-ui"
        target="_blank"
        disabled
      >
        Text
      </HyperlinkButton>
    </Board>
  )
}
