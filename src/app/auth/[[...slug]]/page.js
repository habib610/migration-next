import "../../../global.css";
import { ReactClientApp } from "./client";
export function generateStaticParams() {
    return [{ slug: ["profile"] }, { slug: ["dashboard"] }];
}

export default function ReactWrapperPage() {
    return <ReactClientApp />;
}
