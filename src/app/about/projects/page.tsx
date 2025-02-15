import ProjectList from "@/app/about/projects/components/project-list";
import { Suspense } from "react";
import ProjectListLoading from "./components/project-list-loading";

export default async function AboutProjectsPage() {


    return (
        <>
            <div className="p-20">
                <h1 className="mb-8 text-xl">
                    Projects
                </h1>
                <div className="mb-8">
                    This is the list of my repos
                </div>
                <Suspense fallback=<ProjectListLoading />>
                    <ProjectList />
                </Suspense>
            </div>
        </>
    )
}