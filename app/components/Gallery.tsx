import fetchImages from "../lib/fetchImages";
import type { ImagesResults, Photo } from "../models/Images";



import React from 'react'
import PhotoCard from "./ImageContaner";
import { getBase64Urls } from "../lib/getBase64";


type Props ={
  topic?: string;
}

export default async function Gallery({topic} : Props) {

    const url =  !topic ?
    `https://api.pexels.com/v1/curated`
    :`https://api.pexels.com/v1/search?query=${topic}`
    const images: ImagesResults | undefined = await fetchImages(url);

    if(!images) return <h2 className="m-4.text-2xl.font-bold">No images found</h2>
    const photosWithBlur = await getBase64Urls(images);



  return (

    <section className="px-2 my-3 grid gap-2 grid-cols-gallery auto-rows-[10px ]">
        {photosWithBlur.map(image => (
           <PhotoCard photo={image}  key={image.id}/>
        ))}
    </section>
  )
}
