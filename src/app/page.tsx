import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
} from "@/components/ui/carousel";
import { Montserrat, Playfair, Playwrite_IN } from "next/font/google";
import React from "react";
import Image from "next/image";
import amigurumis from "@/public/amigurumis";
import duendes from "@/public/duendes";

const geistSans = Montserrat({
	subsets: ["latin"],
});

const playfair = Playfair({
	subsets: ["latin"],
	style: "italic",
});

const playwrite = Playwrite_IN({});

export default async function Home() {
	return (
		<article className="grid gap-20">
			<section className="bg-slate-100 rounded-md p-4">
				<div className="w-full h-auto text-center text-2xl gap-2 grid">
					<h1 className={`${geistSans.className}`}>
						Amigurumis, crochet, duendes y trabajos en resina.
					</h1>
					<h2 className={`${geistSans.className}`}>
						Máxima personalización y calidad todo en
					</h2>
					<div className="mt-6">
						<strong
							className={`${playwrite.className} text-5xl text-violet-500`}
						>
							Silka Crochet
						</strong>
					</div>
				</div>
			</section>
			<section className={`${playwrite.className} text-2xl grid gap-6`}>
				<h2 className="font-bold text-3xl">Amigurumis</h2>
				<p
					className={`${geistSans.className} text-base bg-slate-50 p-4 rounded-md`}
				>
					Técnica realizada a mano con mucho amor! Creamos amigurumis que son
					mas que un simple peluche de hilo. Es un muñeco de apego que sera tú
					amigo y consuelo. Nos acompaña y despierta nuestros sentimientos desde
					pequeños. animate, regala o regalate tu amigurumis un amigo único y
					especial en tu vida!
				</p>
				<Carousel className="w-[95vw]">
					<CarouselContent>
						{amigurumis.map((image, index) => (
							<CarouselItem
								className="basis-11/12 sm:basis-1/3 md:basis-1/5 cursor-pointer"
								key={index.toString()}
							>
								<div className="flex flex-col flex-grow relative w-auto h-96 border-4 border-solid border-violet-300 rounded-md shadow-md">
									<Image src={image} alt="123" className="bg-img" />
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</section>
			<section className={`${playwrite.className} text-2xl grid gap-6`}>
				<h2 className="font-bold text-3xl">Duendes</h2>
				<p
					className={`${geistSans.className} text-base bg-slate-50 p-4 rounded-md`}
				>
					Hacemos el duende que ilumine tu vida, tu casa, tu camino. Cuidará de
					ti y a todos los que te rodean. Haz un sendero de luz y deja que todo
					brille!
				</p>
				<Carousel className="w-[95vw]">
					<CarouselContent>
						{duendes.map((image, index) => (
							<CarouselItem
								className="basis-11/12 sm:basis-1/3 md:basis-1/5 cursor-pointer"
								key={index.toString()}
							>
								<div className="flex flex-col flex-grow relative w-auto h-96 border-4 border-solid border-violet-300 rounded-md shadow-md">
									<Image src={image} alt="123" className="bg-img" />
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</section>
			<section className={`${playwrite.className} text-2xl grid gap-6`}>
				<h2 className="font-bold text-3xl">Ropa en crochet</h2>
				<p
					className={`${geistSans.className} text-base bg-slate-50 p-4 rounded-md`}
				>
					Hacemos el duende que ilumine tu vida, tu casa, tu camino. Cuidará de
					ti y a todos los que te rodean. Haz un sendero de luz y deja que todo
					brille!
				</p>
				<Carousel className="w-[95vw]">
					<CarouselContent>
						{duendes.map((image, index) => (
							<CarouselItem
								className="basis-11/12 sm:basis-1/3 md:basis-1/5 cursor-pointer"
								key={index.toString()}
							>
								<div className="flex flex-col flex-grow relative w-auto h-96 border-4 border-solid border-violet-300 rounded-md shadow-md">
									<Image src={image} alt="123" className="bg-img" />
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</section>
			<section className={`${playwrite.className} text-2xl grid gap-6`}>
				<h2 className="font-bold text-3xl">Resina</h2>
				<p
					className={`${geistSans.className} text-base bg-slate-50 p-4 rounded-md`}
				>
					Una manera genial y diferente para crear con colores, flores, fotos y
					textos. Creamos tus souvenirs para eventos, tus 15 o la edad que
					celébres para dar a tus invitados algo único personalizado como
					llaveros, marcadores, números e iniciales
				</p>
				<Carousel className="w-[95vw]">
					<CarouselContent>
						{duendes.map((image, index) => (
							<CarouselItem
								className="basis-11/12 sm:basis-1/3 md:basis-1/5 cursor-pointer"
								key={index.toString()}
							>
								<div className="flex flex-col flex-grow relative w-auto h-96 border-4 border-solid border-violet-300 rounded-md shadow-md">
									<Image src={image} alt="123" className="bg-img" />
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</section>
		</article>
	);
}
