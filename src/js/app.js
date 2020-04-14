import Navigation from './components/Navigation'
import '../scss/main.scss'
import './components/MyCounter'
import './components/MyCard'
import LucotmoPng from '../images/lucotmo.png'

const page = `
  <main class="Main">
    <h1>Lucotmo yes</h1>
    ${Navigation}
    <my-card name="lucotmo" avatar=${LucotmoPng} >
    <div slot="email">lucotmo@gmail.com</div>
    <div slot="phone">315-385-5955</div>
    </my-card>
    <my-card name="luchotero" avatar=${LucotmoPng} >
    <div slot="email">luchotero@gmail.com</div>
    <div slot="phone">316-3850-0888</div>
    </my-card>
    <my-counter count="10" />

  </main>
`

document.getElementById('root').innerHTML = page
