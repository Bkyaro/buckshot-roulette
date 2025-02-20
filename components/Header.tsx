"use client";

import { GradualSpacing } from "@/components/eldoraui/morphingtext";

export function Header() {
	return (
		<GradualSpacing
			className="font-display text-center text-4xl font-bold -tracking-widest  text-black dark:text-white md:text-7xl md:leading-[5rem]"
			text="恶魔轮盘挑战赛-道具说明"
		/>
	);
}
