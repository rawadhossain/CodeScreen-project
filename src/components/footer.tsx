import React from 'react';
import Link from 'next/link'; // Import Link from Next.js
import { Button } from './ui/button';

const Footer: React.FC = () => {
    return (
        <footer
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
            id="el-es3ih0fa"
        >
            <div
                className="grid grid-cols-1 md:grid-cols-4 gap-8"
                id="el-0qcl7jzk"
            >
                {/* Brand Section */}
                <div className="space-y-4" id="el-03f430df">
                    <div className=" ">
                        <img
                            className="h-10 w-auto transition-opacity duration-300 opacity-100"
                            src={'/logo.svg'}
                            alt="Image unavailable"
                            loading="lazy"
                            id="el-rueslskg"
                        />{' '}
                        <span className="bg-gradient-to-r from-teal-400 to-blue-600 bg-clip-text text-transparent">
                            CodeScreen
                        </span>
                    </div>
                    <p className="text-neutral-400 text-sm" id="el-8haw9k7m">
                        Checkout Socials here
                    </p>
                    <div className="flex space-x-4" id="el-fxkiifgb">
                        <Link
                            href="https://x.com/RawadHossain"
                            className="text-neutral-400 hover:text-cyan-500 transition-colors duration-300"
                            id="el-yzk5octr"
                            target="_blank"
                            aria-label="Twitter"
                        >
                            {/* Twitter SVG */}
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                            </svg>
                        </Link>
                        <Link
                            href="https://facebook.com/rawadhossain"
                            className="text-neutral-400 hover:text-cyan-500 transition-colors duration-300"
                            id="el-4yj7vao9"
                            target="_blank"
                            aria-label="Facebook"
                        >
                            {/* Facebook SVG */}
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"></path>
                            </svg>
                        </Link>
                        <Link
                            href="https://github.com/rawadhossain"
                            className="text-neutral-400 hover:text-cyan-500 transition-colors duration-300"
                            id="el-svt7yxzv"
                            target="_blank"
                            aria-label="GitHub"
                        >
                            {/* GitHub SVG */}
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Quick Links */}
                <div id="el-vie529jo">
                    <h3
                        className="text-white font-semibold mb-4"
                        id="el-86u1pwa2"
                    >
                        Quick Links
                    </h3>
                    <ul className="space-y-2" id="el-9asdos6u">
                        <li id="el-m471suek">
                            <Link
                                href="/"
                                className="text-neutral-400 hover:text-cyan-500 transition-colors duration-300"
                                id="el-qodypbo0"
                            >
                                Home
                            </Link>
                        </li>
                        <li id="el-8db4uqjj">
                            <Link
                                href="/"
                                className="text-neutral-400 hover:text-cyan-500 transition-colors duration-300"
                                id="el-vp2qf9an"
                            >
                                Features
                            </Link>
                        </li>
                        <li id="el-8mrrueaw">
                            <Link
                                href="/"
                                className="text-neutral-400 hover:text-cyan-500 transition-colors duration-300"
                                id="el-256ssqcy"
                            >
                                Testimonials
                            </Link>
                        </li>
                        <li id="el-phqsoro3">
                            <Link
                                href="/"
                                className="text-neutral-400 hover:text-cyan-500 transition-colors duration-300"
                                id="el-tr6l9et6"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Legal */}
                <div id="el-jid2ncwd">
                    <h3
                        className="text-white font-semibold mb-4"
                        id="el-gvntv1ws"
                    >
                        Legal
                    </h3>
                    <ul className="space-y-2" id="el-ga41frnq">
                        <li id="el-cizjhhco">
                            <Link
                                href="/"
                                className="text-neutral-400 hover:text-cyan-500 transition-colors duration-300"
                                id="el-4cbojlyx"
                            >
                                Privacy Policy
                            </Link>
                        </li>
                        <li id="el-ixikqq5j">
                            <Link
                                href="/"
                                className="text-neutral-400 hover:text-cyan-500 transition-colors duration-300"
                                id="el-mjcpf6d2"
                            >
                                Terms of Service
                            </Link>
                        </li>
                        <li id="el-qni191ja">
                            <Link
                                href="/"
                                className="text-neutral-400 hover:text-cyan-500 transition-colors duration-300"
                                id="el-w52qix8i"
                            >
                                Cookie Policy
                            </Link>
                        </li>
                        <li id="el-tx5hexqk">
                            <Link
                                href="/"
                                className="text-neutral-400 hover:text-cyan-500 transition-colors duration-300"
                                id="el-ofkm0pd4"
                            >
                                GDPR
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div id="el-l75hwqgb">
                    <h3
                        className="text-white font-semibold mb-4"
                        id="el-lmq57ons"
                    >
                        Stay Updated
                    </h3>
                    <p
                        className="text-neutral-400 text-sm mb-4"
                        id="el-qbbzvuni"
                    >
                        Subscribe for the latest updates.
                    </p>
                    <form className="space-y-4" id="el-j1e6l7kt">
                        <div className="relative" id="el-lm8npevx">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-cyan-500 text-white transition-colors duration-300"
                                id="el-n9uy9pnr"
                            />
                        </div>
                        <Button
                            variant="ocean"
                            // <Button
                            //     type="submit"
                            className="w-full px-4 "
                            id="el-g7quqn68"
                        >
                            Subscribe
                        </Button>
                    </form>
                </div>
            </div>

            {/* Bottom Bar */}
            <div
                className="border-t border-neutral-800 mt-12 pt-8"
                id="el-bx2bvlhl"
            >
                <p
                    className="text-center text-neutral-400 text-sm"
                    id="el-wprjj8pn"
                >
                    © 2025 CodeScreen. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
