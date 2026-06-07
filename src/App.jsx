import { RouterProvider } from "react-router-dom"
import { appRouter } from "./routes/appRouter"

function App() {
  return (
    <>
        <RouterProvider appRouter={appRouter}/>
    </>
  )
}

export default App