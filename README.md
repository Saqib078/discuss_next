This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Discuss

Discuss is a full-stack discussion app built using [Next.js](https://nextjs.org), [Prisma](https://www.prisma.io), and [NextAuth.js](https://next-auth.js.org). Users can log in with GitHub, create topics, post content, and add comments to foster conversation.

## Features

- GitHub login/logout with NextAuth.js
- Topic creation & listing
- Posting under topics
- Comments on posts
- Prisma ORM for database access
- Font optimization using next/font (Geist)

## Getting Started

### 1. Clone the repository

git clone https://github.com/your-username/discuss.git
cd discuss

### 2. Install dependencies

npm install
# or
yarn
# or
pnpm install

### 3. Set environment variables

Create a `.env` file in the root:

DATABASE_URL="your_database_url"
GITHUB_ID="your_github_client_id"
GITHUB_SECRET="your_github_client_secret"
NEXTAUTH_URL="http://localhost:3000"

### 4. Setup the Database with Prisma

npx prisma migrate dev

### 5. Start the development server

npm run dev
# or
yarn dev
# or
pnpm dev

Visit http://localhost:3000 in your browser.

## Prisma Schema Example

model User {
  id       String   @id @default(uuid())
  name     String?
  email    String?  @unique
  posts    Post[]
  comments Comment[]
}

model Topic {
  id        String   @id @default(uuid())
  title     String
  posts     Post[]
  createdAt DateTime @default(now())
}

model Post {
  id        String   @id @default(uuid())
  content   String
  topic     Topic    @relation(fields: [topicId], references: [id])
  topicId   String
  user      User?    @relation(fields: [userId], references: [id])
  userId    String?
  comments  Comment[]
  createdAt DateTime @default(now())
}

model Comment {
  id        String   @id @default(uuid())
  content   String
  post      Post     @relation(fields: [postId], references: [id])
  postId    String
  user      User?    @relation(fields: [userId], references: [id])
  userId    String?
  createdAt DateTime @default(now())
}

## Deployment

Deploy easily on [Vercel](https://vercel.com).

## Resources

- Next.js: https://nextjs.org/docs
- Prisma: https://www.prisma.io/docs
- NextAuth.js: https://next-auth.js.org
- Vercel: https://vercel.com/docs

## License

This project is licensed under the MIT License.
