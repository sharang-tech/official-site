import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";
import { Button } from "./button";
import Link from "next/link";
import { MoveRight } from "lucide-react";

interface ClientStoryCardProps {
    className?: string,
    link: string,
    title: string,
    bgimg: string
}

const ClientStoryCard: FunctionComponent<ClientStoryCardProps> = ({ className, link, title, bgimg }) => {
    return (<div className={cn("bg-white p-5 relative group rounded-xl h-100 flex flex-col bg-no-repeat bg-cover", className)} style={{ backgroundImage: `url(${bgimg})` }}>
        <h1 className="text-xl my-2 mt-auto max-w-sm">
            {title}
        </h1>
        <div className="bg-transparent backdrop-blur-md rounded-xl flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full invisible group-hover:visible opacity-0 group-hover:opacity-100 duration-300">
            <Button asChild className="text-sm text-primary" variant={"outline"}>
                <Link href={link}>
                    Learn more <MoveRight strokeWidth={1.5} />
                </Link>
            </Button>
        </div>
    </div>);
}

export default ClientStoryCard;