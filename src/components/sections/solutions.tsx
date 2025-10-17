import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface SolutionsProps {
    className?: string
}

const Solutions: FunctionComponent<SolutionsProps> = ({ className }) => {
    const Solutions = [{
        image: '/data-center.png',
        label: 'MACH Solutions',
        invert: true
    }, {
        image: '/news.png',
        label: 'Content Management',
    }, {
        image: '/code-editor.png',
        label: 'MVP Development',
    }, {
        image: '/art-gallery.png',
        label: 'Brand Identity',
    }, {
        image: '/data-flow.png',
        label: 'Data Pipeline',
    }, {
        image: '/data-center.png',
        label: 'MACH',
    },]
    return (<>
        <section className={cn("w-full py-20", className)}>
            <div className="max-w-5xl mx-5 md:mx-auto font-medium grid md:grid-cols-3 gap-x-5 gap-y-7 mt-5 rounded-xl">
                <div className="p-5">
                    <span className="border text-sm py-1 px-3 border-neutral-300 rounded-2xl">Solutions</span>
                    <h1 className="md:text-4xl md:leading-12 text-2xl my-2">
                        We do, <br /><span className="text-neutral-400">What matters.</span>
                    </h1>
                </div>
                {
                    Solutions.map((item, i) => <div key={i} className="bg-background bg-center bg-no-repeat bg-cover rounded-xl md:w-80 p-5 flex justify-end flex-col md:h-64" style={{ backgroundImage: `url(${item.image})` }}>
                        <h1 className={`text-sm md:text-base ${item.invert ? 'bg-black text-white' : 'bg-white text-black'} w-fit px-3 py-1.5 rounded-2xl font-medium`}>
                            {item.label}
                        </h1>
                    </div>)
                }
                <div className="p-5 border border-dashed border-neutral-200 rounded-xl">
                    <h1 className="md:text-3xl md:leading-12 text-2xl">
                        and much more, <br /><span className="text-neutral-400">than we can list here</span>
                    </h1>
                    <Button asChild className="mt-5">
                        <Link href={"/contact"}>
                            Talk to us <ArrowUpRight />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    </>);
}

export default Solutions;