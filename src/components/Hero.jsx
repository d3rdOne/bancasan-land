import heroBanner from '../assets/heroBg2.jpg'
import logo from '../assets/bannerLogo.png'
import Header from './Header'

const Hero = () => {
  return (
    <div className='relative'>
      <Header className={'absolute w-full z-10 text-gray-200'}/>
      <div className='sm:h-fit p-8 pt-20 bg-gradient-to-r from-indigo-800 to-indigo-600 sm:bg-transparent relative'>
        <div className='flex flex-col items-center'>
          <img src={logo} alt="" className='w-full h-fit sm:w-4/6 lg:w-3/6 lg:h-20 block'/>
        </div>
      </div>
      <div className='py-16 lg:py-36 px-16 lg:px-40 bg-gray-50 min-h-60 w-full h-full flex flex-col lg:flex-row justify-center'>
        <div className='max-w-6xl flex flex-col lg:flex-row justify-between items-center gap-8 '>
          <div className='text-xl sm:text-3xl font-semibold text-gray-800 '> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, pariatur.</div>
          <div className='text-wrap text-md sm:text-xl text-gray-700'>
            <p className='mb-4'>An annual event uniting sound lovers & enthusiasts in an epic sound battles and the legendary drum dragging competition. ®️ Est. 2019</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorum incidunt neque quibusdam quaerat, dolor veritatis natus officia minus aliquam nemo praesentium. Magnam, tempore velit? Necessitatibus harum pariatur magnam voluptatum.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero