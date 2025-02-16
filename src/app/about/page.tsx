export default function AboutPage() {
  if (Math.random() > 0.5) {
    throw new Error('oops');
  }
  return (
    <>
      About me!
    </>
  )
}