import Stories from "@/data/client-stories.json"
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import { ArrowUpRight, Quote } from "lucide-react";
import { Safari } from "@/components/magicui/safari";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { Compare } from "@/components/ui/compare";
import Card from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from 'next'

export async function generateStaticParams() {
    return [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }]
}

export async function generateMetadata(
    params: Promise<{ id: string }>
): Promise<Metadata> {
    // read route params
    const { id } = await params
    const currentStory = Stories.find((v) => v.id === Number(id))
    return {
        title: `${currentStory?.title} | Client Story — Sharang Tech Labs`,
    }
}

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params;
    const currentStory = Stories.find((v) => v.id === Number(id))
    return (<>
        <section className="pt-25 pb-20">
            <div className="max-w-7xl mt-10 mx-auto grid gap-5 grid-cols-7">
                <div className="col-span-2">
                    <div className="max-w-sm font-medium mb-10 mr-auto">
                        <span className="border text-sm py-1 px-3 border-neutral-300 rounded-2xl">{currentStory?.company}</span>
                        <h1 className="text-2xl md:text-3xl md:leading-10 mt-2">
                            {currentStory?.title}
                        </h1>
                    </div>
                    <div className="bg-white p-8 sticky top-30 space-y-5 font-medium rounded-xl">
                        <h3>Project Details</h3>
                        <div>
                            <p className="opacity-50 text-sm">Industry</p>
                            <span className="text-xs border border-neutral-200 px-2 rounded">{currentStory?.industry}</span>
                        </div>
                        <div>
                            <p className="opacity-50 text-sm">Service</p>
                            <span className="text-xs border border-neutral-200 px-2 rounded">{currentStory?.projectType}</span>
                        </div>
                        <div>
                            <p className="opacity-50 text-sm">Timeline</p>
                            <span className="text-xs border border-neutral-200 px-2 rounded">{currentStory?.duration}</span>
                        </div>
                        <div>
                            <p className="opacity-50 text-sm">Tech Stack</p>
                            <div className="flex mt-2 flex-wrap gap-1">
                                {currentStory?.techStack.map((tech, i) => <span key={i} className="text-xs border border-neutral-200 px-2 rounded">{tech}</span>)}
                            </div>
                        </div>
                        {currentStory?.website && <Button className="text-sm" asChild>
                            <Link href={currentStory?.website}>Visit Website <ArrowUpRight className="size-6" strokeWidth={1} /></Link>
                        </Button>}
                    </div>
                </div>
                <div className="col-span-5">
                    {currentStory?.hero && <div className="bg-white mb-10 rounded-xl p-1">
                        <div className="bg-background rounded-xl flex p-10 items-center justify-center h-100">
                            <Safari url={currentStory.domain}
                                className="size-full"
                                mode="simple"
                                imageSrc={currentStory?.hero} />
                        </div>
                    </div>}
                    <div className="max-w-2xl mx-auto">
                        <span className="border-2 text-sm py-1 px-3 border-red-200 rounded-2xl text-red-500 font-medium">Challenge</span>
                        <h3 className="text-xl leading-8 font-bold mt-3">{currentStory?.challenge.summary}</h3>
                        <p className="text-lg font-medium leading-7 mt-8">{currentStory?.challenge.narrative}</p>
                    </div>
                    <div className="border border-neutral-200 rounded-xl my-10 p-2">
                        <div className="bg-white flex flex-col p-30 rounded-xl relative">
                            <Quote className="absolute opacity-10 size-25 top-0 left-0" />
                            <h4 className="text-xl font-medium">
                                {currentStory?.clientVoice}
                            </h4>
                            <div className="mt-5 ml-auto">
                                <p className="font-medium">{currentStory?.clientName}</p>
                                <p className="text-sm">{currentStory?.clientRole}, {currentStory?.company}</p>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-2xl mt-10 mx-auto">
                        <span className="border-2 text-sm py-1 px-3 border-green-300 text-green-600 rounded-2xl font-medium">Solution</span>
                        <h3 className="text-xl leading-8 font-bold mt-3">{currentStory?.solution.summary}</h3>
                        <p className="text-lg font-medium leading-7 mt-8">{currentStory?.solution.narrative}</p>
                    </div>
                    {currentStory?.wireframes && <div className="bg-white relative first:col-span-2 mt-10 rounded-xl p-1">
                        <div className="bg-background rounded-xl flex py-10 items-center justify-center h-100">
                            <InfiniteSlider speed={25} gap={40} speedOnHover={10}>
                                {currentStory.wireframes.map((wr, i) => <Image key={i} src={wr} width={400} height={400} alt={`wr-${i}`} className="border border-neutral-200 rounded-xl" />)}
                            </InfiniteSlider>
                        </div>
                        <h1 className={`text-xs bg-black text-white w-fit px-3 py-1.5 rounded-2xl absolute bottom-5 right-5 font-medium`}>
                            Early Wireframes
                        </h1>
                    </div>}
                    {currentStory?.compare && <div className="bg-white relative first:col-span-2 mt-10 rounded-xl p-1">
                        <div className="bg-background rounded-xl flex p-10 items-center justify-center h-100">
                            <Compare
                                firstImage={currentStory?.compare[0]}
                                secondImage={currentStory?.compare[1]}
                                firstImageClassName="rounded-xl object-contain"
                                secondImageClassname="rounded-xl object-contain"
                                className="-full"
                                slideMode="hover"
                                showHandlebar={false}
                                autoplay={true}
                            />
                        </div>
                        <h1 className={`text-xs bg-black text-white w-fit px-3 py-1.5 rounded-2xl absolute bottom-5 right-5 font-medium z-50`}>
                            Wireframe to Product
                        </h1>
                    </div>}
                    <div className="max-w-2xl mt-10 mx-auto">
                        <span className="border-2 text-sm py-1 px-3 border-neutral-300 font-medium rounded-2xl">Results</span>
                        <h3 className="text-xl leading-8 font-bold mt-3 ">{currentStory?.result.summary}</h3>
                        <p className="text-lg font-medium leading-7 mt-8">{currentStory?.result.narrative}</p>
                    </div>
                    <div className="max-w-2xl mt-10 mx-auto">
                        <span className="border-2 text-sm py-1 px-3 border-neutral-300 rounded-2xl font-medium">Deliverables</span>
                        {currentStory?.result.metrics && <div className="grid grid-cols-3 gap-5 mt-5 font-medium">
                            {currentStory?.result.metrics.map((metric, i) => <div key={i} className="bg-white flex flex-col px-5 py-3 rounded-xl relative h-64">
                                <span className="text-7xl opacity-10">
                                    {i + 1}
                                </span>
                                <h5 className="mt-auto">
                                    {metric}
                                </h5>
                            </div>)}
                            <div className="bg-white flex flex-col px-5 py-3 rounded-xl relative h-64">
                                <span className="text-7xl opacity-10">
                                    <Icon icon={"iconoir:peace-hand"} />
                                </span>
                                <h5 className="mt-auto">
                                    A thank you note — for being such a awesome client
                                </h5>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-30">
                <span className="border text-sm py-1 px-3 font-medium border-neutral-300 rounded-2xl">More stories from Sharang&apos;s Archive</span>
                <div className="grid grid-cols-3 mt-3 gap-5">
                    {
                        Stories.map((story, i) => story.id !== Number(id) && i < 4 && <Card altStyle sm className="h-fit" title={story.company} sub={story.title} link={`/case-study/${story.id}`} key={i}>
                            <div className="h-80 bg-background p-5 rounded-xl">
                                {story?.hero && <Safari url={story.domain}
                                    className="size-full"
                                    mode="simple"
                                    imageSrc={story?.hero} />}
                            </div>
                        </Card>)
                    }
                </div>
            </div>
        </section>
    </>)
}