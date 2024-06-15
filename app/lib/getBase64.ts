import { getPlaiceholder } from "plaiceholder";
import type { Photo, ImagesResults } from "../models/Images";

export  async function generateBase64 (url: string) {
    try {
        const res = await fetch(url);
        if(!res.ok){
            throw new Error(`Error while fetching image ${res.status}`);
        }
    
        const buffer = await res.arrayBuffer();
    
    
        const {base64 } = await getPlaiceholder(Buffer.from(buffer));
        return base64;
    
        
    } catch (error) {
        if(error instanceof Error){
            throw new Error(error.message)
        }
        
    }
   
}

export  async function getBase64Urls(images: ImagesResults): Promise <Photo[]>{

        //avoid waterfall  issue
            const base64Promises =  images.photos.map((photo:Photo) => generateBase64(photo.src.large));
            
            //resolve all request in order
            const base64Results = await Promise.all(base64Promises);

            const photoWithBlurData : Photo[] = images.photos.map((photo:Photo, i:number) => {
                photo.blurredDataUrl = base64Results[i];

                return photo;

            });

            return photoWithBlurData;
    

}