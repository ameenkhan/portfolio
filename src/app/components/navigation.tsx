import styles from '@/app/components/navigation.module.css';
import Link from "next/link";

export default function Navigation() {
    return (
        <>
            <nav className="font-mono">
                <ul className="flex flex-col md:space-x-4 md:flex-row">
                    <li>
                        <Link href="/" className={styles.link}>Home</Link>
                    </li>
                    <li>
                        <Link href="/about" className={styles.link}>About</Link>
                    </li>
                    <li>
                        <Link href="/about/projects" className={styles.link}>Projects</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}