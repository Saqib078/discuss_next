"use client";

import React , { useActionState, useState } from "react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Loader2 } from "lucide-react";
import { createComment } from "@/actions/create-comment";



type CommentCreateFormProps = {
    postId: string;
    parentId?: string;
    startOpen?: boolean;
};

const CommentCreateForm: React.FC<CommentCreateFormProps> = ({ postId, parentId, startOpen }) => {
    const [open, setOpen] = useState(startOpen)
    const [formState, action, isPending] = useActionState(
        createComment.bind(null, { postId, parentId }),
        { errors: {} }
    );

    return (
        <div className="m-4 mx-8 px-6 py-4 border rounded-lg">
            <Button onClick={()=>setOpen(!open)} className="cursor-pointer">
                Reply
            </Button>
            {open && (
                <form action={action}>
                    <Textarea name="content" placeholder="write a comment..." className="py-2 my-2"/>
                    {
                        formState.errors.content && (
                            <p>{formState.errors.content}</p>
                        )
                    }

                    <Button disabled={isPending}  variant={"secondary"} className="cursor-pointer hover:bg-gray-300 ">
                        {isPending ? (
                            <>
                                <Loader2 /> Please wait..
                            </>
                        ):(
                            "Save"
                        )
                    }
                    </Button>
                </form>
            )}
        </div>
    )
}

export default CommentCreateForm