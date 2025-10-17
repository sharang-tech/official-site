'use client'

import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";
import { TextLoop } from "../../ui/text-loop";
import Image from "next/image";
import Card from "@/components/ui/card";

interface HeroProps {
    className?: string
}

const Hero: FunctionComponent<HeroProps> = ({ className }) => {
    const services = [{
        name: 'Branding',
        tagline: 'Build a Strong Identity',
        href: '/services/#branding',
        image: '/branding.png',
        imgClassName: 'scale-120 group-hover:scale-150 duration-500'
    }, {
        name: 'Designing',
        tagline: 'Design That Works',
        href: '/services/#designing',
        image: '/designing.png',
        imgClassName: 'scale-80 group-hover:scale-125 duration-500'
    }, {
        name: 'Development',
        tagline: 'Code That Scales',
        href: '/services/#development',
        image: '/development.png',
        imgClassName: 'mt-30 group-hover:scale-150 duration-500'
    }, {
        name: 'Audit',
        tagline: 'Audit & Improvise',
        href: '/services/#audit',
        image: '/auditing.png',
        imgClassName: 'mt-40 group-hover:scale-150 duration-500'
    }]
    return (<>
        <section className={cn("w-full relative bg-no-repeat bg-contain md:bg-[url(/forest.png)]", className)}>
            <div className="py-40 max-sm:px-5" style={{ background: 'linear-gradient(343deg,rgba(245, 245, 245, 1) 70%, rgba(0, 0, 0, 0) 100%)' }}>
                <div className="text-center pb-25 font-medium relative">
                    <span className="border text-sm py-1 px-3 border-neutral-300 rounded-2xl">All the Layers</span>
                    <h1 className="text-xl md:text-4xl md:leading-12 my-2">
                        Services that ship <TextLoop>
                            <span>complex stuffs</span>
                            <span>web apps</span>
                            <span>mobile apps</span>
                            <span>AI models</span>
                            <span>websites</span>
                        </TextLoop>, <br /><span className="text-neutral-400">No fluff. Just what moves the needle.</span>
                    </h1>
                    <p className="font-normal md:text-xl mt-5 text-neutral-600 relative max-w-2xl mx-auto">
                        Whether you need a brand identity, a scalable app, or a code review, we deliver with precision, speed, and clarity — no gaps, no misalignment.
                    </p>
                </div>
                <div className="grid font-medium grid-cols-1 md:grid-cols-4 max-w-fit mx-auto gap-5 relative">
                    <Image src={"/pot-plant.png"} width={160} height={160} alt="pot-plant" className="absolute z-0 md:opacity-100 opacity-5 -top-54 right-30" />
                    {services.map((item, i) => <Card arrowDirDown key={i} title={item.name} sub={item.tagline} link={item.href} className="min-h-96 w-84 md:w-96">
                        <div className="h-80 duration-300 overflow-hidden flex items-center justify-center rounded-xl right-0 bg-background">
                            <Image src={item.image} unoptimized width={280} height={-1} alt="tech" className={item.imgClassName} />
                        </div>
                    </Card>)}
                </div>
            </div>
        </section>
    </>);
}

export default Hero;