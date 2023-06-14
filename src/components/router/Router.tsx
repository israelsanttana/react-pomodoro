import { Route, Routes } from "react-router-dom"
import { Home } from "../../pages/home/Home"
import { History } from "../../pages/History"
import { DefaultLayout } from "../../layouts/default/DefaultLayout"

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/history" element={<History />} />
            </Route>
        </Routes>

    )
}