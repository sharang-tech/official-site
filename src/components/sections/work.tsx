import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import ClientStoriesGrid from "./client-stories-grid";

interface WorkProps {
    className?: string
}

const Work: FunctionComponent<WorkProps> = ({ className }) => {
    const openSource = [{
        name: 'Cloud CTL',
        desc: 'Unified Cloud Infrastructure Management Tool, with MCP enabled for AI usage.',
        logo: '/cloudctl.png',
        website: '//cloudctl.xyz',
    }, {
        name: 'Snap Sphere',
        desc: 'Automate and manage snapshots across multiple providers with custom policies.',
        logo: '/snapsphere.png',
    }, {
        name: 'Stack Gen',
        desc: 'CLI tool to generate boilerplate code for popular frameworks, highly customizable.',
        logo: '/stackgen.png',
    }]
    return (<>
        <section className={cn("w-full py-20", className)}>
            <div className="max-w-5xl mx-5 md:mx-auto mb-5 font-medium">
                <span className="border text-sm py-1 px-3 border-neutral-300 rounded-2xl">Client Stories</span>
                <h1 className="text-2xl md:text-4xl md:leading-12 my-2">
                    Work in Works, <br /><span className="text-neutral-400">From brand to code to audit — we cover every layer.</span>
                </h1>
            </div>
            <ClientStoriesGrid />
            <div className="grid grid-cols-1 mx-5 md:grid-cols-3 gap-5 mt-5 max-w-6xl md:mx-auto">
                {
                    openSource.map((item, i) => <div key={i} className="p-5 bg-white rounded-xl items-start gap-5 font-medium flex">
                        <Image src={item.logo} height={64} width={64} alt={item.name} />
                        <div>
                            <h4 className="text-xl">
                                {item.name}
                            </h4>
                            <p className="mt-2 text-neutral-500 text-sm">{item.desc}</p>
                            {item.website && <Button variant={"outline"} asChild className="bg-background mt-4 !pl-4 hover:bg-neutral-200 py-1 px-2 text-sm">
                                <Link href={item.website} target="_blank">
                                    Visit Project <ArrowUpRight />
                                </Link>
                            </Button>}
                        </div>
                    </div>)
                }
            </div>
        </section>
    </>);
}

export default Work;