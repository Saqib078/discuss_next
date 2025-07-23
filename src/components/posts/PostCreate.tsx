"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "../ui/textarea";
import { useActionState } from "react";
import { CreatePost } from "@/actions/create-posts"


type CreatePastFormProps ={
  slug:string
}

const PostCreate :React.FC<CreatePastFormProps> = ({slug}) => {
  const [formState , action] =useActionState(CreatePost.bind(null,slug) , {errors:{}} )
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="text-[18px] cursor-pointer px-8 text-gray-600">NEW POST</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form action={action}>
          <DialogHeader>
            <DialogTitle>Create a Post</DialogTitle>
            <DialogDescription>
              Write a new Post. Click save when you are
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="">
            <div className="">
              <Label htmlFor="title" className="py-2 text-[16px]">Title</Label>
              <Input id="title" name="title" />
            </div>
            {formState.errors.title && <p>{formState.errors.title}</p>}
            <div className="py-2">
              <Label className="py-2 text-[16px]">Content</Label>
              <Textarea id="content" name="content"></Textarea>
            </div>
            {formState.errors.content && <p>{formState.errors.content}</p>}
          </div>
            {formState.errors.formError && <p>{formState.errors.formError}</p>}

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" className="cursor-pointer">Cancel</Button>
            </DialogClose>
            <Button type="submit" className="cursor-pointer">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default PostCreate