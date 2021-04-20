import React, { useState, useEffect } from 'react';

interface Props {
  episodes: []
}

function Home(props: Props) {
  console.log(props.episodes)

  return (
    <div>Hello ! I'm index page</div>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3333/episodes');
  const data = await res.json();

  return {
    props: { episodes: data },
    revalidate: 60 * 60 * 8,
  }
}


export default Home;