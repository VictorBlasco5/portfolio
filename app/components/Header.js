import Link from 'next/link';
import '../../styles/header.css';


export default function Header() {
    return (
        <header className='navbar'>
            <nav>
                <ul className='navbar-link'>
                    {['/', '/about', '/projects', '/contact'].map((href, i) => {
                        const labels = ['Home', 'Sobre mí', 'Proyectos', 'Contacto'];
                        return (
                            <li  key={href}>
                                <Link className='links' href={href}>
                                    {labels[i]}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
}
