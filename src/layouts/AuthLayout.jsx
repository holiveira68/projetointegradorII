import { Outlet } from "react-router";

export default function AuthLayout() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-neutral-50">
             <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
                   <Outlet /> 
                   {/* Login e senha */}
             </div>
        </div>
    )
}