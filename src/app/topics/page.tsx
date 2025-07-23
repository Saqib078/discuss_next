// app/topics/page.tsx

import TopicList from "@/components/topics/TopicList";
import { fetchAllTopics } from "@/lib/query/topics";

export default function TopicsPage() {
  return (
    <main className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">All Topics</h1>
      <TopicList fetchData={fetchAllTopics} />
    </main>
  )
}
