import { createElement } from "react"
import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

// every element needs to be wrapped in a single parent element, a div or a fragment (<> </>) can be used as a wrapper
root.render(
    <main>
        <img src="/src/assets/react-logo.png" />
        <h1>This is another element</h1>
    </main>
)
    