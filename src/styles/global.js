import { injectGlobal } from 'styled-components'

injectGlobal`
  html, body, #root {
    height: 100%
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased;
    background: '#f2f2f2';
    scroll-behavior: smooth;
  }
`
