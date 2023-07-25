import Link from 'next/link';
import Image from 'next/image';

export default function ImageSearchResults({ results }) {
  return (
    <div className="images">
      <div className="images-grid">
        {results.items?.map((result) => (
          <div className="images-item" key={result.cacheId}>
            <Link href={result.link} className="images-link">
              <img
                src={result.link}
                alt={result.title}
                title={result.title}
                className="images-img"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
