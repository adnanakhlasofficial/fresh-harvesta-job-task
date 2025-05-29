import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <header className="bg-[url(/images/bg.jpg)] min-h-screen bg-center bg-cover">
        <Navbar />
        <Banner />
      </header>
    </>
  );
}
