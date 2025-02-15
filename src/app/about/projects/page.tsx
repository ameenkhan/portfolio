// don't use cache for this component
// export const dynamic = 'force-dynamic';s

export default async function AboutProjectsPage() {
    // no cache
    const response = await fetch('http://localhost:3001/repos', { cache: "no-store" });

    // ttl in cache
    // const response = await fetch('http://localhost:3001/repos', { next: { revalidate: 3 } });

    // default settings
    // const response = await fetch('http://localhost:3001/repos');

    const repos = await response.json();

    return (
        <>
            <div className="p-20">
                <h1 className="mb-8 text-xl">Projects</h1>

                <ul>
                    {repos.map((repo) =>
                        <li key={repo.id} className="mb-4">
                            <div>{repo.title}</div>
                            <div>{repo.description}</div>
                            <div>{repo.stargazers_count}</div>
                        </li>
                    )}
                </ul>

            </div>
        </>
    )
}