// import React from 'react'

const HeroGallery = () => {

  const galleryList = [{id: '1', imageUrl: '', label:'2019'},{id: '2', imageUrl: '', label:'2022'}, {id: '4', imageUrl: '', label:'2023'}, {id: '3', imageUrl: '', label:'2024'}]
  return (
    <div className="bg-yellow-400 p-32 px-8 sm:px-16 md:px-32">
      <div className="text-3xl sm:text-4xl font-bold text-gray-800 w-full text-center tracking-widest">PREVIOUS EVENTS</div>
      <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-4 mt-8">
        {galleryList.map((item) => {
          return (
            <div key={item.id}
              className="rounded-xl w-full md:max-w-md min-h-64 border-solid  bg-slate-500  border-0 relative">
                {/* <img className="absolute z-0" src='' alt="test" /> */}
                <div className="absolute w-full h-full flex flex-col items-center justify-center gap-4">
                  <p className="text-lg sm:text-2xl font-medium text-gray-200">{item.label}</p>
                  <button className="bg-slate-200 py-2 px-6 rounded-full text-md sm:text-lg text-gray-600 font-semibold">View Gallery</ button>
                </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HeroGallery