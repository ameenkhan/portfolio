import Counter from "@/app/components/counter";

export default function Header() {
    return (
        <>
            <header className="p-20 border border-yellow-400">
                <ul className="flex space-x-4">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/about/projects">Projects</a></li>
                </ul>
                <Counter></Counter>
            </header>
        </>
    );
}
