// components/discuss/TopicList.tsx
import React from "react"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card"

type Topic = {
  id: string
  description: string
  slug: string
  _count: {
    posts: number
  }
}

type Props = {
  fetchData: () => Promise<Topic[]>
}

const TopicList = async ({ fetchData }: Props) => {
  const topics = await fetchData()

  return (
    <div>
      {topics.map((topic) => (
        <Link key={topic.id} href={`/topics/${topic.slug}`}>
          <Card className="mb-4 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-[18px] p-0 text-gray-800 font-semibold">{topic.slug}</CardTitle>
              <div className="flex justify-between px-2">
                <CardTitle className="text-[14px] p-0 text-gray-600">{topic.description}</CardTitle>
                <CardDescription>{topic._count.posts} posts</CardDescription>
              </div>

            </CardHeader>

          </Card>
        </Link>
      ))}
    </div>
  )
}

export default TopicList
