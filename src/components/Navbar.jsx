import { useState } from "react"

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Features', href: '#features' },
    { name: 'Partners', href: '#partners' },
    { name: 'Blog', href: '#blog' },
    { name: 'FAQs', href: '#faqs' },
  ]


  return (
    <>
      <header className=" inset-x-0 z-50">
        <nav className="flex container mx-auto items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Desa Pintar</span>
              <p href='#' className='text-2xl font-semibold text-emerald-500'>DesaPintar</p>
            </a>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen((mobileMenuOpen)=> !mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-base  font-semibold leading-6 text-gray-900 hover:text-emerald-600 duration-300">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="px-5 py-2 text-base text-white bg-emerald-500 font-semibold rounded-full hover:bg-emerald-600 duration-500">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      {mobileMenuOpen && <div className="flex flex-col lg:hidden items-center gap-2 transition-all">

        {navigation.map((item) => (
          <a key={item.name} href={item.href} className="text-base  font-semibold leading-6 text-gray-900 hover:text-emerald-600 duration-300">
            {item.name}
          </a>
        ))}
      </div>}
      </header>

    </>
  )
}

export default Navbar