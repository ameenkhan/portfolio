import Card from "@/app/components/card";

type Repo = {
  id: number;
  title: string;
  description: string;
  stargazers_count: number;
};

export default async function ProjectList() {
  const response = await fetch('http://localhost:3001/repos');
  const repos = await response.json();

  return (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {repos.map((repo: Repo) =>
          <li key={repo.id} className="mb-4">
            <Card className="font-mono h-full">
              <div className="flex justify-between items-center mb-4">
                <div className="font-semibold">{repo.title}</div>
                <div>📌{repo.stargazers_count}</div>
              </div>
              <div>{repo.description}</div>

            </Card>
          </li>
        )}
      </ul>
    </>
  )
}