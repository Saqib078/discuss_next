import { Suspense } from "react";
import AuthHeader from "./auth-header";
import SearchInput from "./search-input";
import Link from "next/link";

const Header = () => {
    return (
        <div className="flex justify-between items-center p-2 px-8">
            <div className="">
                <Link href={'/'}><p className="text-black text-[32px] font-semibold cursor-pointer"  style={{ fontFamily: '"Bitcount Prop Single", sans-serif' }}> Discuss</p></Link>
            </div>
            <div className="w-[30%]">
                <Suspense>
                    <SearchInput />
                </Suspense>
            </div>
            <div>
                <AuthHeader />
            </div>
        </div>
    )
}

export default Header