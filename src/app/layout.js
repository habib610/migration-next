import NavBarServer from "./components/NavBarServer";

export const metadata = {
    title: "React | Next",
    description: "Web site created with Next.js.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <NavBarServer />
                <h1 className="text-5xl bg-green-600 text-white p-2 mb-6">
                    Root layout | Top Level
                </h1>
                <div id="root" className=" mx-auto">
                    {children}
                </div>
            </body>
        </html>
    );
}
