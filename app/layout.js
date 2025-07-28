import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, padding: 0, fontFamily: 'Arial, sans-serif' }}>
        <Header />
        <main style={{ padding: '2rem' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
