import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";

interface AboutProps {
    className?: string
}

const About: FunctionComponent<AboutProps> = ({ className }) => {
    return (<>
        <section className={cn("py-20 mx-5", className)}>
            <div className="max-w-5xl mx-auto mb-5 font-medium">
                <span className="border text-sm py-1 px-3 border-neutral-300 rounded-2xl">About us</span>
            </div>
            <div className="grid grid-cols-1 max-w-5xl mx-auto md:grid-cols-2 gap-8 md:gap-5">
                <div>
                    <h2 className="md:text-2xl">
                        Sharang is a full-stack software and AI lab.
                        <span className="text-neutral-400"> We build intelligent products for startups, mission-driven teams, and our own experiments.</span>
                    </h2>
                </div>
                <div>
                    <h2 className="md:text-2xl">
                        Since 2016,
                        <span className="text-neutral-400"> We’ve delivered 40+ products — from AI-powered platforms to investor-ready products — for 20+ brands. And we still make time for our own tools, libraries, and open-source experiments.</span>
                    </h2>
                </div>
                <div className="md:col-start-2">
                    <h2 className="md:text-2xl">
                        Whether we’re launching our own projects or building for clients, we follow the same rules:
                        <span className="text-neutral-400"> Start with the problem — not the tech
                            Design for real users, not just screens
                            Build once. Ship fast. Fix nothing later.
                            Solve it — not just style it
                            No demo mode. No delays. Just software that works.</span>
                    </h2>

                </div>
            </div>
        </section>
    </>);
}

export default About;