import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import { SpinningText } from "../magicui/spinning-text";

interface FooterProps {
    className?: string
}

const Footer: FunctionComponent<FooterProps> = ({ className }) => {
    return (
        <footer className={cn("grid mt-40 mx-5 md:mx-auto max-w-3xl", className)}>
            <div className="flex items-center">
                <Image src="/Sharang.png" width={64} height={64} alt="logo" className="rounded-2xl" />
                <div className="ml-4">
                    <h5 className="text-2xl font-semibold">
                        Sharang Tech Labs
                    </h5>
                    <p className="text-sm text-neutral-500 font-medium">
                        Ignite, Scale, Secure.
                    </p>
                </div>
            </div>
            <div className="grid font-medium mt-20 pb-10 grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                    <p className="text-sm text-neutral-500">1. Pages</p>
                    <ul className="mt-4 space-y-2">
                        {[{
                            label: 'Services',
                            link: '/services'
                        }, {
                            label: 'Client Stories',
                            link: '/client-stories'
                        }
                            , {
                            label: 'Open Source',
                            link: '//github.com/sharang-tech',
                            ext: true
                        }, {
                            label: 'About us',
                            link: '/about-us'
                        }, {
                            label: 'Careers',
                            link: '/career'
                        }].map((page, i) => <li key={i}>
                            <Link href={page.link} className="hover:text-blue-600 flex items-center gap-1 duration-300">
                                {page.label} {page.ext && <ArrowUpRight size={20} strokeWidth={1} />}
                            </Link>
                        </li>)}
                    </ul>
                </div>
                <div>
                    <p className="text-sm text-neutral-500">2. Connect</p>
                    <ul className="mt-4 space-y-2">
                        {[{
                            label: 'LinkedIn',
                            link: '//linkedin.com/sharanghq',
                            ext: true
                        }, {
                            label: 'Dribbble',
                            link: '//dribbble.com/sharanghq',
                            ext: true
                        }
                            , {
                            label: 'X',
                            link: '//x.com/sharanghq',
                            ext: true
                        }].map((page, i) => <li key={i}>
                            <Link href={page.link} className="hover:text-blue-600 flex items-center gap-1 duration-300">
                                {page.label} {page.ext && <ArrowUpRight size={20} strokeWidth={1} />}
                            </Link>
                        </li>)}
                    </ul>
                </div>
                <div>
                    <p className="text-sm text-neutral-500">3. Legal</p>
                    <ul className="mt-4 space-y-2">
                        {[{
                            label: 'Terms',
                            link: '/legal/terms'
                        }, {
                            label: 'Privacy',
                            link: '/legal/privacy'
                        }
                            , {
                            label: 'Data Handling',
                            link: '/legal/data-handling'
                        }].map((page, i) => <li key={i}>
                            <Link href={page.link} className="hover:text-blue-600 duration-300">
                                {page.label}
                            </Link>
                        </li>)}
                    </ul>
                </div>
                <div>

                </div>
            </div>
            <div className="py-5 border-t border-neutral-300">
                <p className="text-sm text-neutral-500">
                    &copy; Sharang Tech Labs. All rights reserved. Building stuffs since 2016.
                </p>
            </div>
        </footer>
    );
}

export default Footer;