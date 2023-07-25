import Skeleton from '@mui/material/Skeleton';

export default function loading() {
    return (
        <div className="pg pg-web">
            <div className="results">
                <div className="results-item">
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                </div>
                <div className="results-item">
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                    <Skeleton variant="rounded" width={210} height={60} />
                </div>
                <div className="results-item">
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                    <Skeleton variant="rounded" width={210} height={60} />
                </div>
                <div className="results-item">
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                    <Skeleton variant="rounded" width={210} height={60} />
                </div>
            </div>
        </div>
    )
}