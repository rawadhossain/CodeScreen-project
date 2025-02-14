import Link from 'next/link';
import { ModeToggle } from './ModeToggle';
import { CodeIcon } from 'lucide-react';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import DasboardBtn from './DashBoardButton';
import Image from 'next/image';
import { Button } from './ui/button';

function Navbar() {
    return (
        <nav className="border-b">
            <div className="flex h-16 items-center px-4 container mx-auto">
                {/* LEFT SIDE -LOGO */}
                <SignedIn>
                    <Link
                        href="/home"
                        className="flex items-center gap-2 font-semibold text-2xl mr-6 font-mono hover:opacity-80 transition-opacity"
                    >
                        <div className="flex justify-center items-center h-full w-auto max-w-[80px]">
                            <Image
                                src={'/logo.svg'}
                                alt="logo"
                                width={100} // Control max width
                                height={60} // Control max height
                                className="object-contain max-h-full w-auto"
                            />
                        </div>
                        <span className="bg-gradient-to-r from-teal-400 to-blue-600 bg-clip-text text-transparent">
                            CodeScreen
                        </span>
                    </Link>
                </SignedIn>

                <SignedOut>
                    <Link
                        href="/"
                        className="flex items-center gap-2 font-semibold text-2xl mr-6 font-mono hover:opacity-80 transition-opacity"
                    >
                        <div className="flex justify-center items-center h-full w-auto max-w-[80px]">
                            <Image
                                src={'/logo.svg'}
                                alt="logo"
                                width={100} // Control max width
                                height={60} // Control max height
                                className="object-contain max-h-full w-auto"
                            />
                        </div>
                        <span className="bg-gradient-to-r from-teal-400 to-blue-600 bg-clip-text text-transparent">
                            CodeScreen
                        </span>
                    </Link>
                </SignedOut>

                {/* RIGHT SIDE - ACTIONS */}

                <div className="flex items-center ml-auto mr-5">
                    <SignedIn>
                        <div className="flex items-center space-x-4">
                            <DasboardBtn />
                            <ModeToggle />
                            <UserButton />
                        </div>
                    </SignedIn>

                    <SignedOut>
                        <SignInButton>
                            <Button variant="ocean">Sign In</Button>
                        </SignInButton>
                    </SignedOut>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;
