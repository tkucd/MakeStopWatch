import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StopWatch from './pages/StopWatch'

export const RouterConfig = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/stopwatch" element={<StopWatch />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}