import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <div>
                <h1 className="text-cyan-600 font-black text-6xl">
                    Inicia Sesión y Administra tus{""}<span className="text-green-600">Pacientes</span>
                </h1>
            </div>

            <div className="mt-20 md:5 shadow-lg px-5 py-10 rounded-xl bg-white">
                <form>
                    <div className="my-5">
                        <label
                            className="uppercase text-gray-600 block text-xl font-bold"
                        >Email</label>

                        <input
                            type="email"
                            className="w-full border p-3 mt-3 bg-gray-50 rounded-xl"
                            placeholder="Email de Registro"
                        />
                    </div>

                    <div className="my-5">
                        <label
                            className="uppercase text-gray-600 block text-xl font-bold"
                        >Password</label>

                        <input
                            type="password"
                            className="w-full border p-3 mt-3 bg-gray-50 rounded-xl"
                            placeholder="Password"
                        />
                    </div>

                    <div className="flex justify-center">
                        <input
                            type="submit"
                            value="Iniciar Sesión"
                            className="bg-cyan-700 rounded-xl w-full py-3 px-10 text-white mt-5 uppercase font-bold hover:cursor-pointer hover:bg-cyan-900 md:w-auto"
                        />
                    </div>

                </form>

                <nav className="mt-10 lg:flex lg:justify-between">
                    <Link 
                        to={"/registrar"}
                        className="block text-center my-5 text-gray-500"
                    >¿No tienes una cuenta? Registrate!</Link>
                    <Link 
                        to={"/reset-password"}
                        className="block text-center my-5 text-gray-500"
                    >Olvidé mi Password!</Link>
                </nav>

            </div>

        </>
    );
};
export default Login;