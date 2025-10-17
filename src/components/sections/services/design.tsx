'use client'

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Terminal } from "lucide-react";
import { FunctionComponent } from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { Icon } from "@iconify/react/dist/iconify.js";
import Card from "@/components/ui/card";
import { Safari } from "@/components/magicui/safari";

interface DesigningProps {
    className?: string
}

const Designing: FunctionComponent<DesigningProps> = ({ className }) => {
    const services = [{
        name: 'UI Design',
        sub: 'Clean, intuitive interfaces based on user needs and behavior.',
        key: 'ui',
    }, {
        name: 'Design System',
        sub: 'Reusable components, clear rules, and seamless developer handoff',
        key: 'ds',
    }, {
        name: 'Wireframe',
        sub: 'Structural blueprints to align on flow and layout early.',
        key: 'wr',
    }]
    return (
        <section className={cn("pt-20 md:pt-40 pb-20 max-sm:px-5", className)} id="designing">
            <div className="max-w-5xl mx-auto pb-10 font-medium relative">
                <h1 className="text-2xl md:text-4xl md:leading-12 my-2">
                    Design, <br /><span className="text-neutral-400">That Works for Real Users — Not Just Screens.</span>
                </h1>
                <p className="md:text-xl font-normal my-5 text-neutral-600 relative max-w-2xl">
                    Intuitive, accessible, and delightful experiences — from wireframes to interactive prototypes. We design for use, not just aesthetics.
                </p>
                <div className="flex absolute -top-10 md:top-30 md:-right-18 gap-5">
                    <Icon icon={"logos:figma"} className="size-6 md:size-12" />
                    <Icon icon={"logos:adobe-xd"} className="size-6 md:size-12" />
                    <Icon icon={"logos:sketch"} className="size-6 md:size-12" />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 font-medium w-fit mx-auto">
                {
                    services.map((service, i) => <Card sm altStyle reverse={i == 1} title={service.name} sub={service.sub} key={i} className="min-h-96 md:w-96">
                        {service.key === "wr" && <div className="h-80 flex items-center justify-center duration-300 overflow-hidden rounded-xl right-0 bg-background">
                            <div className="bg-white p-2 w-72 h-56 rounded-lg">
                                <header className="bg-background h-4 rounded"></header>
                                <div className="grid grid-cols-2 mt-5 gap-5 px-5">
                                    <div className="space-y-2 pt-5">
                                        <div className="bg-background h-2 rounded"></div>
                                        <div className="bg-background h-2 w-1/2 rounded"></div>
                                        <div className="bg-background h-2 w-1/3 rounded"></div>
                                    </div>
                                    <div className="bg-background h-18 rounded"></div>
                                </div>
                                <div className="grid grid-cols-2 mt-5 gap-5 px-5">
                                    <div className="space-y-2 pt-5">
                                        <div className="bg-background h-2 rounded"></div>
                                        <div className="bg-background h-2 w-1/2 rounded"></div>
                                        <div className="bg-background h-2 w-1/3 rounded"></div>
                                    </div>
                                    <div className="bg-background h-18 rounded"></div>
                                </div>
                            </div>
                        </div>}
                        {service.key === 'ds' && <div className="h-80 px-5 font-medium duration-300 overflow-hidden rounded-xl bg-background">
                            <InfiniteSlider gap={20} direction="vertical" reverse speed={40}>
                                <div>
                                    <p className="mb-2 text-sm">Button Sizes</p>
                                    <div className="flex items-center flex-wrap gap-3">
                                        <Button size={"lg"}>
                                            Button
                                        </Button>
                                        <Button className="rounded-md py-1.5">
                                            Button
                                        </Button>
                                        <Button size={"sm"}>
                                            Button
                                        </Button>
                                    </div>
                                </div>
                                <div>
                                    <p className="mb-2 text-sm mt-5">Button Types</p>
                                    <div className="flex items-center flex-wrap gap-3">
                                        <Button variant={"default"} className="rounded-md py-1.5">
                                            Button
                                        </Button>
                                        <Button variant={"destructive"} className="rounded-md py-1.5">
                                            Button
                                        </Button>
                                    </div>
                                </div>
                                <div className="text-sm">
                                    <p className="mb-2 mt-5">Colors</p>
                                    <div className="flex items-center flex-wrap gap-3">
                                        <div className="flex items-center border p-1 pr-2 border-neutral-300 rounded-full">
                                            <span className="w-5 h-5 bg-orange-600 mr-1 rounded-full" />
                                            Primary
                                        </div>
                                        <div className="flex items-center border p-1 pr-2 border-neutral-300 rounded-full">
                                            <span className="w-5 h-5 bg-blue-600 mr-1 rounded-full" />
                                            Secondary
                                        </div>
                                        <div className="flex items-center border p-1 pr-2 border-neutral-300 rounded-full">
                                            <span className="w-5 h-5 bg-neutral-600 mr-1 rounded-full" />
                                            Accent
                                        </div>
                                    </div>
                                </div>
                                <div className="text-sm">
                                    <p className="mb-2 mt-5">Breadcrumb</p>
                                    <Breadcrumb>
                                        <BreadcrumbList>
                                            <BreadcrumbItem>
                                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                                            </BreadcrumbItem>
                                            <BreadcrumbSeparator />
                                            <BreadcrumbItem>
                                                <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                                            </BreadcrumbItem>
                                            <BreadcrumbSeparator />
                                            <BreadcrumbItem>
                                                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                                            </BreadcrumbItem>
                                        </BreadcrumbList>
                                    </Breadcrumb>
                                </div>
                                <div className="text-sm">
                                    <p className="mb-2 mt-5">Alert</p>
                                    <Alert variant="default">
                                        <Terminal />
                                        <AlertTitle>Heads up!</AlertTitle>
                                        <AlertDescription>
                                            Write alert description here!
                                        </AlertDescription>
                                    </Alert>
                                    <Alert variant="destructive" className="mt-2">
                                        <Terminal />
                                        <AlertTitle>Heads up!</AlertTitle>
                                        <AlertDescription>
                                            Write alert description here!
                                        </AlertDescription>
                                    </Alert>
                                </div>
                            </InfiniteSlider>
                        </div>}
                        {service.key === "ui" && <div className="h-80 duration-300 overflow-hidden rounded-xl right-0 bg-background p-5">
                            <Safari
                                url="kartikey.ai"
                                className="size-full"
                                imageSrc="/kartikey-ui-design.png"
                            />
                        </div>}
                    </Card>)
                }
            </div>
        </section>
    );

}

export default Designing;