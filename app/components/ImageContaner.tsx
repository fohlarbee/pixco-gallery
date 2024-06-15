import type { Photo } from "../models/Images";
import Image from "next/image";

type Props = {
    photo: Photo
}

export default function PhotoCard({ photo }: Props) {

    const widthHeightRatio = photo.height / photo.width;
    const galleryHeight = Math.ceil(250 * widthHeightRatio);

    return (

        <div key={photo.id} className="h-64 bg-gray-200 rounded-xl relative overflow-hidden group">
            <div className="rounded-xl overflow-hidden justify-center">

            </div>
             <Image 
            src={photo.src.large} 
            alt={photo.alt}
            fill={true}
            placeholder="blur"
            blurDataURL={photo.blurredDataUrl}
            sizes="(min-width: 1280px) 278px, (min-width: 1040px) calc(12.73vw + 118px), (min-width: 800px) 33.18vw, (min-width: 540px) 50vw, calc(100vw - 16px) "          
            className="object-cover group-hover:opacity-75"
            />
      </div>
           
            
    )
}