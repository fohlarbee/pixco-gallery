import type { ImagesResults } from "../models/Images";
import { ImagesSchemaWithPhotos } from "../models/Images";import { env } from "./env";


export default async function fetchImages(url: string) : Promise<ImagesResults | undefined> {
        try {
            const res = await fetch(url, {
                headers:{
                    Authorization: env.PEXELS_API_KEY
                }
            });
            if(!res.ok) throw  new Error('Erro while fetching images');
            
            const imagesResults: ImagesResults = await res.json();
            // console.log(imagesResults);

            const parsedData  = ImagesSchemaWithPhotos.parse(imagesResults);

            if(parsedData.total_results === 0) return undefined;

            return parsedData;
        } catch (error) {
            if(error instanceof Error) {
                // console.log(error.message)
            }
            
        }
}