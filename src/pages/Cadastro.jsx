export default function Cadastro() {
    return (
        <>
        <h1 className="text-4x1 font-bold mb-6 font-datatype">Login</h1>
        <form className="flex flex-col gap-4">
            <input type="name" placeholder="Nome : " className="border rounded-x1 px-4 py-6"/>
            <input type="address" placeholder="Endereço : " className="border rounded-x1 px-4 py-6"/>
            <input type="city" placeholder="Cidade : " className="border rounded-x1 px-4 py-6"/>
            <input type="state" placeholder="UF : " className="border rounded-x1 px-4 py-6"/>
            <input type="phone" placeholder="Telefone : " className="border rounded-x1 px-4 py-6"/>
            <button type="submit" className="bg-blue-700 text-white rounded">Login</button>
        </form>
        </>
    )
}