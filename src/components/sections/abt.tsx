import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { MoveRight } from "lucide-react";

interface AbtProps {
    className?: string
}

const Abt: FunctionComponent<AbtProps> = ({ className }) => {
    return (<>
        <section className={cn("w-full", className)}>
            <div className="max-w-6xl shadow-2xl shadow-neutral-400/10 mb-20 mx-auto bg-gradient-to-b overflow-hidden from-transparent to-white p-0.5 rounded-xl">
                <div className="bg-gradient-to-t from-transparent from-70% to-30% to-background rounded-xl">
                    <div className="max-w-5xl mx-auto relative pt-40 max-sm:p-5 pb-15 grid grid-cols-1 md:grid-cols-3 gap-y-5 md:gap-x-10 font-medium">
                        <Image src={"/team.png"} unoptimized width={384} height={-1} className="rounded-xl max-sm:mx-auto" alt="team" />
                        <div className="flex flex-col justify-center col-span-2">
                            <span className="text-blue-500 text-sm">Built for Builders</span>
                            <h1 className="text-2xl md:text-3xl my-2">
                                We Build Like Founders — Because We Think Like Them, <br />
                            </h1>
                            <h2 className="text-neutral-400 text-xl md:text-2xl my-2">No overpromising. Just clean code and clear communication.</h2>
                            <h3 className="md:text-xl md:leading-8 font-normal text-neutral-600 max-w-3xl">
                                Sharang is a full-stack software and AI lab that helps startups and growing businesses build intelligent, scalable products — from idea to live.
                            </h3>
                            <Button asChild className="!px-5 w-fit mt-5">
                                <Link href="/contact">
                                    About us <MoveRight strokeWidth={1} className="size-6" />
                                </Link>
                            </Button>
                        </div>
                        <Image src={"/shrub.png"} width={240} height={-1} alt="shrubs" className="absolute z-0 md:opacity-100 opacity-5 -left-30 rotate-12 -bottom-10" />
                        <Image src={"/shrub.png"} width={240} height={-1} alt="shrubs2" className="absolute z-0 md:opacity-100 opacity-5 -right-30 -rotate-12 -bottom-10" />
                    </div>
                </div>
            </div>
        </section>
    </>);
}

export default Abt;