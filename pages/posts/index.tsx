import { GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';
import React from 'react';

export interface PostListPageProps {
  posts: any[]
}

export default function PostListPage ({posts}: PostListPageProps) {
  return (
    <div>
      <h1>Post List page</h1>

      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Hàm bên dưới chỉ chạy bên phía server, phía client sẽ không chạy
export const getStaticProps: GetStaticProps<PostListPageProps> = async (context: GetStaticPropsContext) => {
  // server side
  // builde-time 

  // console.log('static prop');
  const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1');
  const data = await response.json();

  // console.log(data.slice(1, 3));

  return {
    props: {
      posts: data.data.map((item: any) => ({ id: item.id, title: item.title }))
    }
  }
}

// export const getServerSideProps = () => {
//   return {}
// }