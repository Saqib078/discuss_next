// import React from 'react'
// import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
// import { PostWithData } from '@/lib/query/post'

// type PostListProps = {
//   fetchData : () => Promise<PostWithData[]>
// }

// const PostList :React.FC<PostListProps> = async ({fetchData}) => {

//   const posts = await fetchData();

//   return (
//     <div>
//       {
//         posts.map((post)=>(
//             <Card key={post.id}>
//                 <CardHeader>
//                     <CardTitle>{post.title}</CardTitle>
//                     <CardDescription>
//                         <h1>by {post.user.name}</h1>
//                         <h1>{post._count.comments} comments</h1>
//                     </CardDescription>
//                 </CardHeader>
//             </Card>
//         ))
//       }
//     </div>
//   )
// }

// export default PostList


import React from 'react'
import Link from 'next/link'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { PostWithData } from '@/lib/query/post'

type PostListProps = {
  fetchData: () => Promise<PostWithData[]>
}

const PostList: React.FC<PostListProps> = async ({ fetchData }) => {
  const posts = await fetchData()

  return (
    <div>
      {posts.map((post) => (
        <Link href={`/topics/${post.topic.slug}/posts/${post.id}`} key={post.id}>
          <Card className="mb-4 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-[18px] p-0 text-gray-800 font-semibold">{post.title}</CardTitle>
              <div className="flex justify-between px-2">
                <CardDescription className="text-[14px] p-0 text-gray-600">
                  <p>by {post.user?.name || "Unknown"}</p>
                  <p>{post._count.comments} comments</p>
                </CardDescription>
              </div>

            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  )
}

export default PostList


