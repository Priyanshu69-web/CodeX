import { useNavigate } from "react-router-dom";

const generateId = (length = 6) => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let id = "";
    for (let i = 0; i < length; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
};

export default function HomePage() {
    const navigate = useNavigate();

    const createSession = () => {
        const roomId = generateId(6); // generate short ID
        navigate(`/${roomId}`);
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-900 text-white">
            {/* Navbar */}
            <nav className="w-full bg-gray-900 fixed top-0 shadow-md">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">
                    <h1 className="text-2xl font-bold text-pink-500">CodeX</h1>
                </div>
            </nav>

            {/* Main Content */}
            <div className="flex flex-col items-center justify-center flex-grow px-4">
                {/* Headline */}
                <h2 className="text-3xl font-semibold text-center mb-2">
                    Share Code in Real-time with Developers
                </h2>

                {/* Description */}
                <p className="text-gray-300 mb-8 text-center max-w-xl">
                    An online code editor for collaboration, interviews, troubleshooting,
                    teaching, and more...
                </p>

                {/* Button */}
                <button
                    onClick={createSession}
                    className="px-6 py-3 bg-pink-500 hover:bg-pink-600 cursor-pointer rounded-lg text-lg font-semibold transition"
                >
                    Start Session
                </button>

                {/* Small text */}
                <p className="text-gray-400 mt-6">Share code for free.</p>
            </div>
        </div>
    );
}
