
'use client'
 
import { useParams } from 'next/navigation';
import { SearchResult } from '../../../components/SearchResult/SearchResult';


export default function Search() {
  const params = useParams<{ slug: string}>()
 
  return (
    <SearchResult query={params.slug} />
  );
}
