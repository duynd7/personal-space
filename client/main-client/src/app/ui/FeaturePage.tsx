import { metadata } from "../layout"

export const FeaturePage = () => {
    return (
        <div className="flex flex-col items-center text-slate-200 w-11/12 py-10">
            <div className="h-3/5 w-3/5 justify-center">
                <h1 className="font-bold text-8xl">Welcome to {"" + metadata.title}</h1>
                <br />
                <h2 className="font-bold text-4xl">
                    Press <span className="bg-slate-700 p-2 rounded-lg">Ctrl + Space</span> to search
                </h2>
            </div>
        </div>
    )
}