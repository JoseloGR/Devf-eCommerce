import { useState } from "react";

export default function Navigation() {
  const [activeProfile, setActiveProfile] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);

  const handleProfileClick = () => {
    setActiveProfile(!activeProfile);
  };

  const handleMenuClick = () => {
    setActiveMenu(!activeMenu);
  }

  return (
    <nav className="bg-blueGray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button onClick={handleMenuClick} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-white-400 hover:text-white hover:bg-blueGray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className={`${!activeMenu ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${activeMenu ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <svg className="lg:block h-8 w-auto" id="fi_3885051" enableBackground="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path d="m192.634 88.505v-53.968h-39.934v53.968c-8.656 2.885-16.48 7.591-23.014 13.664-12.399 11.523-20.157 27.969-20.157 46.233v226.828h126.277v-226.828c-.001-27.89-18.092-51.539-43.172-59.897z" fill="#b2caec"></path><path d="m192.634 88.506v-53.969h-23.489v53.968c25.08 8.358 43.172 32.007 43.172 59.897v226.828h23.489v-226.828c-.001-27.889-18.092-51.539-43.172-59.896z" fill="#82aee3"></path><path d="m340.829 6.565c-32.784 0-59.361 26.577-59.361 59.361v8.61h7.624v37.775h-7.624v165.524c0 32.784 26.577 59.361 59.361 59.361s59.361-26.577 59.361-59.361v-211.909c0-32.784-26.577-59.361-59.361-59.361z" fill="#c86d36"></path><path d="m195.332 0h-45.33c-2.384 0-4.317 1.933-4.317 4.317v25.903c0 2.384 1.933 4.317 4.317 4.317h45.33c2.384 0 4.317-1.933 4.317-4.317v-25.903c0-2.384-1.933-4.317-4.317-4.317z" fill="#5a5a5a"></path><path d="m340.829 6.565c-5.568 0-10.951.784-16.061 2.217 24.977 7.007 43.3 29.928 43.3 57.144v211.909c0 27.216-18.322 50.137-43.3 57.144 5.11 1.434 10.493 2.217 16.061 2.217 32.784 0 59.361-26.577 59.361-59.361v-211.909c0-32.784-26.577-59.361-59.361-59.361z" fill="#ac5e2e"></path><path d="m340.289 112.311h-58.821v-37.775h58.821c10.431 0 18.888 8.456 18.888 18.888 0 10.431-8.457 18.887-18.888 18.887z" fill="#ecbba3"></path><path d="m281.468 218.467h58.821c10.431 0 18.888 8.456 18.888 18.888 0 10.431-8.456 18.888-18.888 18.888h-58.821" fill="#ecbba3"></path><path d="m293.62 110.344c-10.095 0-19.59 3.419-27.866 9.431-8.276-6.012-17.771-9.431-27.866-9.431-32.148 0-58.21 34.652-58.21 77.397s26.061 77.397 58.21 77.397c10.095 0 19.59-3.419 27.866-9.43 8.276 6.012 17.77 9.43 27.866 9.43 32.149 0 58.21-34.652 58.21-77.397s-26.062-77.397-58.21-77.397z" fill="#e53950"></path><g><path d="m265.762 139.184c-.515 0-1.037-.052-1.561-.16-4.171-.856-6.861-4.924-6.021-9.094.074-.386 4.028-21.911-9.333-42.415-2.33-3.574-1.321-8.362 2.255-10.691 3.573-2.333 8.361-1.321 10.691 2.255 16.992 26.073 11.762 52.806 11.53 53.931-.752 3.655-3.97 6.174-7.561 6.174z" fill="#dc8758"></path></g><g><path d="m293.62 110.344c-5.043 0-9.936.853-14.602 2.456 25.082 8.614 43.61 38.9 43.61 74.94 0 36.041-18.528 66.326-43.61 74.941 4.666 1.603 9.559 2.456 14.602 2.456 32.149 0 58.21-34.651 58.21-77.397 0-42.744-26.062-77.396-58.21-77.396z" fill="#ca2e43"></path></g><path d="m421.731 165.123h-333.892l-17.827 330.333c-.485 8.999 7.223 16.544 16.903 16.544h338.17c9.726 0 17.451-7.613 16.897-16.651z" fill="#e19974"></path><path d="m346.667 453.105h-181.334c-3.983 0-7.211-3.229-7.211-7.211v-45.328c0-3.983 3.229-7.211 7.211-7.211h181.335c3.983 0 7.211 3.229 7.211 7.211v45.328c0 3.983-3.229 7.211-7.212 7.211z" fill="#ecbba3"></path><path d="m441.981 495.349-20.25-330.226h-35.042l20.25 330.226c.554 9.039-7.171 16.651-16.897 16.651h35.042c9.727 0 17.452-7.613 16.897-16.651z" fill="#dc8758"></path><path d="m199.649 30.22v-25.903c0-2.384-1.933-4.317-4.317-4.317h-26.282c2.384 0 4.317 1.933 4.317 4.317v25.903c0 2.384-1.933 4.317-4.317 4.317h26.282c2.384 0 4.317-1.932 4.317-4.317z" fill="#444"></path>
                </g>
              </svg>
              <span className="text-white brand-name">Mi Tiendita</span>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button className="bg-blueGray-800 p-1 rounded-full text-blueGray-400 focus:text-white focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-offset-blueGray-800 focus:ring-white">
              <span className="sr-only">View notifications</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
            {/* <!-- Profile dropdown --> */}
            <div className="ml-3 relative">
              <div>
                <button onClick={handleProfileClick} type="button" className="bg-blueGray-800 flex text-sm rounded-full focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-blueGray-800 focus:ring-white" id="user-menu" aria-expanded="false" aria-haspopup="true">
                  <span className="sr-only">Open user menu</span>
                  <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                </button>
              </div>      
              <div className={`${activeProfile ? '': 'hidden'} origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-blueGray-50 ring-opacity-5 focus:outline-none z-10`} role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blueGray-100" role="menuitem">Perfil</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blueGray-100" role="menuitem">Config</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blueGray-100" role="menuitem">Cerrar Sesión</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div className={`${activeMenu ? '': 'hidden'} sm:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#" className="text-white-300 hover:bg-blueGray-700 hover:text-white block px-3 py-2 rounded-md text-white font-medium">Registro</a>
          <a href="#" className="text-white-300 hover:bg-blueGray-700 hover:text-white block px-3 py-2 rounded-md text-white font-medium">Iniciar Sesión</a>
        </div>
      </div>
      <style jsx>{`
          .brand-name {
              font-family: 'Lobster', Arial, sans-serif;
          }
      `}
      </style>
    </nav>
  );
}