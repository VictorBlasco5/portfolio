export default function Footer() {
  return (
    <footer style={{ background: '#eee', textAlign: 'center', padding: '1rem', marginTop: '2rem' }}>
      © {new Date().getFullYear()} Victor - Todos los derechos reservados
    </footer>
  );
}
