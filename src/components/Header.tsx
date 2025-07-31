"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import React from "react";

const Header: React.FC = () => {
	const [isMobile, setIsMobile] = useState(true);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// hook to manage the window's size
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};
		handleResize();

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<header
			className={`z-999 flex p-3 bg-indigo-900 max-h-[64px] text-white sticky top-0 ${
				isMobile ? "justify-between" : "justify-around"
			}`}
		>
			<div className="flex justify-center items-center cursor-pointer">
				<Link href="/" className="text-xl font-extralight">
					Medi.ar
				</Link>
			</div>

			{isMobile ? (
				<>
					{isMenuOpen ? (
						<>
							<nav className="flex absolute bg-indigo-900 p-4 w-full top-0 right-0 shadow-md flex-col">
								<X
									onClick={() => setIsMenuOpen(false)}
									className="self-end cursor-pointer"
								/>
								<div className="flex items-center cursor-pointer mb-5">
									<Link
										href="/"
										onClick={() => setIsMenuOpen(false)}
										className="text-xl font-extralight"
									>
										Medi.ar
									</Link>
								</div>
								<ul className="flex flex-col p-2 font-light gap-10 items-center">
									<li className="hover:underline hover:text-lg cursor-pointer transition-all duration-300">
										¿Qué es medi.ar?
									</li>
									<Link
										href="/register"
										className="hover:underline hover:text-lg cursor-pointer transition-all duration-300"
										onClick={() => setIsMenuOpen(false)}
									>
										¡Creá tu cuenta gratis!
									</Link>
									<li className="hover:underline hover:text-lg cursor-pointer transition-all duration-300">
										Contacto
									</li>
								</ul>
								<span className="flex items-center justify-center mt-5 text-black">
									<Link
										href="/login"
										onClick={() => setIsMenuOpen(false)}
										className="cursor-pointer font-extralight p-2 pl-4 pr-4 bg-emerald-300 rounded-xs hover:bg-emerald-800 hover:text-white transition-all duration-300"
									>
										Iniciar sesión
									</Link>
								</span>
							</nav>
						</>
					) : (
						<Menu
							size={30}
							onClick={() => setIsMenuOpen(true)}
							className="cursor-pointer"
						/>
					)}
				</>
			) : (
				<>
					<nav>
						<ul className="flex p-2 font-light gap-10">
							<li className="hover:underline hover:text-lg cursor-pointer transition-all duration-300">
								¿Qué es medi.ar?
							</li>
							<Link
								href="/register"
								className="hover:underline hover:text-lg cursor-pointer transition-all duration-300"
							>
								¡Creá tu cuenta gratis!
							</Link>
							<li className="hover:underline hover:text-lg cursor-pointer transition-all duration-300">
								Contacto
							</li>
						</ul>
					</nav>
					<span className="flex items-center text-black">
						<Link
							href="/login"
							className="cursor-pointer font-extralight p-2 pl-4 pr-4 bg-emerald-300 rounded-xs hover:bg-emerald-800 hover:text-white transition-all duration-300"
						>
							Iniciar sesión
						</Link>
					</span>
				</>
			)}
		</header>
	);
};

export default Header;
