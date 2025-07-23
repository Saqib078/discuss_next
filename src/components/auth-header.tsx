"use client";
import { useSession } from "next-auth/react";
import { Button } from "./ui/button";
import { signIn } from "@/actions/sign-in";
import { signOut } from "@/actions/sign-out";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { LogOut } from "lucide-react";
import { Separator } from "./ui/separator";
import { Skeleton } from "@/components/ui/skeleton"



const AuthHeader = () => {

    const { data: session, status } = useSession();

    if (status === "loading") {
        return (
            <>
                <div className="flex items-center space-x-4">
                    <Skeleton className="h-12 w-12 rounded-full" />
                </div>
            </>
        )
    }

    let authContent: React.ReactNode;

    if (session?.user) {
        authContent = (
            <Popover>
                <PopoverTrigger asChild>
                    <Avatar>
                        <AvatarImage src={session.user.image || ""} alt="@shadecn" className="cursor-pointer"/>
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </PopoverTrigger>
                <PopoverContent className="mr-8">
                    <div>
                        <p>{session.user.name}</p>
                    </div>
                    <Separator className="my-2" />
                    <form action={signOut}>
                        <Button type="submit" className="cursor-pointer">
                            {""}
                            <LogOut />
                        </Button>
                    </form>
                </PopoverContent>
            </Popover>
        )
    }
    else {
        authContent = (
            <div className="flex justify-between">
                <form action={signIn}>
                    <Button variant={"outline"} className="mx-2 cursor-pointer">Sign In</Button>
                </form>
                <form action={signIn}>
                    <Button className="mx-2 cursor-pointer">Sign Up</Button>
                </form>
            </div>
        )
    }

    return authContent

}

export default AuthHeader
