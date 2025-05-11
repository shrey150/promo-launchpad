import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Users, Briefcase, ChevronRight, Play, GraduationCap, Building } from "lucide-react"

export default function LandingPage() {
    return (
        <div className="flex min-h-screen flex-col bg-black text-white">
            {/* Header */}
            <header className="sticky top-0 z-40 w-full border-b border-zinc-800 bg-black/80 backdrop-blur-sm">
                <div className="container flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <GraduationCap className="h-6 w-6 text-lime-400" />
                        <span className="text-xl font-bold tracking-tight">ProMo Launchpad</span>
                    </div>
                    <nav className="hidden md:flex gap-6">
                        <Link href="#mentors" className="text-sm font-medium text-zinc-300 hover:text-white">
                            Partners
                        </Link>
                        <Link href="#about" className="text-sm font-medium text-zinc-300 hover:text-white">
                            About
                        </Link>
                        <Link href="#benefits" className="text-sm font-medium text-zinc-300 hover:text-white">
                            Benefits
                        </Link>
                        <Link href="#apply" className="text-sm font-medium text-zinc-300 hover:text-white">
                            Apply
                        </Link>
                    </nav>
                    <Button asChild>
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdWBW-l5_bQhrisW7_4xZzO1_dpZiGOS7EuBslNmeW7_vTnVw/viewform"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-lime-500 hover:bg-lime-400 text-black font-medium"
                        >
                            Apply Now
                        </a>
                    </Button>

                </div>
            </header>

            <main className="flex-1">
                {/* Hero Section with Video */}
                <section className="relative overflow-hidden py-20 md:py-32">
                    <div className="absolute inset-0 z-0 bg-gradient-to-b from-purple-900/20 via-lime-900/10 to-black/50"></div>
                    <div className="container relative z-10">
                        <div className="grid gap-8 md:grid-cols-2 items-center">
                            <div className="space-y-6">
                                <Badge className="bg-lime-500 hover:bg-lime-400 text-black font-medium px-3 py-1 text-sm">
                                    Applications Close May 24
                                </Badge>
                                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                                    Launch Your{" "}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-300">
                                        Product Management
                                    </span>{" "}
                                    Career
                                </h1>
                                <p className="text-xl text-zinc-400">
                                    A 6-week mentorship program for rising junior UMich students looking to break into product management
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button asChild size="lg">
                                        <a
                                            href="https://docs.google.com/forms/d/e/1FAIpQLSdWBW-l5_bQhrisW7_4xZzO1_dpZiGOS7EuBslNmeW7_vTnVw/viewform"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-lime-500 hover:bg-lime-400 text-black font-medium"
                                        >
                                            Apply Now
                                            <ChevronRight className="ml-2 h-4 w-4" />
                                        </a>
                                    </Button>
                                </div>
                            </div>
                            <div className="relative aspect-video overflow-hidden rounded-xl border-2 border-zinc-800 shadow-2xl shadow-lime-900/20 bg-zinc-900">
                                <video
                                    src="/ProMo_Launchpad.mp4"
                                    poster="/promo.png"
                                    controls
                                    className="w-full h-full object-cover"
                                />
                            </div>

                        </div>
                    </div>

                    {/* Tech pattern background */}
                    <div className="absolute inset-0 z-0 opacity-20">
                        <div className="h-full w-full bg-[radial-gradient(#84cc16_1px,transparent_1px)] [background-size:20px_20px]"></div>
                    </div>
                </section>

                {/* Industry Leaders Section */}
                <section id="mentors" className="py-16 bg-gradient-to-r from-purple-900/80 via-emerald-900/80 to-amber-900/80">
                    <div className="container">
                        <div className="text-center mb-10">
                            <p className="text-xl text-zinc-300 uppercase tracking-wider">Learn from Industry Leaders at</p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
                            <div className="flex flex-col items-center">
                                <div className="h-16 w-auto mb-2">
                                    <Image
                                        src="/google.png"
                                        alt="Google logo"
                                        width={120}
                                        height={64}
                                        className="h-full w-auto object-contain"
                                    />
                                </div>
                                <span className="text-zinc-400 text-sm">Google</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="h-16 w-auto mb-2">
                                    <Image
                                        src="/mico.png"
                                        alt="Microsoft logo"
                                        width={120}
                                        height={64}
                                        className="h-full w-auto object-contain"
                                    />
                                </div>
                                <span className="text-zinc-400 text-sm">Microsoft</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="h-16 w-auto mb-2">
                                    <Image
                                        src="/uber.png"
                                        alt="Uber logo"
                                        width={120}
                                        height={64}
                                        className="h-full w-auto object-contain"
                                    />
                                </div>
                                <span className="text-zinc-400 text-sm">Uber</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="h-16 w-auto mb-2">
                                    <Image
                                        src="/cap.png"
                                        alt="Capital One Logo"
                                        width={120}
                                        height={64}
                                        className="h-full w-auto object-contain"
                                    />
                                </div>
                                <span className="text-zinc-400 text-sm">Capital One</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Info Section */}
                <section id="about" className="py-16 border-t border-zinc-800">
                    <div className="container">
                        <div className="mx-auto max-w-2xl text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Accelerate Your PM Career</h2>
                            <p className="mt-4 text-zinc-400">
                                ProMo Launchpad is an exclusive program designed for UMich students interested in product management
                                roles
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-3">
                            <Card className="bg-zinc-900 border-zinc-800">
                                <CardContent className="pt-6">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-lime-900/20">
                                        <Calendar className="h-6 w-6 text-lime-400" />
                                    </div>
                                    <h3 className="text-xl font-bold">6-Week Program</h3>
                                    <p className="mt-2 text-zinc-400">Online summer program designed to fit your schedule</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-zinc-900 border-zinc-800">
                                <CardContent className="pt-6">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-lime-900/20">
                                        <Clock className="h-6 w-6 text-lime-400" />
                                    </div>
                                    <h3 className="text-xl font-bold">Application Deadline</h3>
                                    <p className="mt-2 text-zinc-400">Applications close on May 24th. Limited spots available.</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-zinc-900 border-zinc-800">
                                <CardContent className="pt-6">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-lime-900/20">
                                        <Users className="h-6 w-6 text-lime-400" />
                                    </div>
                                    <h3 className="text-xl font-bold">Exclusive Cohort</h3>
                                    <p className="mt-2 text-zinc-400">Only accepting 5 rising juniors for this exclusive opportunity</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section id="benefits" className="py-16 bg-zinc-900">
                    <div className="container">
                        <div className="mx-auto max-w-2xl text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Program Benefits</h2>
                            <p className="mt-4 text-zinc-400">
                                Gain the skills, connections, and experience needed to land coveted APM/PM roles
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2">
                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-lime-900/20">
                                    <Briefcase className="h-6 w-6 text-lime-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Resume Prep Workshops</h3>
                                    <p className="mt-2 text-zinc-400">
                                        Craft a standout PM resume with tips from students who’ve landed PM internships at top tech companies
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-lime-900/20">
                                    <Users className="h-6 w-6 text-lime-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">1:1 Career Mentorship</h3>
                                    <p className="mt-2 text-zinc-400">
                                        Get personalized career guidance from PMs interns at top tech companies who will help you navigate your
                                        career path
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-lime-900/20">
                                    <Building className="h-6 w-6 text-lime-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Industry Connections</h3>
                                    <p className="mt-2 text-zinc-400">
                                        Build your network with PM interns from Microsoft, Google, Capital One and other leading companies
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-lime-900/20">
                                    <GraduationCap className="h-6 w-6 text-lime-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">APM/PM Interview Prep</h3>
                                    <p className="mt-2 text-zinc-400">
                                        Master product case interviews, technical questions, and behavioral interviews with coaching
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section id="apply" className="py-16 bg-gradient-to-b from-black to-emerald-950">
                    <div className="container">
                        <div className="mx-auto max-w-3xl text-center">
                            <Badge className="mb-4 bg-lime-500 hover:bg-lime-400 text-black font-medium px-3 py-1 text-sm">
                                Only 5 Spots Available
                            </Badge>
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Ready to Launch Your PM Career?</h2>
                            <p className="mb-8 text-zinc-300">
                                Applications for ProMo Launchpad close on May 24th. Don't miss your chance to join this exclusive
                                program.
                            </p>
                            <Button asChild size="lg">
                                <a
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSdWBW-l5_bQhrisW7_4xZzO1_dpZiGOS7EuBslNmeW7_vTnVw/viewform"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-lime-500 hover:bg-lime-400 text-black font-medium"
                                >
                                    Apply Now
                                    <ChevronRight className="ml-2 h-4 w-4" />
                                </a>
                            </Button>

                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t border-zinc-800 py-8">
                <div className="container flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center gap-2 mb-4 md:mb-0">
                        <GraduationCap className="h-5 w-5 text-lime-400" />
                        <span className="text-lg font-bold">ProMo Launchpad</span>
                    </div>
                    <div className="text-zinc-400 text-sm">
                        © {new Date().getFullYear()} ProMo Launchpad. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    )
}
