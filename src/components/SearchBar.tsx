"use client"

import { useSearchStore } from "@/store/searchStore"
import { Search } from "lucide-react"
import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchBar: React.FC = () =>{
    const {loading, error, search} = useSearchStore();
    const [lastQuery, setLastQuery] = useState("");
    const [searchValue, setSearchValue] = useState("");
    const router = useRouter()

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event)=> {
        event.preventDefault()
        if(searchValue === lastQuery && searchValue != "") return;
        
        const params = new URLSearchParams({
            search: searchValue.trim(),
            page: "0"
        })

        setLastQuery(searchValue.trim());

        router.push(`/professionals?${params.toString()}`)
    }

     const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event)=> {
            event.preventDefault();
            setSearchValue(event.target.value);
    }

    return (
        <form 
            className="flex flex-col items-center w-full max-w-md gap-4"
            onSubmit={handleSubmit}
            >
            <div className="flex items-center w-full rounded-full bg-white/90 shadow-md backdrop-blur-sm overflow-hidden">
                <Search className="text-gray-500 ml-4" />
                <input
                    type="search" name="search"
                    placeholder="Buscar profesional o especialidad..."
                    onChange={handleChange}
                    className="flex-1 px-4 py-2 bg-transparent focus:outline-none text-gray-800 placeholder-gray-500"
                />
            </div>
            <button 
                className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 transition text-white font-medium rounded-full shadow-md"
                type='submit'
                >
                Buscar
            </button>
        </form>
    )
}

export default SearchBar