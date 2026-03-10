import { Link } from "react-router"

function Header() {
   return (
      <header className="bg-gray-800 text-gray-400 py-6 text-center text-sm">
         <div className="logo">
            <a href="/">MinhaLogo</a>
         </div>

         <nav className="nav-links">
            <h1>MyApp</h1>
            <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link to="/sobre" className="text-gray-600 hover:text-blue-600">Sobre</Link>
            <Link to="/contato" className="text-gray-600 hover:text-blue-600">Contato</Link>
         </nav>

         
      </header>
   )
}

export default Header