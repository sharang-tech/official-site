import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";
import Image from "next/image";

interface HeroProps {
    className?: string
}

const Hero: FunctionComponent<HeroProps> = ({ className }) => {
    return (<>
        <section className={cn("w-full pt-40 relative", className)}>
            <div className="max-w-5xl mx-5 md:mx-auto pb-5 md:pb-15 font-medium flex flex-col md:flex-row md:items-end relative z-10">
                <div className="text-4xl flex flex-row gap-2 md:gap-0 md:flex-col leading-20 md:text-8xl md:leading-26">
                    <p>Think.</p>
                    <p>Ship.</p>
                    <p>Scale.</p>
                </div>
                <div className="max-w-xs md:ml-auto pb-5">
                    <h3 className="text-base font-normal mt-2 text-neutral-600">
                        From concept to deployment, we deliver scalable web, mobile, and AI-powered applications — on time and with clarity. No agency delays. No ghosting. Just clean code, clear communication, and a partner who thinks like a founder.
                    </h3>
                </div>
            </div>
            <div className="max-w-6xl mx-5 md:mx-auto grid md:grid-cols-3 gap-1 *:rounded-xl bg-white p-1 rounded-xl">
                <Image src={"/brd.png"} width={500} height={-1} alt="brd" />
                <Image src={"/cpu.png"} width={500} height={-1} alt="cpu" />
                <Image src={"/art.png"} width={500} height={-1} alt="art" />
            </div>
        </section>
    </>);
}

export default Hero;