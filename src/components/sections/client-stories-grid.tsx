import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";
import Stories from "@/data/client-stories.json"
import ClientStoryCard from "../ui/clientstorycard";

interface ClientStoriesGridProps {
    className?: string
}

const ClientStoriesGrid: FunctionComponent<ClientStoriesGridProps> = ({ className }) => {
    return (<div className={cn("font-medium max-md:px-5", className)}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
            {Stories.map((story, i) => story.featured && <ClientStoryCard key={i} className={story.className} title={story.title} bgimg={story.image} link={`/case-study/${story.id}`} />)}
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
            {Stories.map((story, i) => !story.featured && <ClientStoryCard key={i} className={story.className} title={story.title} bgimg={story.image} link={`/case-study/${story.id}`} />)}
        </div>
    </div>);
}

export default ClientStoriesGrid;