import ButtonExample from './components/button'
import ToggleButtonExample from './components/toggle-button'
import HyperlinkButtonExample from './components/hyperlink-button'
import '@wui/core/themes/light.scss'
import '@wui/core/typography/typography.scss'
import '@wui/core/button/button.scss'
import '@wui/core/hyperlink-button/hyperlink-button.scss'
import './App.css'

function App() {
  return (
    <div className="App">
      <ButtonExample></ButtonExample>
      <ToggleButtonExample></ToggleButtonExample>
      <HyperlinkButtonExample></HyperlinkButtonExample>
    </div>
  )
}

export default App
