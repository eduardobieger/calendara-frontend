import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center my-20">
        <h1 className="text-5xl">Your scheduling automation platform</h1>
        <p className="text-xl mt-10 max-w-xl text-center leading-8">Your go-to app for effortlessly scheduling appointments, featuring intuitive automation to streamline your day and optimize your agenda smartly.</p>
      </div>
      <Footer />
    </>
  );
}
