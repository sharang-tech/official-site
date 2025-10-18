import Audit from "@/components/sections/services/audit";
import Branding from "@/components/sections/services/branding";
import Designing from "@/components/sections/services/design";
import Development from "@/components/sections/services/development";
import Hero from "@/components/sections/services/hero";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services — Sharang Tech Labs",
};

export default function Services() {
    const FAQs = [
        {
            question: "What services do you offer?",
            answer: "We offer branding, design, full-stack development, AI integration, Custom Model development, UX audit, technical audits and more. From idea to launch, we handle the full product lifecycle and beyond that."
        },
        {
            question: "Do you work with startups?",
            answer: "Yes. We specialize in helping early-stage and growing startups launch MVPs, fix code, and add AI — with speed and clarity."
        },
        {
            question: "How long does a project take?",
            answer: "Most MVPs take 6–10 weeks; full platforms take 10–16 weeks. After scoping, we give a clear timeline — and stick to it."
        },
        {
            question: "Who owns the IP after delivery?",
            answer: "You do — 100%. All source code, designs, and assets are handed over to you. We only retain rights to reusable tools and frameworks."
        },
        {
            question: "Do you work remotely?",
            answer: "Yes — we’re fully remote and collaborate with founders globally. We use Slack, GitHub, and weekly syncs to keep communication fast and clear."
        },
        {
            question: "Do you sign NDA?",
            answer: "Yes — we do."
        }
    ]
    return (
        <>
            <Hero />
            <Branding />
            <Designing />
            <Development />
            <Audit />
            <section className="pt-20 md:pt-40 pb-20 max-sm:px-5 font-medium relative">
                <div className="max-w-5xl mx-auto">
                    <span className="border text-sm py-1 px-3 border-neutral-300 rounded-2xl">How We Work</span>
                    <h1 className="md:text-4xl md:leading-12 text-2xl my-2">
                        Our Flow<br /><span className="text-neutral-400">Simple. Clear. No surprises.</span>
                    </h1>
                </div>
                <div className="mt-10 grid md:grid-cols-3 gap-4 relative max-w-6xl mx-auto">
                    <Image src={"/up.svg"} height={128} width={128} alt="up-arrow" className="absolute hidden md:block opacity-10 -top-20 rotate-12 right-75" />
                    <Image src={"/down.svg"} height={128} width={128} alt="down-arrow" className="absolute hidden md:block opacity-10 -bottom-20 left-75" />
                    {[
                        {
                            icon: 'solar:file-smile-bold-duotone',
                            name: 'Understand',
                            desc: 'We align on your goals, users, and constraints.'
                        },
                        {
                            icon: 'solar:settings-minimalistic-bold-duotone',
                            name: 'Build',
                            desc: 'We design, code, and test — with weekly updates.'
                        }, {
                            icon: 'solar:rocket-bold-duotone',
                            name: 'Deliver',
                            desc: 'We launch, support, and hand over — no loose ends.'
                        },].map((item, i) => <div key={i} className="bg-white h-64 flex flex-col rounded-xl p-8">
                            <Icon icon={item.icon} className="size-10 text-blue-500" />
                            <h3 className="text-xl mt-auto">
                                {item.name}
                            </h3>
                            <p className="text-sm text-neutral-500">
                                {item.desc}
                            </p>
                        </div>)}
                </div>
            </section>
            <section className="pt-20 md:pt-40 pb-20 max-sm:px-5 font-medium relative">
                <div className="max-w-5xl mx-auto">
                    <span className="border text-sm py-1 px-3 border-neutral-300 rounded-2xl">Questions? We’ve Got Answers</span>
                    <h1 className="md:text-4xl md:leading-12 text-2xl my-2">
                        Frequently Asked Questions<br /><span className="text-neutral-400">Everything you need to know about how we work, timelines, and what to expect.</span>
                    </h1>
                </div>
                <Accordion
                    type="single"
                    collapsible
                    className="max-w-6xl mx-auto rounded-2xl mt-10 grid md:grid-cols-2 gap-5 text-left">
                    {FAQs.map((item) => (
                        <div
                            className="group"
                            key={item.question}>
                            <AccordionItem
                                value={item.question}
                                className="bg-white peer rounded-xl border-none px-7 py-1">
                                <AccordionTrigger className="cursor-pointer hover:no-underline">{item.question}</AccordionTrigger>
                                <AccordionContent>
                                    <p>{item.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                            <hr className="mx-7 border-dashed group-last:hidden peer-data-[state=open]:opacity-0" />
                        </div>
                    ))}
                </Accordion>
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
            {/* <section className="max-w-6xl mx-auto px-5 py-10 md:py-20 mb-17 font-medium overflow-hidden relative text-center bg-white rounded-xl">
                <Image src={"/hands.png"} width={512} height={400} alt="hands" className="absolute rotate-90 max-sm:hidden top-30 -left-30" />
                <div className="max-w-lg mx-auto">
                    <span className="border text-sm py-1 px-3 border-neutral-300 rounded-2xl">Ready to Build?</span>
                    <h1 className="text-2xl leading-10 my-2">
                        Let’s Build Something That Actually Ships
                    </h1>
                    <p className="text-neutral-400">No more guessing. No fluff. No ghosting. Just clean execution and clear communication.</p>
                </div>
                <div className="flex max-sm:flex-col w-full gap-2 mt-15 items-center justify-center">
                    <Button asChild className="px-5 max-sm:w-full group">
                        <Link href={"/contact"}>
                            Let&apos;s connect <MoveRight strokeWidth={1.5} className="size-5 group-hover:translate-x-1 duration-300" />
                        </Link>
                    </Button>
                    <Button asChild variant={"outline"} className="px-5 max-sm:w-full group border-neutral-200">
                        <Link target="_blank" href={"https://calendar.app.google/D5zNA5sETNtreLvL6"}>
                            Book a call <ArrowUpRight className="size-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-300" />
                        </Link>
                    </Button>
                </div>
            </section> */}
        </>
    );
}
