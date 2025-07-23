import PostList from "@/components/posts/post-list";
import { fetchPostBySearch } from "@/lib/query/post";


type SearchPageProps = {
    searchParams: Promise<{ term: string }>;
}

const SearchPage: React.FC<SearchPageProps> = async ({ searchParams }) => {
    const term = (await searchParams).term;

    return (
        <div className="px-4 mx-4">
            <div className="flex">
                <p className="text-[20px] px-2 text-black">Search result for</p>
                <p className="text-[20px] text-blue-700 bg-gray-300"> {term}</p>
            </div>
            <div className="border rounded-lg bg-gray-50 p-4 my-4">
                <PostList fetchData={() => fetchPostBySearch(term)} />
            </div>

        </div>
    )
}

export default SearchPage