'use client'
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export  default function Search(){
    const [search, setSearch] = useState('');
    const router = useRouter();

    const handleSubmit = async (e:any   ) => {
        e.preventDefault();
        router.push(`/results/${search}`);
        setSearch(''); 

    }


    return(
        <form className="flex justify-center md:justify-between" onSubmit={handleSubmit}>
            <div className="bg-[#fff] p-2 w-[360px]  text-xl rounded-xl text-[#000] flex justify-between"
            >
                <input 
                type="text"
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)} 
                value={search}
                className="w-[220px] focus:outline-none"
                />
                <button onClick={handleSubmit} className="z-10 bg-red-300 p-1 px-4 rounded-md" >Go</button>

            </div>
           
        </form>
    )
}