import ProjectList from "@/app/about/projects/components/project-list";
import { Suspense } from "react";
import ProjectListLoading from "./components/project-list-loading";
import { ErrorBoundary } from "react-error-boundary";

export default async function AboutProjectsPage() {


  return (
    <>
      <div>
        <h1 className="mb-8 text-xl">
          Projects
        </h1>
        <div className="mb-8">
          This is the list of my repos
        </div>
        {/* <ErrorBoundary fallback={<div>bugging out, error</div>}> */}
        <Suspense fallback=<ProjectListLoading />>
          <ProjectList />
        </Suspense>
        {/* </ErrorBoundary> */}
      </div>
    </>
  )
}