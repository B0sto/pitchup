import { client } from '@/sanity/lib/client';
import SearchForm from '../../components/SearchForm'
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import { STARTUS_QUERY } from '@/lib/queries';

export default async function Home({searchParams}: {
    searchParams: Promise<{ query?: string }>
}) {
    const params = await searchParams
    const query = params.query;

    const posts = await client.fetch(STARTUS_QUERY)

    console.log(JSON.stringify(posts,null,2));

    return (
        <>
            <section className="w-full h-[300px] pattern pink_container">
                <h1 className="heading">Pitch Your Startup, Connect with Enterprenurs</h1>
                <p className="sub-heading !max-w-3xl">Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
                    Competitions</p>

                <SearchForm query={query}/>
            </section>

            <section className="section_container">
                <p className="text-30-semibold">
                    {query ? `Search results for "${query}"` : 'All Startups'}
                </p>

                <ul className="mt-7 card_grid">
                    {posts.length > 0 ? (
                        posts.map((post: StartupTypeCard) => (
                            <StartupCard key={post?._id} post={post}/>
                        ))
                    ) : (
                        <p className="no-result"></p>
                    )}
                </ul>
            </section>
        </>
    )
}