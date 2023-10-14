'use client';

import { Children, Fragment, useState } from 'react';
import Image from 'next/image';
import { Combobox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

import logo from '../public/logo-lg.png';
import { CustomButton, Uploader } from '.';

const callThisFromChildComponent = (value) => {
  console.log("Child data ", value);
}

const methods = [
    {id: 1, name: 'Kmeans-SMOTE'},
    {id: 2, name: 'SMOTE'},
    {id: 3, name: 'Random Undersampling'},
]

export default function Rebalance() {
  const [selected, setSelected] = useState(methods[0]);
  const [query, setQuery] = useState('');
  const [data, setData] = useState();
  const [responseData, setResponseData] = useState();

  
  function getData(file){
    setData(file);    
  }

  const filteredMethod =
  query === ''
    ? methods
    : methods.filter((method) =>
        method.name
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(query.toLowerCase().replace(/\s+/g, ''))
      )

  const handleBalance = async () => {
    const res = await fetch('api/transferdata', {
      method: 'POST',
      body: JSON.stringify({ data })
      })
      const result = await res.json();
      setResponseData(result.sendedData)
      console.log(result.sendedData);
      if (responseData === "False"){
        alert(responseData)
      }
    }

    // try {
    //   if (!data || !data[1] || data[1].length === 0) {
    //     console.error('Data is missing or empty.');
    //     return;
    //   }
      
    //   const sendFile = {
    //     method: selected.name,
    //     fileLink: data[1][0],
    //   }
    //   const response = await fetch("/api/transferdata", {
    //     method: "POST",
    //     body: JSON.stringify({ body: "Didit" }),
    //   });
  
    //   // const result = await response.json();
    //   // console.log(result); // This will be the output from your Python script.
    //   // setResponseData(result);

    // } catch (error) {
    //   console.error('Error', error);
    // }
  

    
    return (
        
        <div className='w-full h-screen flex flex-col pt-[45px]' id='rebalance'>  
          <Image 
              src={logo}
              alt='Logo'
              className='mx-auto w-[155px] h-[40px] md:w-[250px] md:h-[60px]'
          />
          <div className='w-[250px] h-[350px] md:w-[700px] md:h-[350px] mx-auto border-dashed border-2 
          border-[#001122] border-opacity-50 rounded-[30px] mt-[50px] flex justify-center items-center flex-col'>
              <Uploader getData={getData}/>
          </div>
          <div className='flex w-[350px] md:w-[700px] mx-auto flex-col justify-center items-center text-center  '>  
              <div className=' mt-5 flex-1'>
                <Combobox value={selected} onChange={setSelected}>
                    <div className="relative mt-1">
                        <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md  focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                            <Combobox.Input
                                className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-700 font-medium focus:ring-0"
                                displayValue={(method) => method.name}
                                onChange={(event) => setQuery(event.target.value)}
                            />
                            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                            </Combobox.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                            afterLeave={() => setQuery('')}
                        >
                        <Combobox.Options className="absolute mt-1 max-h-60 
                        w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1
                        ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {filteredMethod.length === 0 && query !== '' ? (
                            <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                Nothing found.
                            </div>
                            ) : (
                                  filteredMethod.map((method) => (
                                  <Combobox.Option
                                    key={method.id}
                                    className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                      active ? 'bg-[#6AB5D3] text-white' : 'text-gray-900'
                                    }`}
                                    value={method}
                                    >
                                    {({ selected, active }) => (
                                      <>
                                        <span
                                          className={`block truncate ${
                                            selected ? 'font-medium' : 'font-normal'
                                          }`}
                                        >
                                          {method.name}
                                        </span>
                                        {selected ? (
                                          <span
                                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                              active ? 'text-white' : 'text-teal-600'
                                            }`}
                                          >
                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                          </span>
                                        ) : null}
                                      </>
                                    )}
                                  </Combobox.Option>
                                  ))
                                )}
                          </Combobox.Options>
                        </Transition>
                      </div>
                  </Combobox>
              </div>
              <div className="flex-1">
                <CustomButton 
                    title='Balancing Data'
                    colorStyles='bg-[#6AB5D3]'
                    handleClick={handleBalance}
                />
                
              </div>
          </div>
        </div>
    )
}
