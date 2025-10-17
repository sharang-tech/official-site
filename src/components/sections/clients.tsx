import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";
import Image from "next/image";

interface ClientsProps {
    className?: string
}

const Clients: FunctionComponent<ClientsProps> = ({ className }) => {
    const clients = [{
        logo: '/unoversion.png',
        w: 64,
        h: 64,
    }, {
        logo: '/kartikey-full.png',
        cls: 'invert-0',
        w: 128,
        h: 64,
        className: "max-md:border-r-0"
    }, {
        logo: '/hyperwafer.png',
        w: 64,
        h: 64,
    }, {
        logo: '/dyu.png',
        w: 64,
        h: 64,
        className: 'border-r-0'
    }, {
        logo: '/scihawk.png',
        w: 64,
        h: 64,
        className: 'md:border-b-0'
    }, {
        logo: '/mahalik-foundation.png',
        cls: 'invert-0',
        w: 128,
        h: 64,
        className: 'md:border-b-0 max-md:border-r-0'
    }, {
        logo: '/bharatsaga.png',
        cls: 'invert-0',
        w: 64,
        h: 64,
        className: 'border-r border-b-0 border-neutral-300 border-dashed'
    },]
    return (<>
        <section className={cn("w-full pb-20", className)}>
            <div className="max-w-4xl mx-5 md:mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 mt-10  divide-x divide-y divide-dashed divide-neutral-300">
                    {
                        clients.map((client, i) => <div key={i} className={cn("h-32 relative flex items-center justify-center", client.className)}>
                            <Image src={client.logo} width={client.w} height={client.h} unoptimized alt="logo" className={cn("invert-100", client.cls)} />
                        </div>)
                    }
                    <div className={cn("h-32 relative flex items-center justify-center opacity-40")}>
                        and more...
                    </div>
                </div>
            </div>
        </section>
    </>);
}

export default Clients;