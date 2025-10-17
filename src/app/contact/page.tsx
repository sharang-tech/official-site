import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Contact() {
    return (
        <section>
            <div className="max-w-5xl mx-auto pt-40 pb-40 text-center font-medium relative">
                <span className="text-blue-500 text-sm">Let&apos;s Connect</span>
                <h1 className="text-2xl md:text-4xl md:leading-12 my-2">
                    Contact us, <br /><span className="text-neutral-400">Let&apos;s have a conversation.</span>
                </h1>
            </div>
            <div className="grid max-w-6xl mx-5 md:mx-auto gap-5 grid-cols-1 md:grid-cols-2">
                <div className="h-120 relative bg-center bg-cover overflow-hidden rounded-xl max-md:hidden" style={{ backgroundImage: 'url(/office.png)' }} />
                <div className="grid bg-neutral-200 rounded-xl p-1 gap-1">
                    <div className="grid md:grid-cols-2 gap-1">
                        <div className="bg-white rounded-xl p-5 h-40 md:h-full flex flex-col">
                            <h3 className="text-xl text-neutral-400">
                                via Email
                            </h3>
                            <p className="mt-auto font-semibold">
                                namaste@sharang.tech
                            </p>
                        </div>
                        <div className="bg-white rounded-xl p-5 h-40 md:h-full flex flex-col">
                            <h3 className="text-xl text-neutral-400">
                                via Form
                            </h3>
                            <Button asChild className="mt-auto w-fit text-sm">
                                <Link href={"#"}>
                                    Contact us via form <ArrowUpRight />
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-5 h-60 md:h-full flex flex-col">
                        <h3 className="text-xl text-neutral-400">
                            Mail Address
                        </h3>
                        <div className="mt-auto">
                            <p className="text-lg mb-1 font-medium text-neutral-400">Hyderabad</p>
                            <p className="text-sm">Sharang Tech Labs, 4th Floor, Bizness Square Junction, opposite Hitex Road, Jubilee Enclave, HITEC City, Madhapur, Hyderabad, Telangana 500084</p>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-2 w-full bg-white rounded-xl grid grid-cols-1 md:grid-cols-3 md:h-48 p-5">
                    <div className="md:col-span-2 flex flex-col">
                        <h3 className="text-xl text-neutral-400">
                            Have something in mind we can help you with?
                        </h3>
                        <p className="mt-auto font-semibold">
                            Schedule a 15min discovery call with us, let us about it.
                        </p>
                    </div>
                    <div className="flex justify-end max-md:mt-10">
                        <Button asChild variant={"outline"} className="px-5 max-sm:w-full group border-neutral-200">
                            <Link target="_blank" href={"https://calendar.app.google/D5zNA5sETNtreLvL6"}>
                                Book a call <ArrowUpRight className="size-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-300" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div >
        </section >
    );
}
