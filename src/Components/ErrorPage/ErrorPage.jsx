import { Link } from "react-router-dom";



const ErrorPage = () => {
    return (
        <div className="text-center my-16">
            <h2 className="text-3xl text-white font-bold mb-2">Oops!!!</h2>
            <Link className="border px-2 " to="/">Go Back</Link>
        </div>
    );
};

export default ErrorPage;