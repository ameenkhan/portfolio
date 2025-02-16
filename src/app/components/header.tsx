import Navigation from "@/app/components/navigation";
import Link from "next/link";

export default function Header() {
    return (
        <>
            <header className="flex justify-between md:items-center mt-4">
                <div className="flex items-center md:space-x-12">
                    <div className="hidden md:block">
                        <Link href="/" className="text-xl">Ameen Khan</Link>
                    </div>
                    <Navigation />
                </div>
                <div>
                    Dark Mode
                </div>
            </header>
        </>
    );
}
