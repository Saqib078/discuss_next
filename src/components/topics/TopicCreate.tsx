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
import { createTopics } from "@/actions/create-topics";
import { useActionState } from "react";

const TopicCreate = () => {
  const [formState , action] =useActionState(createTopics , {errors:{}} )
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="text-[18px] cursor-pointer px-8 text-gray-600">NEW TOPIC</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form action={action}>
          <DialogHeader>
            <DialogTitle>Create a Topic</DialogTitle>
            <DialogDescription>
              Write a new topic to start discussion. Click save when you're
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="">
            <div className="">
              <Label htmlFor="name" className="py-2 text-[16px]">Name</Label>
              <Input id="name" name="name" />
            </div>
            {formState.errors.name && <p>{formState.errors.name}</p>}
            <div className="py-2">
              <Label  className="py-2 text-[16px]">Description</Label>
              <Textarea id="description" name="description"></Textarea>
            </div>
            {formState.errors.description && <p>{formState.errors.description}</p>}
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

export default TopicCreate