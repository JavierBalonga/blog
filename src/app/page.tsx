import Hero from "@/components/business/Hero";
import Posts from "@/components/business/Posts";

export default async function Home() {
  return (
    <>
      <Hero />
      {/* @ts-expect-error Server Component */}
      <Posts />
    </>
  );
}
