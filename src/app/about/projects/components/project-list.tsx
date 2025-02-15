type Repo = {
    id: number;
    title: string;
    description: string;
    stargazers_count: number;
};

export default async function ProjectList() {

    // no cache
    const response = await fetch(
        'http://localhost:3001/repos',
        { cache: "no-store" }
    );

    // ttl in cache
    // const response = await fetch('http://localhost:3001/repos', { next: { revalidate: 3 } });

    // default settings
    // const response = await fetch('http://localhost:3001/repos');

    const repos = await response.json();

    return (
        <>
            <ul>
                {repos.map((repo: Repo) =>
                    <li key={repo.id} className="mb-4">
                        <div>{repo.title}</div>
                        <div>{repo.description}</div>
                        <div>{repo.stargazers_count}</div>
                    </li>
                )}
            </ul>
        </>
    )
}