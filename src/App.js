import './App.css'
import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { Navbar, Footer, Sidebar, ThemeSettings } from './components'
import { Dashboard, Receitas, Despesas, Investimentos, Perfil } from './pages'

const App = () => {
  const activeMenu = true

  return (
    <BrowserRouter>
      <div className='flex relative dark:bg-main-dark-bg'>
        <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
          <TooltipComponent content="Settings" position='top'>
            <button type='button' className='text-3xl p-3 hover:bg-light-gray text-white' style={{ background: 'blue', borderRadius: '50%' }}>
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
        {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <Routes>
              {/* dashboard  */}
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />}/>

              {/* pages  */}
              <Route path="/receitas" element={<Receitas />}/>
              <Route path="/despesas" element={<Despesas />}/>
              <Route path="/investimentos" element={<Investimentos />}/>
              <Route path="/perfil" element={<Perfil />}/>

            </Routes>
          </div>
      </div>
    </BrowserRouter>
  )
}

export default App