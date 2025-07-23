// lib/query/topic.ts
import { prisma } from ".."

export const fetchAllTopics = async () => {
  return prisma.topic.findMany({
    select: {
      id: true,
      description: true,
      slug: true,
      _count: {
        select: {
          posts: true,
        },
      },
    },
  })
}


export const fetchTopTopics = async () => {
  return prisma.topic.findMany({
    take: 4,
    orderBy: {
      posts: {
        _count: 'desc', // posts ke count ke according descending order
      },
    },
    select: {
      id: true,
      description: true,
      slug: true,
      _count: {
        select: {
          posts: true,
        },
      },
    },
  })
}

