import Skeleton from '@mui/material/Skeleton';

export default function loading() {
    return (
        <div className="pg">
            <div className="images">
                <div className="images-grid">
                    <Skeleton variant="rectangular" width={400} height={240} className="images-item" />
                    <Skeleton variant="rectangular" width={400} height={240} className="images-item" />
                    <Skeleton variant="rectangular" width={400} height={240} className="images-item" />
                    <Skeleton variant="rectangular" width={400} height={240} className="images-item" />
                    <Skeleton variant="rectangular" width={400} height={240} className="images-item" />
                    <Skeleton variant="rectangular" width={400} height={240} className="images-item" />
                    <Skeleton variant="rectangular" width={400} height={240} className="images-item" />
                    <Skeleton variant="rectangular" width={400} height={240} className="images-item" />
                    <Skeleton variant="rectangular" width={400} height={240} className="images-item" />
                    <Skeleton variant="rectangular" width={400} height={240} className="images-item" />
                </div>
            </div>
        </div>
    )
}