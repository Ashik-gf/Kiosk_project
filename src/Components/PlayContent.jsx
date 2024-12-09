import Marquee from 'react-fast-marquee'
import bdFlag from '../assets/bd.png'
import cgFlag from '../assets/cg.png'
import logo from '../assets/logo.png'
import Date_Time from './Date_Time'
import Slider from './Slider/Slider'
import VideoPlayer from './VideoPlayer'

const PlayContent = () => {

  return (
    <div className=' aspect-ratio-9/16 border-2 bg-[#02070e]'>
      <div className=" aspect-ratio-9/16">
        {/* header */}
        <div className="w-full h-[100%]  flex justify-between items-center py-10">
          <img className=' w-1/3 h-[170px]' src={bdFlag} />
          <img className=' w-1/4 h-[170px]' src={logo} />
          <img className=' w-1/3 h-[170px]' src={cgFlag} />
        </div>
        <div className=" py-8 border-2 px-2 ">
          <Marquee>
            <h1 className='text-[50px] font-extrabold text-red-500'> Welcome to Bangladesh Coast Guard </h1>
          </Marquee>
        </div>
        {/* slider */}
        <div className="w-full h-full py-2">
          {/* this is slider pages */}
          <Slider />
        </div>
        <div className="w-full py-2">
          <VideoPlayer />
        </div>
        {/* timer and date */}
        <Date_Time />
      </div>
    </div>
  )
}

export default PlayContent