import SearchForm from '../../components/SearchForm'
import StartupCard from "@/components/StartupCard";

export default async function Home({searchParams}: {
    searchParams: Promise<{ query?: string }>
}) {
    const params = await searchParams
    const query = params.query;

    const posts = [{
        _createdAt: new Date(),
        views: 55,
        author: {_id: 1, name: "Bosto"},
        _id: 1,
        description: "This is a description",
        image: "https://mecaluxcom.cdnwm.com/img/logistics-articles/advancements-humanoid-robots-stability.1.14.jpg?imwidth=1024",
        category: "random",
        title: "Random Image"
    }]

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
                        posts.map((post: any, index: number) => (
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