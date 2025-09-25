export default async function({params} : {params : Promise<{slug: string[]}>}){
  const {slug} = await params;
  console.log(slug)
    return (
        <>
        <h1>Docs</h1>
        </>
    )
}