'use client';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { SignInButton, SignedIn, SignedOut } from '@clerk/nextjs';
import {
    BarChart2,
    Calendar,
    ChevronRight,
    FileText,
    FullscreenIcon,
    MessageCircleCodeIcon,
} from 'lucide-react';
import Link from 'next/link';
import faqs from '../data/faqs.json';

import Footer from '@/components/footer';

const features = [
    {
        icon: Calendar,
        title: 'Schedule Meeting',
        description:
            'Easily schedule and manage meetings with a seamless, intuitive platform built for efficiency and collaboration.',
    },
    {
        icon: FullscreenIcon,
        title: 'Present Your Code',
        description:
            'Present your code with confidence using a powerful editor supporting markdown, formatting, and more.',
    },
    {
        icon: MessageCircleCodeIcon,
        title: 'Review Analytics',
        description:
            'Analyze and gain insights from your coding interviews with comprehensive analytics and reporting features.',
    },
];

export default function LandingPage() {
    return (
        <>
            <div className="relative container mx-auto px-4 pt-16 pb-16 text-gray-200">
                {/* Hero Section */}
                <div className="max-w-5xl mx-auto text-center space-y-8">
                    <h1 className="text-4xl md:text-7xl lg:text-7xl gradient-title mb-6">
                        Streamline Interviews with "CodeScreen".
                    </h1>
                    <p className="text-lg md:text-xl text-cyan-200 mb-8">
                        Easily schedule, conduct, and provide feedback on coding
                        interviews with a seamless, intuitive platform built for
                        efficiency and collaboration.
                    </p>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none z-10" />
                        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-4 max-full mx-auto border border-teal-500/20">
                            <div className="border-b border-teal-500/20 pb-4 mb-4 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-5 w-5 text-cyan-400" />
                                    <span className="text-cyan-200 font-medium">
                                        Schedule your interview
                                    </span>
                                </div>
                                <div className="flex gap-2">
                                    <div className="h-3 w-3 rounded-full bg-blue-400/30" />
                                    <div className="h-3 w-3 rounded-full bg-blue-400/50" />
                                    <div className="h-3 w-3 rounded-full bg-blue-400/70" />
                                </div>
                            </div>
                            <div className="space-y-4 p-4">
                                <Skeleton className="h-4 bg-cyan-400/20 rounded w-3/4" />
                                <Skeleton className="h-4 bg-cyan-400/20 rounded w-full" />
                                <Skeleton className="h-4 bg-cyan-400/20 rounded w-2/3" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center gap-4">
                        <SignedIn>
                            <Link href="/home">
                                <Button
                                    variant="ocean"
                                    className="px-8 py-6 rounded-full flex items-center gap-2"
                                >
                                    Start <ChevronRight className="h-5 w-5" />
                                </Button>
                            </Link>
                        </SignedIn>

                        <SignedOut>
                            <SignInButton>
                                <Button
                                    variant="ocean"
                                    className="px-8 py-6 rounded-full flex items-center gap-2"
                                >
                                    Start <ChevronRight className="h-5 w-5" />
                                </Button>
                            </SignInButton>
                        </SignedOut>

                        <Link href="#features">
                            <Button
                                variant="outline"
                                className="px-8 py-6 rounded-full border-blue-600 text-blue-100 hover:bg-blue-800/10 hover:text-blue-200 "
                            >
                                Learn More
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Feature Cards */}
                <section
                    id="features"
                    className="mt-24 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            className="bg-gray-900/50 backdrop-blur-sm border-teal-500/20"
                        >
                            <CardContent className="p-6">
                                <div className="h-12 w-12 bg-teal-900/50 rounded-full flex items-center justify-center mb-4">
                                    <feature.icon className="h-6 w-6 text-cyan-400" />
                                </div>
                                <h3 className="font-semibold text-xl text-cyan-300 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-300">
                                    {feature.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </section>

                <div className="space-y-24 mt-24">
                    {/* Feature 1 */}
                    <div className="grid md:grid-cols-2 gap-12 ">
                        <div className="space-y-6">
                            <div className="h-12 w-12 bg-teal-900/50 rounded-full flex items-center justify-center">
                                <FileText className="h-6 w-6 text-cyan-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-cyan-300">
                                Rich Text Editor
                            </h3>
                            <p className="text-lg text-blue-200">
                                Express yourself fully with our powerful editor
                                featuring:
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-cyan-400" />
                                    <span>Format text with ease</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-cyan-400" />
                                    <span>Embed links</span>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-4 bg-gray-900/50 rounded-2xl shadow-xl p-6 border border-teal-500/20">
                            {/* Editor Preview */}
                            <div className="flex gap-2 mb-6">
                                <div className="h-8 w-8 rounded bg-teal-900/50"></div>
                                <div className="h-8 w-8 rounded bg-teal-900/50"></div>
                                <div className="h-8 w-8 rounded bg-teal-900/50"></div>
                            </div>
                            <div className="h-4 bg-neutral-400 rounded w-3/4"></div>
                            <div className="h-4 bg-neutral-400 rounded w-full"></div>
                            <div className="h-4 bg-neutral-400 rounded w-2/3"></div>
                            <div className="h-4 bg-neutral-400 rounded w-1/3"></div>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="grid md:grid-cols-2 gap-12 md:flex-row-reverse">
                        <div className="space-y-6 md:order-2">
                            <div className="h-12 w-12 bg-teal-900/50 rounded-full flex items-center justify-center">
                                <BarChart2 className="h-6 w-6 text-cyan-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-cyan-200">
                                Code Analytics
                            </h3>
                            <p className="text-lg text-cyan-300">
                                Track your interview performance:
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-cyan-400" />
                                    <span>Visual mood trends</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-cyan-400" />
                                    <span>Pattern recognition</span>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-4 bg-gray-900/50 rounded-2xl shadow-xl p-6 border border-cyan-500/20 md:order-1">
                            {/* Analytics Preview */}
                            <div className="h-40 bg-gradient-to-t from-cyan-900/50 to-cyan-50 rounded-lg"></div>
                            <div className="flex justify-between">
                                <div className="h-4 w-16 bg-cyan-900/50 rounded"></div>
                                <div className="h-4 w-16 bg-cyan-900/50 rounded"></div>
                                <div className="h-4 w-16 bg-cyan-900/50 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-24">
                    <h2 className="text-3xl font-bold text-center text-cyan-300 mb-12">
                        Frequently Asked Questions
                    </h2>
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full mx-auto"
                    >
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-cyan-200 text-lg">
                                    {faq.q}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-100">
                                    {faq.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                {/* CTA Section */}
                <div className="mt-24">
                    <Card className="bg-gradient-to-r from-gray-900 to-blue-900/30 backdrop-blur-sm border-blue-300">
                        <CardContent className="p-12 text-center">
                            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-cyan-400 relative">
                                Schedule your Interview now!
                            </h2>
                            <p className="pt-3 text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                                Join thousands of writers who have already
                                discovered the power of digital journaling.
                            </p>
                            <SignedIn>
                                <Link href="/dashboard">
                                    <Button
                                        size="lg"
                                        variant="default"
                                        className="animate-bounce bg-gradient-to-br from-teal-400 to-blue-600 hover:bg-blue-700 text-white"
                                    >
                                        Get Started for Free
                                        <ChevronRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            </SignedIn>
                            <SignedOut>
                                <Link href="/sign-in">
                                    <Button
                                        size="lg"
                                        variant="default"
                                        className="animate-bounce bg-gradient-to-br from-teal-400 to-blue-600 hover:bg-blue-700 text-white"
                                    >
                                        Get Started for Free
                                        <ChevronRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            </SignedOut>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <Footer />
        </>
    );
}
