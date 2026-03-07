import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Storefront from './Storefront'
import Portal from './portal/Portal'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portal/*" element={<Portal />} />
        <Route path="/*" element={<Storefront />} />
      </Routes>
    </BrowserRouter>
  )
}
