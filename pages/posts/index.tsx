import { GetStaticProps, GetStaticPropsContext } from 'next';
import React from 'react';

export interface PostListPageProps {
  posts: any[]
}

export default function PostListPage ({posts}: PostListPageProps) {
  return (
    <div>
      <h1>Post List page</h1>

      <ul>
        {posts.map(post => <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>
  );
}

// Hàm bên dưới chỉ chạy bên phía server, phía client sẽ không chạy
export const getStaticProps: GetStaticProps<PostListPageProps> = async (context: GetStaticPropsContext) => {
  // server side
  // builde-time 

  console.log('static prop');
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  console.log(data);

  return {
    props: {
      posts: data.map((item: any) => ({ id: item.id, title: item.title }))
    }
  }
}

// export const getServerSideProps = () => {
//   return {}
// }