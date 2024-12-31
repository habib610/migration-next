export const metadata = {
    title: "React | Next",
    description: "Web site created with Next.js.",
};

const ReactLayout = ({ children }) => {
    return (
        <div>
            <div id="root" className=" mx-auto">
                {children}
            </div>
        </div>
    );
};

export default ReactLayout;
