import fetchImages from "../lib/fetchImages";
import type { ImagesResults, Photo } from "../models/Images";



import React from 'react'
import PhotoCard from "./ImageContaner.js";
import { getBase64Urls } from "../lib/getBase64.js";
import getPrevNextPages from "@/lib/getNextPrevPage.js";
import Footer from "./Footer.js";


type Props ={
  topic?: string |undefined; 
  page?: string |undefined;
}

export default async function Gallery({topic =' curated', page} : Props) {

    let url;
    if(topic  === 'curated && page'){
      url = `https://api.pexels.com/v1/curated?page=${page}` ///browsing beyond home
    }
    else if(topic === 'curated'){
      url = `https://api.pexels.com/v1/curated` ///home page
    }else if(page){ //first page of search results
      url = `https://api.pexels.com/v1/search?query=${topic}`

    }else{ //search results beyond first page
      url = `https://api.pexels.com/v1/search?query=${topic}&page=${page}`

    }
    const images: ImagesResults | undefined = await fetchImages(url);

    if(!images || images.per_page === 0) return <h2 className="m-4.text-2xl.font-bold">No images found</h2>
    const photosWithBlur = await getBase64Urls(images);

    //calculate paginatiom
    const {nextPage, prevPage} = getPrevNextPages(images);
    const footerProps = {topic, page, nextPage, prevPage}


  return (
    <>

    <section className="px-1 my-3 grid grid-cols-gallery auto-rows-[10px]">
        {photosWithBlur.map(image => (
           <PhotoCard photo={image}  key={image.id}/>
        ))}
    </section>

        {/* add footer */}
        <Footer nextPage={nextPage} prevPage={prevPage} page={page} topic={topic}/>
    </>
  )
}
