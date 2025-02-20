import { Perks } from "@/components/Perks";

import { PackageSearch, Settings, Eye } from "lucide-react";
import Beer from "../assets/beer.jpg";
import Phone from "../assets/phone.jpg";
import Hacksaw from "../assets/hacksaw.jpg";
import Adrenalin from "../assets/adrenalin.jpg";
import Cigarette from "../assets/cigarette.jpg";
import ExpiredMed from "../assets/expiredMed.jpg";
import Handcuff from "../assets/handcuff.jpg";
import Inverter from "../assets/inverter.jpg";
import Magnifier from "../assets/magnifier.jpg";

export default function Home() {
	const datas = [
		{
			id: 1,
			image: Beer,
			title: "啤酒",
			content: "将当前的子弹退膛",
			icon: <Settings className="size-6 text-primary" />,
		},
		{
			id: 2,
			image: Phone,
			title: "手机",
			content: "预知随机位置的一发子弹虚实（根据当前弹夹计算）",
			icon: <Settings className="size-6 text-primary" />,
		},
		{
			id: 3,
			image: Hacksaw,
			title: "短锯",
			content: "下一发子弹造成2点伤害（如果是实弹）",
			icon: <Settings className="size-6 text-primary" />,
		},
		{
			id: 4,
			image: Adrenalin,
			title: "肾上腺素",
			content: "选择并偷走对方的一件物品并立即使用",
			icon: <Settings className="size-6 text-primary" />,
		},
		{
			id: 5,
			image: Cigarette,
			title: "香烟",
			content: "恢复一点血量",
			icon: <Settings className="size-6 text-primary" />,
		},
		{
			id: 6,
			image: ExpiredMed,
			title: "过期药",
			content: "50%的几率恢复2点血量，或者50%的几率失去1点血量",
			icon: <Settings className="size-6 text-primary" />,
		},
		{
			id: 7,
			image: Handcuff,
			title: "手铐",
			content: "强制让对手跳过一个行动回合",
			icon: <Settings className="size-6 text-primary" />,
		},
		{
			id: 8,
			image: Inverter,
			title: "转换器",
			content: "将当前的子弹虚实逆转",
			icon: <Settings className="size-6 text-primary" />,
		},
		{
			id: 9,
			image: Magnifier,
			title: "放大镜",
			content: "查看当前子弹虚实",
			icon: <Settings className="size-6 text-primary" />,
		},
	];

	return <Perks data={datas} />;
}
