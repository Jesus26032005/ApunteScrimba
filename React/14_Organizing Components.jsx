import { createRoot } from "react-dom/client"
import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"
const root = createRoot(document.getElementById("root"))

function Page() {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    )
}

root.render(
    <Page />
)


// we import the Header, MainContent, and Footer components from their respective files. Then we use them inside the Page component to create a structured layout. Finally, we render the Page component to the root element in the DOM.

// to export the Page component, we can add the following line at the end of the file:
export default Page