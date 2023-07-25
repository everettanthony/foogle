import SearchHeader from '@/components/searchHeader';
import '../../styles/styles.scss';

export default function SearchLayout({ children }) {
    return (
        <div>
            <SearchHeader />
            {children}
        </div>
    )
}