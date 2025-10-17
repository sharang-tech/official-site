import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";

interface IndustriesProps {
    className?: string
}

const Industries: FunctionComponent<IndustriesProps> = ({ className }) => {
    const industries = [{
        title: "eCommerce",
        link: "/solution/ecommerce",
        image: "/shopping-cart.png",
        className: 'md:col-span-2'
    }, {
        title: "Software as a Service",
        link: "/solution/saas",
        image: '/saas.png',
        invert: true,
        className: 'md:justify-start'
    }, {
        title: "Data",
        link: "/solution/data",
        image: '/data.png',
        className: 'md:justify-start'
    }, {
        title: "Cybersecurity",
        link: "/solution/cybersecurity",
        image: '/cybersecurity.png',
    }, {
        title: "Internet of Things",
        link: "/solution/iot",
        image: '/iot.png',
        className: 'md:justify-start md:items-end'
    }, {
        title: "Artificial Intelligence",
        link: "/solution/ai",
        image: '/ai.png',
        invert: true,
        className: 'md:col-span-2'
    },]
    return (<>
        <section className={cn("w-full py-20", className)}>
            <div className="max-w-5xl mx-5 md:mx-auto font-medium">
                <span className="border text-sm py-1 px-3 border-neutral-300 rounded-2xl">Industries</span>
                <h1 className="md:text-4xl md:leading-12 text-2xl my-2">
                    Segments We Serve, <br /><span className="text-neutral-400">For Brands who move fast — and Think Ahead</span>
                </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-10 max-w-6xl mx-5 md:mx-auto">
                {
                    industries.map((clientStory, i) => <div key={i} className={cn(`flex flex-col justify-end p-8 rounded-xl md:min-h-96 font-medium bg-no-repeat bg-center bg-cover bg-white relative duration-300 group`, clientStory.className)} style={(clientStory.image && { backgroundImage: `url('${clientStory.image}')` }) as React.CSSProperties}>
                        <h1 className={`text-sm ${clientStory.invert ? 'bg-black text-white' : 'bg-white text-black'} w-fit px-3 py-1.5 rounded-2xl font-medium`}>
                            {clientStory.title}
                        </h1>
                        {/* <div className="bg-transparent backdrop-blur-md rounded-xl flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full invisible group-hover:visible opacity-0 group-hover:opacity-100 duration-300">
                            <Button asChild className="text-sm text-primary" variant={"outline"}>
                                <Link href={clientStory.link}>
                                    Learn more <MoveRight strokeWidth={1.5} />
                                </Link>
                            </Button>
                        </div> */}
                    </div>)
                }
            </div>
        </section>
    </>);
}

export default Industries;