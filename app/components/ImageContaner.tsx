import Link from "next/link";
import type { Photo } from "../models/Images";
import Image from "next/image";

type Props = {
    photo: Photo
}

export default function PhotoCard({ photo }: Props) {

    const widthHeightRatio = photo.height / photo.width;
    const galleryHeight = Math.ceil(250 * widthHeightRatio);
    const photoSpans = Math.ceil(galleryHeight / 10 ) + 1;

    return (

        <div key={photo.id} className=" w-[250px] justify-self-center" style={{gridRow:`span ${photoSpans}`}}>
            <Link href={photo.url} target="_blank"
                className="grid place-content-center"
                >
            <div className="rounded-xl overflow-hidden group" >
                
                <Image 
                src={photo.src.large} 
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                placeholder="blur"
                blurDataURL={photo.blurredDataUrl}
                sizes="250px"
                // sizes="(min-width: 1280px) 278px, (min-width: 1040px) calc(12.73vw + 118px), (min-width: 800px) 33.18vw, (min-width: 540px) 50vw, calc(100vw - 16px) "          
                className="group-hover:opacity-75"
                />

            </div>
            </Link>

            
      </div>
           
            
    )
}