"use client"
import Link from "next/link"

const Login = () => {

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            const form = new FormData(event.target);
            const formData = Object.fromEntries(form.entries());
    
            const response = await fetch("api/login", {
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const result = await response.json();

        } catch (error) {
            console.error("An error occurred:", error);
        }
       
    }
    
  return (
    <div className="bg-slate-200 w-screen h-screen grid place-items-center">
        <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 w-96 grid place-items-center gap-4">
            <h3 className="text-2xl font-semibold">Login</h3>
                <label className="grid w-full gap-2"
                 htmlFor="email">Email
                    <input className="bg-gray-100 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500"
                     type="email"
                     name="email" 
                     autoComplete="username"
                     required 
                    />
                </label>
                <label className=" grid w-full gap-2"
                htmlFor="password">Password
                    <input className="bg-gray-100 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500"
                     type="password" 
                     name="password" 
                     autoComplete="current-password"
                     required 
                    />
                </label>
            <button className="bg-neutral-950 text-white py-3 mt-4 w-full rounded-xl" 
                    type="submit">
                    Login
            </button>
             <Link className="mr-auto text-sky-600 underline" href="/register">Create an account</Link>
        </form>
    </div>
  )
}

export default Login