import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import Editor from "@monaco-editor/react";

const socket = io("https://codex-backend-hsrs.onrender.com");

function CodeEditor({ roomId }) {
    const [code, setCode] = useState("");

    useEffect(() => {
        socket.emit("join-room", roomId);

        socket.on("code-change", (newCode) => {
            setCode(newCode);
        });

        return () => {
            socket.off("code-change");
        };
    }, [roomId]);

    const handleChange = (newValue) => {
        setCode(newValue);
        socket.emit("code-change", { roomId, code: newValue });
    };

    return (
        <div style={{ height: "100vh", width: "100%" }}>
            {/* Navbar */}
            <nav className="w-full" style={{ backgroundColor: "#1e1e1e" }}>
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">
                    <h1 className="text-2xl font-bold text-pink-500">CodeX</h1>
                </div>
            </nav>

            {/* Editor Container with Placeholder */}
            <div className="relative h-[calc(100%-64px)]">
                <Editor
                    height="100%"
                    width="100%"
                    theme="vs-dark"
                    language="JavaScript/TypeScript"
                    value={code}
                    onChange={handleChange}
                    options={{ minimap: { enabled: false } }}
                />

                {/* Placeholder */}
                {code === "" && (
                    <div className="absolute top-4 left-6 text-gray-500 pointer-events-none select-none">
            // Start coding here...
                    </div>
                )}
            </div>
        </div>
    );
}

export default CodeEditor;
