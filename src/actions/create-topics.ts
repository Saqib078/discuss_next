"use server"
import { auth } from "@/auth"
import { Topic } from "@/generated/prisma"
import { prisma } from "@/lib"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { z } from "zod"

const createTopicSchema = z.object({
    name: z.string().min(3).regex(/^[a-z-]+$/, { message: "Must be lowercase letter without space" }),
    description: z.string().min(10)
})

type CreateTopicFormState = {
    errors: {
        name?: string[],
        description?: string[],
        formError?: string[]
    }
}

export const createTopics = async (prevState: CreateTopicFormState, formData: FormData): Promise<CreateTopicFormState> => {

    const result = createTopicSchema.safeParse({
        name: formData.get('name')?.toString() ?? "",
        description: formData.get('description')?.toString() ?? ""
    });


    if (!result.success) {
        return {
            errors: result.error.flatten().fieldErrors
        }
    }

    const session = await auth();

    if (!session || !session.user) {
        return {
            errors: {
                formError: ['you have to login first!']
            }
        }
    }
    let topic: Topic;
    try {
        topic = await prisma.topic.create({
            data: {
                slug: result.data.name,
                description: result.data.description
            }
        })
    }
    catch (error) {
        if (error instanceof Error) {
            return {
                errors: {
                    formError: [error.message]
                }
            }
        }
        else {
            return {
                errors: {
                    formError: ['something went wrong.']
                }
            }
        }
    }

    revalidatePath("/")
    redirect(`/topics/${topic.slug} `)
}