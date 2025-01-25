import { NextResponse } from "next/server";

export type Menu = {
	logo: string;
	options: MenuOption[];
};

type MenuOption = {
	label: string;
	img: string;
	items: MenuOptionItem[];
};

type MenuOptionItem = {
	label: string;
	description: string;
};

export async function GET(): Promise<NextResponse<Menu>> {
	const menu = {
		logo: "sarasa",
		options: [
			{
				label: "Resina",
				img: "resina",
				items: [
					{
						label: "Llaveros",
						description: "Llaveros de resina",
					},
					{
						label: "Adornos",
						description: "Adornos de resina",
					},
					{
						label: "Otros",
						description: "Otros productos de resina",
					},
				],
			},
			{
				label: "Duendes",
				img: "duendes",
				items: [
					{
						label: "Duendes de porcelana",
						description: "Duendes de porcelana",
					},
					{
						label: "Duendes de tela",
						description: "Duendes de tela",
					},
				],
			},
			{
				label: "Crochet",
				img: "crochet",
				items: [
					{
						label: "Ropa",
						description: "Ropa en crochet de lana a tu medida",
					},
					{
						label: "Amigurumis",
						description:
							"Amigurumis en crochet para acompañar a los mas pequeños",
					},
					{
						label: "Ropa de bebe",
						description: "Ropa de bebe en crochet",
					},
				],
			},
		],
	};
	return NextResponse.json(menu);
}
