import { Client } from '@notionhq/client';
export async function fetchNotion({ token, listingsDb, projectsDb }:{ token?:string; listingsDb?:string; projectsDb?:string; }){
  if(!token || !listingsDb || !projectsDb) return { listings:[], projects:[] };
  const notion=new Client({ auth: token });
  async function read(dbId:string){ const pages=await notion.databases.query({ database_id: dbId }); return pages.results; }
  const [l,p]=await Promise.all([read(listingsDb), read(projectsDb)]);
  const listings=l.map((x:any)=>({
    _id:x.id, title:x.properties?.Title?.title?.[0]?.plain_text||'Listing', location:x.properties?.Location?.rich_text?.[0]?.plain_text||'',
    priceAED:Number(x.properties?.PriceAED?.number||0), beds:Number(x.properties?.Beds?.number||0), baths:Number(x.properties?.Baths?.number||0),
    area:Number(x.properties?.Area?.number||0), images:[], isTop:Boolean(x.properties?.IsTop?.checkbox||false),
  }));
  const projects=p.map((x:any)=>({
    _id:x.id, name:x.properties?.Name?.title?.[0]?.plain_text||'Project', developer:x.properties?.Developer?.rich_text?.[0]?.plain_text||'',
    location:x.properties?.Location?.rich_text?.[0]?.plain_text||'', handover:x.properties?.Handover?.rich_text?.[0]?.plain_text||'', images:[], isLatest:Boolean(x.properties?.IsLatest?.checkbox||false),
  }));
  return { listings, projects };
}
