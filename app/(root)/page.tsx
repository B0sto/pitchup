import SearchForm from '../../components/SearchForm'

export default async function Home({searchParams}: {
    searchParams: Promise<{query?: string}>
}) {
    const params = await searchParams
    const query = params.query; 

    return (
        <>
            <section className="w-full h-[300px] pattern pink_container">
                <h1 className="heading">Pitch Your Startup, Connect with Enterprenurs</h1>
                <p className="sub-heading !max-w-3xl">Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions</p>

                <SearchForm query={query}/>
            </section>
        </>
    )
}