import type { Menu } from "@/app/api/menu/route";

export class Api {
	private url: string;

	constructor() {
		this.url = process.env.NEXT_PUBLIC_API_URL || "";
	}

	private async fetch(url: string) {
		const response = await fetch(url);
		return await response.json();
	}

	async getMenu(): Promise<Menu> {
		return await this.fetch(`${this.url}/menu`);
	}
}
