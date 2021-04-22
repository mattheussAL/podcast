import Image from 'next/image';
import { useRouter } from 'next/router';
import ptBR from 'date-fns/locale/pt-BR';
import { api } from '../../services/api';
import styled from './episode.module.scss';
import { format, parseISO } from 'date-fns';
import { GetStaticProps, GetStaticPaths } from 'next';
import { converDurationToTimeString } from '../../utils/converDurationToTimeString';
import Link from 'next/link';

type Episode = {
 id: string;
 url: string;
 title: string;
 members: string;
 duration: number;
 thumbnail: string;
 publishedAt: string;
 description: string;
 durationAsString: string;
}

type EpisodeProps = { episode: Episode }


function Episodes( { episode } : EpisodeProps) {
 return (
  <div className={styled.episode}>
   <div className={styled.thumbnailContainer}>
    
    <Link href="/">
     <button type="button">
      <img src="/arrow-left.svg" alt="Voltar"/>
     </button>
    </Link>

    <Image
     width={720}
     height={238}
     src={episode.thumbnail}
     objectFit="cover"
    />

    <button type="button">
     <img src="/play.svg" alt="tocar episódio"/>
    </button>
   </div>

   <header>
    <h1>{episode.title}</h1>
    <span>{episode.members}</span>
    <span>{episode.publishedAt}</span>
    <span>{episode.durationAsString}</span>
   </header>

   <div 
    className={styled.description} 
    dangerouslySetInnerHTML={{ __html: episode.description}}
   />
  </div>
 )
}

export const getStaticPaths: GetStaticPaths = async () => {
 return {
  paths: [],
  fallback: 'blocking'
 }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
 const { slug } = ctx.params;
 const { data } = await api.get(`episodes/${slug}`);

 const episode = { 
  id: data.id,
  title: data.title,
  url: data.file.url,
  members: data.members,
  thumbnail: data.thumbnail,
  description: data.description,
  duration: Number(data.file.duration),
  durationAsString: converDurationToTimeString(Number(data.file.duration)),
  publishedAt: format(parseISO(data.published_at), 'd MMM yy', { locale: ptBR }),
 }

 return {
  props: { episode },
  revalidate: 60 * 60 * 24 
 }
}

export default Episodes;