import ImageSearchResults from '@/components/imageSearchResults';

export default async function ImageSearchPage({ searchParams }) {
    const startIndex = searchParams.start || '1';

    const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.SEARCH_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}}&searchType=image&start=${startIndex}`
    )

    if (!response.ok) {
        console.log(response);
        throw new Error('Something went wrong with your search.');
    }

    const data = await response.json();
    const results = data.items;

    return (
        <div className="pg">
            {!results ? (
                <div className="pg-error">
                    <h1>No images found</h1>
                    <p>Try searching for something else or go back to the homepage.</p>
                    <Link href="/">Home</Link>
                </div>
            ) : (
                <ImageSearchResults results={data} />
            )}
        </div>
    )
}