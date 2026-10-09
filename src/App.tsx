import { useLayoutEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import CategoryPage from './pages/CategoryPage'

function ScrollToSection(){
  const { pathname, hash } = useLocation()

  useLayoutEffect(() => {
    if (pathname !== '/' || !hash) return
    document.getElementById(hash.slice(1))?.scrollIntoView({ block: 'start' })
  }, [pathname, hash])

  return null
}

export default function App(){
  return (
    <div className="notebook-app">
      <ScrollToSection />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:slug" element={<CategoryPage />} />
          <Route path="*" element={<CategoryPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
