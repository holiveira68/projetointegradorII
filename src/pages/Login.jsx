export default function Login() {
    return (
        <>
        <h1 className="text-4x1 font-bold mb-6 font-archivo">Login</h1>
        <form className="flex flex-col gap-4">
            <input type="email" placeholder="E-mail" className="border rounded-x1 px-4 py-6"/>
            <input type="password" placeholder="Senha" className="border rounded-x1 px-4 py-6"/>
            <button type="submit" className="bg-blue-700 text-white rounded">Login</button>
        </form>
        </>
    )
}