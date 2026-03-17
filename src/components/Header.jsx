// NavLink vai deixar as opções de navegação mais fáceis de visualizar
import { NavLink } from "react-router"
import { Dog } from 'lucide-react';

function linkClass({isActive}) {
    return isActive ? "border-b-2 border-red-500" : "text-blue-500 hover:text-yellow-500"
}

function Header() {
    return (
        <header className="bg-gray-800 text-gray-400 py-6 text-center text-sm space-x-2">
            <h1>
                <Dog className="inline size-8 fill-amber-50 stroke-red-400 stroke-1"/>    
                MyApp
                <Dog className="inline size-8 fill-amber-50 stroke-red-400 stroke-1"/>    
            </h1>

            <NavLink to="/" className={linkClass}>Início</NavLink>
            <NavLink to="/sobre" className={linkClass}>Sobre</NavLink>
            <NavLink to="/contato" className={linkClass}>Contato</NavLink>
        </header>
    )
}

export default Header