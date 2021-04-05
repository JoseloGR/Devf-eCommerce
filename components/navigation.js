import { useState } from "react";
import cookie from 'js-cookie';
import { useRouter } from 'next/router';

export default function Navigation() {
  const [activeProfile, setActiveProfile] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);
  const router = useRouter();

  const handleProfileClick = () => {
    setActiveProfile(!activeProfile);
  };

  const handleMenuClick = () => {
    setActiveMenu(!activeMenu);
  }

  const logoutClick = () => {
    cookie.remove('token');
    handleProfileClick();
  }

  return (
    <nav className="bg-white-800 shadow">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button onClick={handleMenuClick} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className={`${!activeMenu ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="gray">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${activeMenu ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="gray">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div onClick={() => router.push('/')} className="flex-shrink-0 flex items-center">
              <span className="text-gray-700 text-xl brand-name">Mi Tiendita</span>
            </div>
            <div className="flex-grow hidden sm:block sm:ml-6">
              <div className="flex justify-start">
                <span className="inset-y-0 left-0 flex items-center pl-2">
                  <button className="p-1 focus:outline-none focus:shadow-outline">
                    <svg fill="none" stroke="gray" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </button>
                </span>
                <input type="text" className="focus:outline-white text-lg p-2 w-3/4 max-w-full" placeholder="¿Qué necesitas el día de hoy?"/>
              </div>
            </div>
          </div>
          {
            cookie.get('token') ?
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button className="bg-white p-1 rounded-full text-gray-400 focus:text-gray focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-white focus:ring-white">
                <span className="sr-only">View notifications</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="gray">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </button>
              {/* <!-- Profile dropdown --> */}
              <div className="ml-3 relative">
                <div>
                  <button onClick={handleProfileClick} type="button" className="bg-gray-100 flex text-sm rounded-full focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-white focus:ring-white" id="user-menu" aria-expanded="false" aria-haspopup="true">
                    <span className="sr-only">Open user menu</span>
                    <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                  </button>
                </div>      
                <div className={`${activeProfile ? '': 'hidden'} origin-top-right absolute right-0 mt-2 w-48 rounded shadow-lg py-1 bg-white ring-1 ring-gray-50 ring-opacity-5 focus:outline-none z-10`} role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Perfil</a>
                  <a href="javascript:void(0)" onClick={logoutClick} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Cerrar Sesión</a>
                </div>
              </div>
            </div> :
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button onClick={() => router.push('/login')} className="bg-transparent hover:bg-gray-800 text-gray font-semibold hover:text-white py-2 px-4 border border-gray-800 hover:border-transparent rounded-sm">
                  Iniciar Sesión
              </button>
              <button onClick={() => router.push('/signup')} className="bg-green-600 hover:bg-green-700 text-white font-semibold hover:text-white py-2 px-4 ml-4 border border-green-700 hover:border-transparent rounded-sm">
                  Registrarme
              </button>
            </div>
          }
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div className={`${activeMenu ? '': 'hidden'} sm:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#" className="text-gray-600 hover:bg-gray-100 block px-3 py-2 rounded-md font-medium">Registro</a>
          <a href="#" className="text-gray-600 hover:bg-gray-100 block px-3 py-2 rounded-md font-medium">Iniciar Sesión</a>
        </div>
      </div>
      <style jsx>{`
          .brand-name {
              font-family: 'Rajdhani', sans-serif;
          }
      `}
      </style>
    </nav>
  );
}