import { fetchCommentByPostId } from "@/lib/query/comment";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import CommentCreateForm from "./comment-create-form";

type commentShowProps = {
    postId: string;
    commentId: string;
}

const CommentShow: React.FC<commentShowProps> = async ({ postId, commentId }) => {
    const comments = await fetchCommentByPostId(postId);
    const comment = comments.findLast((c) => c.id === commentId);

    if (!comment) return null

    const children = comments.filter((c) => c.parentId === commentId);

    return (
        <div className="m-4 p-4 border rounded-lg">
            <div>
                <div className="flex items-center">
                    <Avatar>
                        <AvatarImage src={comment.user.image || ""} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div >
                        <p className="text-[14px] px-2 text-blue-500">{comment.user.name}</p> 
                        <p className="text-[18px] px-2 text-black">{comment.content}</p>
                    </div>
                </div>
                <div>
                    <CommentCreateForm postId={comment.postId} parentId={comment.id} />
                </div>
            </div>

            {children.map((comment) => (
                <CommentShow key={comment.id} postId={postId} commentId={comment.id} />
            ))}
        </div>
    )
}

export default CommentShow