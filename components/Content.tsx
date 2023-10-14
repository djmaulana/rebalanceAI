import Image from "next/image";

import robot from '../public/bg-robot.png';
import data from '../public/bg-data.png';
import { CustomButton } from ".";

const Content = () => {
  return (
    <div className='w-full h-screen bg-[#F2F2F2] p-12 2xl:p-40 '>
        <div className='w-full flex justify-evenly items-center'>
            <Image 
                src={robot}
                alt="robot"
                className=""
                width={350}
                height={200}
            />
            <div className="">
                <h1 className="text-[60px] font-bold text-[#111]">Improve Model</h1>
                <h1 className="text-[60px] font-bold text-[#111] -mt-5">Performance</h1>
                <p className="text-gray-400">Balancing data can improve model performance based on research <br />wich do by Didit Johar Maulana </p>
                <CustomButton 
                    title='Read More'
                    colorStyles="bg-[#001122]"
                />
            </div>
        </div>
        <div className='w-full flex justify-evenly items-center mt-5'>
            <div className="">
                <h1 className="text-[60px] font-bold text-[#111]">Balancing</h1>
                <h1 className="text-[60px] font-bold text-[#111] -mt-5">Dataset</h1>
                <p className="text-gray-400">Balancing data can improve model performance based on research <br />wich do by Didit Johar Maulana </p>
                <CustomButton 
                    title='Read More'
                    colorStyles="bg-[#001122]"
                />
            </div>
            <Image 
                src={data}
                alt="robot"
                className=""
                width={350}
                height={200}
            />
        </div>
    </div>
  )
}

export default Content