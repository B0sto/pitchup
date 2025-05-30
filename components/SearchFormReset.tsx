"use client"

import { X } from "lucide-react";
import { useRouter } from "next/navigation";

const SearchFormReset = () => {
    const router = useRouter();

    const reset = () => {
        const form = document.querySelector('.search-form') as HTMLFormElement;

        if (form) form.reset();
        router.push('/');

    }

    return (
        <button type="reset" onClick={reset} className="search-btn text-white cursor-pointer">
            <X className="size-5"/>
        </button>
    )
}

export default SearchFormReset