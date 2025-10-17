import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";
import { ArrowUpRight, } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TextLoop } from "../ui/text-loop";
import {
    Carousel,
    CarouselContent,
    CarouselNavigation,
    CarouselItem,
} from '@/components/ui/carousel';
import Card from "../ui/card";

interface ServiceProps {
    className?: string
}

const Service: FunctionComponent<ServiceProps> = ({ className }) => {
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
        imgClassName: 'scale-80 group-hover:scale-120 duration-500'
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
        <section className={cn("w-full py-20", className)}>
            <div className="max-w-5xl mx-5 md:mx-auto mb-8 font-medium">
                <span className="border text-sm py-1 px-3 border-neutral-300 rounded-2xl">Services</span>
                <h1 className="text-2xl md:text-4xl md:leading-12 my-2">
                    We do <TextLoop>
                        <span>branding</span>
                        <span>designing</span>
                        <span>development</span>
                        <span>auditing</span>
                        <span>testing</span>
                        <span>integrations</span>
                    </TextLoop>, <br /><span className="text-neutral-400">From brand to code to audit — we cover every layer.</span>
                </h1>
            </div>
            <Carousel className="relative max-w-6xl font-medium mx-5 md:mx-auto">
                <CarouselNavigation
                    className='absolute -top-35 left-auto md:-top-20 w-full justify-end gap-2'
                    classNameButton='bg-neutral-800 cursor-pointer *:stroke-neutral-50 dark:bg-neutral-200 dark:*:stroke-neutral-800'
                    alwaysShow
                    chevronSize={24}
                />
                <CarouselContent className='bg-background'>
                    {services.map((item, i) => <Card title={item.name} link={item.href} sub={item.tagline} key={i} className="min-h-96 md:min-w-95 min-w-84 basis-84 md:basis-95 mr-5">
                        <div className="h-80 duration-300 overflow-hidden flex items-center justify-center rounded-xl right-0 bg-background">
                            <Image src={item.image} unoptimized width={280} height={-1} alt="tech" className={item.imgClassName} />
                        </div>
                    </Card>)}
                </CarouselContent>
            </Carousel>
        </section>
    </>);
}

export default Service;