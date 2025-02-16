import { notFound } from "next/navigation";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug;

  if (['first', 'second'].includes(slug)) {
    notFound();
  }

  return (
    <>
      Hello! {slug}
    </>
  )
}