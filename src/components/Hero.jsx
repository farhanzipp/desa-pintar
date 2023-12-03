
import blooming from '../assets/bloom.svg';

const Hero = () => {
  return (
    <div>
      <section>
        <div className="container flex flex-col justify-center p-6 mx-auto xs:py-20 sm:py-20 lg:pb-16 lg:pt-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold sm:text-6xl">Develop your
              <br />
              farm <span className='text-emerald-500'>smarter</span>
            </h1>
            <p className="mt-6 mb-8 text-lg font-medium sm:mb-12">With this super app and battle tested website
              <br />
              you can build modern 5.0 villages in no time!
            </p>
            
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg bg-emerald-500 font-semibold rounded text-white hover:bg-emerald-600 duration-500">Suspendisse</a>
              <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded ">Malesuada</a>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img src={blooming} alt="Blooming" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero