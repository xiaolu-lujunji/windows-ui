import Button from '@wui/windows/button'

export default function ButtonPage() {
  return (
    <div className="content">
      <h1>Button</h1>
      <Button variant="accent">Accent</Button>
      <Button variant="standard" style={{ marginLeft: 10 }}>
        Standard
      </Button>
    </div>
  )
}
