"use client";
import dynamic from "next/dynamic";

let App = dynamic(() => import("../../../App"), { ssr: false });

export function ReactClientApp() {
    return <App />;
}
