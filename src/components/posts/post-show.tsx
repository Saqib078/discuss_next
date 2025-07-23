import { prisma } from "@/lib";
import { notFound } from "next/navigation";

type PostShowProps = {
  postId: string;
};

const PostShow: React.FC<PostShowProps> = async ({ postId }) => {
  await new Promise((res) => setTimeout(res, 3000));

  const post = await prisma.post.findFirst({
    where: {
      id: postId,
    },
  });

  if (!post) notFound();

  return (
    <div className="px-6 py-4 border m-6 rounded-lg bg-gray-100">
      <div className='px-4 flex items-center '>
        <p className='text-[18px] text-black font-semibold'> Title : </p>
        <p className='text-[24px] text-gray-600 font-semibold px-2 capitalize'>  {post.title} </p>
      </div>
      <div className='px-4 flex items-center'>
        <p className='text-[16px] text-black font-semibold'> Content : </p>
        <p className='text-[18px] text-gray-400 font-semibold px-2 capitalize'>{post.content} </p>
      </div>
    </div>
  );
};

export default PostShow;
