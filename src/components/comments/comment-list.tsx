import { fetchCommentByPostId } from "@/lib/query/comment"
import CommentShow from "./comment-show";



type CommentListProps ={
    postId:string
}

const CommentList : React.FC<CommentListProps> = async ({postId}) =>{
    const comments = await fetchCommentByPostId(postId);

    const toplevelComments = comments.filter((comment) => comment.parentId == null);

    return (
        <div className="border rounded p-4 mx-8 bg-gray-50">
            {
                toplevelComments.map((comment)=>(
                    <CommentShow key={comment.id} postId = {comment.postId} commentId={comment.id}/>
                ))
            }
        </div>
    )
}

export default CommentList