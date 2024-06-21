import Header from "../components/Header"
import HeroGallery from "../components/HeroGallery"

const Gallery = () => {
  return (
    <div className="absolute w-full h-svh">
       <Header className="absolute w-full text-gray-800" />
       <HeroGallery className={'min-h-svh'}/>
    </div>

  )
}

export default Gallery