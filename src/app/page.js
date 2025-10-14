import Feature from "./(home)/Feature";
import Hero from "./(home)/Hero";
import Services from "./(home)/Services";
import Story from "./(home)/Story";
import Team from "./(home)/Team";

export default async function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Story />
      <Team />
      {/* <Feature /> */}
    </>
  );
}
