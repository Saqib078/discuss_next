import CommentCreateForm from '@/components/comments/comment-create-form';
import CommentList from '@/components/comments/comment-list';
import PostShow from '@/components/posts/post-show';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import React, { Suspense } from 'react'

type PostShowPageProps = {
    params: Promise<{ slug: string; postId: string }>;
}

const PostShowPage: React.FC<PostShowPageProps> = async ({ params }) => {

    const { slug, postId } = await params;

    return (
        <div>
            <Link href={`/topics/${slug}`}>
                <Button variant={"link"} className='cursor-pointer mx-4 text-[16px] capitalize'>
                    <ChevronLeft />
                    Back to {slug}
                </Button>
            </Link>
            <Suspense fallback={<p>Loading....</p>}>
                <PostShow postId={postId}/>
            </Suspense>
            <div className='px-8'><p className='text-[16px] text-semibold'>Comment</p></div>
            <CommentCreateForm postId={postId} startOpen/>
            <CommentList postId={postId}/>
        </div>
    )
}

export default PostShowPage
