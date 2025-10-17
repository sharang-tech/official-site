import Hero from "@/components/sections/hero";
import Service from "@/components/sections/service";
import Work from "@/components/sections/work";
import Clients from "@/components/sections/clients";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import Industries from "@/components/sections/industries";
import Solutions from "@/components/sections/solutions";
import About from "@/components/sections/about";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Clients />
      <Service />
      <Industries />
      <Solutions />
      <section className="pt-10 md:pt-20">
        <div className="max-w-5xl p-5 rounded-xl bg-white mx-5 md:mx-auto">
          <Link href={"/contact"} className="flex group font-medium">
            <span>
              <span className="text-sm md:pl-2">Something we can help with?</span>
              <h1 className="md:text-8xl text-3xl">
                Let&apos;s Connect
              </h1>
            </span>
            <MoveRight className="ml-auto -translate-x-10 group-hover:translate-x-0 duration-300 group-hover:text-blue-600 size-10 max-md:mt-auto md:size-32" />
          </Link>
        </div>
      </section>
    </>
  );
}
