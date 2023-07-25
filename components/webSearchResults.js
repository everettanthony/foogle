import Link from 'next/link';
import Parser from 'html-react-parser';

export default function WebSearchResults({ results }) {
  return (
    <div className="results">
      <div className="results-info">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </div>
      {results.items?.map((result) => (
        <div className="results-item" key={result.cacheId}>
          <Link href={result.link} className="results-link">
            <span className="results-url">{result.link}</span>
            <span className="results-title">{result.title}</span>
          </Link>
          <div className="results-snippet">
            {Parser(result.htmlSnippet)}
          </div>
        </div>
      ))}
    </div>
  )
}
