import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ArticlesPage from './pages/ArticlesPage.jsx'
import Header from './components/Header.jsx'
import ContactPage from './pages/ContactPage.jsx'
import BlindCarPage from './pages/blindCarPage.jsx'
import AstucesPage from './pages/AstucesPage.jsx'
import BestSellerPage from './pages/BestSellerPage.jsx'
import TestimonyPage from './pages/TestimonyPage.jsx'
import CreateArticlePage from './pages/CreateArticlePage.jsx'
import ArticlePage from './pages/ArticlePage.jsx'
import UpdateArticlePage from './pages/UpdateArticlePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/articles' element={<ArticlesPage />} />
        <Route path='/articles/new' element={<CreateArticlePage />} />
        <Route path='/articles/:id' element={<ArticlePage />} />
        <Route path='/articles/:id/edit' element={<UpdateArticlePage />} />

        <Route path='/BlindCar' element={<BlindCarPage />} />
        <Route path='/Astuces' element={<AstucesPage />} />
        <Route path='/Bestseller' element={<BestSellerPage />} />
        <Route path='/Testimony' element={<TestimonyPage />} />

        <Route path='/contact' element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
