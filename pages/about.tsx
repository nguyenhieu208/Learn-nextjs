import { useRouter } from 'next/router';
import React from 'react';

export interface AboutProps {
}

export default function About (props: AboutProps) {
  const router = useRouter();

  console.log('About query: ', router.query);

  return (
    <div>
      About page
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {}, // will be passed to the page component as props
  }
}