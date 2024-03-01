import CardListing from "./components/CardListing";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <main>
    <Carousel/>
    <section className="pt-20 space-y-6">
      <CardListing/>
      <CardListing/>
      <CardListing/>
    </section>
    </main>
  );
}
