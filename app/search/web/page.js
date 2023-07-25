import Link from 'next/link';
import WebSearchResults from '@/components/webSearchResults';

export default async function WebSearchPage({ searchParams }) {
    const startIndex = searchParams.start || '1';

    const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.SEARCH_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}}&start=${startIndex}`
    )

    if (!response.ok) {
        console.log(response);
        throw new Error('Something went wrong with your search.');
    }

    const data = await response.json();
    const results = data.items;

    return (
        <div className="pg pg-web">
            {!results ? (
                <div className="pg-error">
                    <h1>No results found</h1>
                    <p>Try searching for something else or go back to the homepage.</p>
                    <Link href="/">Home</Link>
                </div>
            ) : (
                <WebSearchResults results={data} />
            )}
        </div>
    )
}