import Gallery from "@/app/components/Gallery";

type Props = {
    params:{
        term: string;
    }
}


export function generateMetadata({params:{term}} : Props){
    return {
        title: `Results for ${term}`,
        description: `High quality images right from the camera's mouth - ${term}`,
    }
}



export default function SearchResults({params:{term}} : Props){
    return <Gallery topic={term}/>
}
