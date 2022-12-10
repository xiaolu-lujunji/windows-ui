import './board.css'

export interface BoardProps {
  title: string
  children?: React.ReactNode
}

export default function Board(props: BoardProps) {
  const { title, children } = props
  return (
    <div className="board">
      <h3>{title}</h3>
      {children}
    </div>
  )
}
