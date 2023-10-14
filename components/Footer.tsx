import Image from "next/image";
import git from '../public/github.png';

const Footer = () => {
  return (
    <div className='absolute w-full'>
      <div className='m-10 flex justify-center'>
          <Image 
            src={git}
            alt="git"
            width={50}
            height={50}
          />
          <div className="ml-3">
            <h1 className="text-[18px] font-medium text-[#001122]">Didit Johar Maulana</h1>
            <p className="text-[14px] text-gray-400">@djmaulana</p>
          </div>
      </div>
    </div>
  )
}

export default Footer