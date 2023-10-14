"use client";
 
// You need to import our styles for the button to look right. Best to import in the root /layout.tsx but this is fine
import "@uploadthing/react/styles.css";
 
import { UploadDropzone } from "../src/utils/uploadthing";
import { useState } from "react";
import Link from "next/link";
import { HandleData } from ".";
import Rebalance from "./Rebalance";
 
export default function Uploader({ getData }) {
  const [csv, setCsv] = useState< {
                          fileName: string;
                          name: string;
                          fileSize: number;
                          size: number;
                          fileKey: string;
                          key: string;
                          fileUrl: string;
                          url: string;
                        }[]>([]);
  
  const title = csv.length ? (
    <>
      <p className="-mt-5 text-[#6AB5D3]">Upload Complete!</p>
    </>
  ) : null 
  
  const csvList = (
    <>
      {title}
      <ul>
        {csv.map(cs => (
          <li key={cs.fileName} className="mt-1 text-gray-400 text-sm mb-2">
              {cs.fileName}
          </li>

        ))}
      </ul>
    </>
  )
   
  return (
    <main className="w-full h-full items-center text-center flex flex-col justify-center ">
      <UploadDropzone
        appearance={{
          button:
            "ut-ready:bg-[#6AB5D3] ut-uploading:cursor-not-allowed rounded-r-none bg-[#6AB5D3] bg-none after:bg-[#6AB5D3]",
          label:
            "text-gray-400 hover:text-[#6AB5D3]",
          container:
            "h-full w-full",
        }}
        className="border-none"
        endpoint="csvUploader"
        onClientUploadComplete={(res) => {
          if (res) {
            setCsv(res);
            const fileNames = res.map(item => item.fileName);
            const fileUrls = res.map(item => item.fileUrl);
            const arr = [fileNames, fileUrls];
            if (arr[0].length != 0 && arr[1].length != 0){
              getData(arr);
            }
          }
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
      {csvList}
    </main>
  );
}
