import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { FiActivity } from 'react-icons/fi'


import { links } from '../data/utils'
import { useStateContext } from '../contexts/ContextProvider'

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext()

  const handleCloseSideBar = () => {
    if(activeMenu && screenSize <= 900) {
      setActiveMenu(false)
    }
  }

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2'

  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (<>
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            onClick={handleCloseSideBar} 
            className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
          >
            <FiActivity /> <span>HealthTrack</span>
          </Link>
          <TooltipComponent 
            content="Menu" 
            position='BottomCenter'
          >
            <button 
            type='button' 
            onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} 
            className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'
            >
              <MdOutlineCancel />
            </button>
          </TooltipComponent>
        </div>
        
        <div className="mt-10">
          
          {links.map((item, index) => (
            <div>
              <NavLink
                to={`/${item.name}`}
                key={index}
                onClick={handleCloseSideBar}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? '#03C9D7' : '',
                })}
                className={({ isActive }) => (isActive ? activeLink : normalLink)}
              >
                {item.icon}
                <span className='capitalize'>{item.name}</span>
              </NavLink>
            </div>
          ))}
        </div>
      </>)}
    </div>
  )
}

export default Sidebar