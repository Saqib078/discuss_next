// import { Button } from "@/components/ui/button";
// import { signIn } from './actions/sign-in';
// import { signOut } from './actions/sign-out';
// import { auth } from "@/auth";

import TopicCreate from "@/components/topics/TopicCreate";
import TopicList from "@/components/topics/TopicList";
import { fetchTopTopics } from "@/lib/query/topics";
import Link from "next/link";


export default async function Home() {

  // const session = await auth();

  return (
    <>

      <div className="flex justify-between items-center px-8 p-4">
        <div><p className="text-black text-[28px] font-semibold" style={{ fontFamily: '"Intel One Mono", sans-serif' }}>Topics</p></div>
        <div className="">
          <TopicCreate />
        </div>
      </div>
      <div className="m-4 p-4 pb-2 border rounded-[28px] bg-gray-100">
        <div>
          <TopicList fetchData={fetchTopTopics} />
        </div>
        <Link href="/topics"><div><p className="text-right px-4 text-black text-[18px] font-semibold cursor-pointer hover:text-gray-500">..More</p></div></Link>
      </div>


      {/* <PostList fetchData={fetchTopPosts} /> */}
    </>
  );
}
