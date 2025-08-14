import 'server-only';
import { createClient } from '@sanity/client';
import groq from 'groq';
import { fetchNotion } from './notion';
const provider = process.env.CMS_PROVIDER || 'sanity';
const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || 'production';
function sanityClient(){
  if(!projectId) return null;
  return createClient({ projectId, dataset, apiVersion: process.env.SANITY_API_VERSION || '2025-01-01', useCdn: (process.env.SANITY_USE_CDN || 'true')==='true', token: process.env.SANITY_TOKEN });
}
export type Listing = { _id:string; title:string; location:string; priceAED:number; beds:number; baths:number; area:number; images:string[]; isTop?:boolean; developer?:string; lat?:number; lng?:number; };
export type Project = { _id:string; name:string; developer:string; location:string; handover:string; images:string[]; isLatest?:boolean; };
const LISTINGS_GROQ = groq`*[_type=="listing"] | order(_createdAt desc){ _id,title,location,priceAED,beds,baths,area,"images":images[].asset->url,isTop,developer,lat,lng }`;
const PROJECTS_GROQ = groq`*[_type=="project"] | order(_createdAt desc){ _id,name,developer,location,handover,"images":images[].asset->url,isLatest }`;
export async function getListings():Promise<Listing[]>{ if(provider==='sanity'){ const sc=sanityClient(); if(sc) return await sc.fetch(LISTINGS_GROQ); }
  if(provider==='notion'){ const { listings } = await fetchNotion({ token:process.env.NOTION_TOKEN, listingsDb:process.env.NOTION_DB_ID_LISTINGS, projectsDb:process.env.NOTION_DB_ID_PROJECTS }); if(listings?.length) return listings as any; }
  const { featured, apartments } = await import('@/data/properties'); const mock=[...featured,...apartments].map((p:any,i:number)=>({
    _id:p.id, title:p.title, location:p.location, priceAED:Number((p.priceAED||'AED 0').replace(/[^\d]/g,''))||0, beds:p.beds, baths:p.baths, area:Number(p.area), images:[p.image], isTop:i<3, developer: p.location?.includes('Downtown')?'Emaar': p.location?.includes('Palm')?'Nakheel':'—'
  })); return mock; }
export async function getProjects():Promise<Project[]>{ if(provider==='sanity'){ const sc=sanityClient(); if(sc) return await sc.fetch(PROJECTS_GROQ); }
  if(provider==='notion'){ const { projects } = await fetchNotion({ token:process.env.NOTION_TOKEN, listingsDb:process.env.NOTION_DB_ID_LISTINGS, projectsDb:process.env.NOTION_DB_ID_PROJECTS }); if(projects?.length) return projects as any; }
  return [{ _id:'pr1', name:'Emaar Beachfront – Bayview', developer:'Emaar', location:'Dubai Harbour', handover:'Q2 2028', images:['https://images.unsplash.com/photo-1505692794403-34d4982f88aa?q=80&w=1600&auto=format&fit=crop'], isLatest:true }]; }
