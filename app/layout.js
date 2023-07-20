import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';
import Footer from '@/components/footer';
import CssBaseline from '@mui/material/CssBaseline';
import '../styles/styles.scss';

export const metadata = {
  title: 'Foogle',
  description: 'Fake Google Search Engine',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <CssBaseline />
      </head>
      <body>
        <div className="container">
          <main>
            {children}
          </main>
          <Footer />
        </div>
        </body>
    </html>
  )
}
