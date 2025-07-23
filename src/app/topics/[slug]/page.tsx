import PostList from '@/components/posts/post-list'
import PostCreate from '@/components/posts/PostCreate'
import { fetchPostByTopicSlug } from '@/lib/query/post'
import React from 'react'

type TopicShowPageProps = {
  params: Promise<{ slug: string }>
}

const TopicshowPage: React.FC<TopicShowPageProps> = async ({ params }) => {

  const { slug } = await params

  return (
    <div>
      <div className='flex justify-between items-center p-2 px-8'>
        <div className='px-4 flex items-center py-4'>
          <p className='text-[18px] text-black font-semibold'> Topic :  </p>
          <p className='text-[20px] text-gray-500 font-semibold px-2 capitalize'> {slug} </p>
        </div>
        <div>
          <PostCreate slug={slug} />
        </div>
      </div>
      <div className="m-4 p-4 pb-2 border rounded-[28px] bg-gray-100">
        <div>
          <PostList fetchData={() => fetchPostByTopicSlug(slug)} />
        </div>
      </div>
    </div>
  )
}

export default TopicshowPage
