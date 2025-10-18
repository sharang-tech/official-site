import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { MoveRight } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About — Sharang Tech Labs",
};

export default function About() {
    return (
        <>
            <section>
                <div className="max-w-5xl mx-5 md:mx-auto pt-40 pb-40 text-center font-medium relative">
                    <span className="border text-sm py-1 px-3 border-neutral-300 rounded-2xl">About us</span>
                    <h1 className="text-xl md:text-3xl md:leading-10 my-2">
                        We Build Like Founders — Because We Think Like Them, <br /><span className="text-neutral-400">No overpromising. Just clean code and clear communication.</span>
                    </h1>
                    <Image src={"/bird.png"} className="absolute top-20 -right-95 max-md:hidden" width={320} height={-1} alt="peacock" />
                </div>
                <div className="grid max-w-6xl mx-5 md:mx-auto grid-cols-2 font-semibold mb-5 relative">
                    <div>
                        <h1 className="md:text-3xl text-lg md:leading-12 my-2">
                            Based in India
                        </h1>
                    </div>
                    <div className="text-right">
                        <h1 className="md:text-3xl text-lg md:leading-12 my-2">
                            The Sharang Story
                        </h1>
                    </div>
                </div>
                <div className="grid max-w-6xl mx-5 md:mx-auto grid-cols-1 md:grid-cols-2 gap-5 relative z-10">
                    <div className="bg-white rounded-xl min-h-100 flex flex-col font-medium p-1">
                        <div className="h-80 flex items-center justify-center duration-300 overflow-hidden rounded-xl right-0 bg-background p-6 md:p-12">
                            <h3 className="text-xl text-center">Clarity over complexity. Speed over show. Delivery over promises.</h3>
                        </div>
                        <h1 className="md:text-3xl text-xl md:leading-12 mt-auto px-4 my-2">
                            Our Mission
                        </h1>
                    </div>
                    <div className="bg-white rounded-xl min-h-100 flex flex-col font-medium p-1">
                        <div className="h-80 overflow-hidden rounded-xl right-0 bg-background p-2 flex items-center justify-center">
                            <InfiniteSlider reverse direction="vertical" speed={40} speedOnHover={25} gap={8}>
                                {[
                                    {
                                        "badge": "Precision Over Hype",
                                        "title": "We solve problems, not impress.",
                                        "description": "No over-engineering. No demo mode. Just clean code, clear design, and real impact."
                                    },
                                    {
                                        "badge": "Founder-First",
                                        "title": "We think like owners.",
                                        "description": "We reply in minutes, not days. We protect your timeline, budget, and vision — because we’ve been there."
                                    },
                                    {
                                        "badge": "No Fluff. Just Delivery.",
                                        "title": "We ship what works.",
                                        "description": "No ghosting. No delays. One team. Zero handoffs. If it’s broken, we fix it — fast."
                                    },
                                    {
                                        "badge": "Clarity Over Complexity",
                                        "title": "We start with the problem — not the tech.",
                                        "description": "No jargon. No confusion. Just honest answers and simple solutions that scale."
                                    },
                                    {
                                        "badge": "Build Once. Ship Once.",
                                        "title": "Quality baked in from day one.",
                                        "description": "We don’t rush to launch and fix later. We build it right — so it stays right."
                                    }
                                ].map((item, i) => <div key={`card-${i}`} className="bg-white max-w-[280px] md:max-w-lg rounded-lg p-5">
                                    <span className="text-xs text-blue-600">{item.badge}</span>
                                    <h2>{item.title}</h2>
                                    <p className="text-sm text-neutral-500">{item.description}</p>
                                </div>)}
                            </InfiniteSlider>
                        </div>
                        <h1 className="text-3xl leading-12 mt-auto px-4 my-2">
                            Our Values
                        </h1>
                    </div>
                    <div className="bg-white rounded-xl min-h-100 md:col-span-2 flex flex-col font-medium p-1">
                        <div className="h-80 overflow-hidden rounded-xl right-0 bg-background flex items-center justify-center p-5">
                            <div className="grid md:grid-cols-4 gap-5">
                                {[{ title: 'Start with the Problem', desc: 'Not the tech stack. Not the UI. The actual bottleneck.' }, { title: 'Design with the Code', desc: 'No silos. Designers and developers work together from day one.' }, { title: 'Build Once. Ship Fast. Fix Nothing Later.', desc: 'Clean architecture. Full testing. Zero critical bugs.' }, { title: 'Own the Outcome', desc: 'We don’t hand off and disappear. We see it through — like owners.' }].map((item, i) =>
                                    <div key={`appr-${i}`} className="h-64 p-5 bg-white flex flex-col rounded-lg">
                                        <div className="span size-8 font-semibold text-sm bg-background rounded-full items-center justify-center flex">{i + 1}</div>
                                        <h3 className="text-lg mt-auto">{item.title}</h3>
                                        <p className="text-sm text-neutral-400">{item.desc}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <h1 className="text-3xl leading-12 mt-auto px-4 my-2">
                            Our Approach
                        </h1>
                    </div>
                    <div className="bg-white rounded-xl min-h-100 flex flex-col font-medium p-1">
                        <div className="h-80 overflow-hidden rounded-xl right-0 bg-background flex items-center justify-center p-6 md:p-12">
                            <div>
                                <p className="text-xs">To every founder who trusts us:</p>
                                <h3 className="text-lg my-2">We will protect your time, honor your vision, and deliver what we promise — on time, on scope, on standard.</h3>

                                <p className="text-sm mt-2">If something breaks, we fix it — fast.
                                    If a deadline shifts, we tell you — within 24 hours.
                                    And if it doesn’t work, we own it.</p>

                                <p className="mt-4 text-sm">This isn’t service. It’s partnership.</p>
                            </div>
                        </div>
                        <h1 className="text-3xl leading-12 mt-auto px-4 my-2">
                            Commitment
                        </h1>
                    </div>
                    <div className="bg-white rounded-xl min-h-100 flex flex-col font-medium p-1">
                        <div className="h-80 overflow-hidden rounded-xl right-0 bg-background flex items-center justify-center p-6 md:p-12">
                            <div>
                                <p className="mt-2 text-lg mb-3">Sharang wasn’t founded to be an agency. It was built to fix what’s broken in product development — starting with speed, ownership, and delivery.</p>
                                <p className="text-sm">
                                    In a world of demo mode and delays, we chose clarity. Sharang is our answer to software that just… works.
                                </p>
                            </div>
                        </div>
                        <h1 className="text-3xl leading-12 mt-auto px-4 my-2">
                            Back Story
                        </h1>
                    </div>
                </div>
            </section>
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
