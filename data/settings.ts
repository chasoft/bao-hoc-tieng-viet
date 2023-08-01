import { TSupportFont } from "@/app/fonts"

export const urls = {
	home: {
		url: "/",
		desc: "",
		title: "Trang chủ"
	},
	settings: {
		url: "/settings",
		desc: "",
		title: "Cấu hình"
	},
	alphabets: {
		url: "/alphabets",
		desc: "",
		title: "Bảng chữ cái"
	},
	consonants: {
		url: "/consonants",
		desc: "",
		title: "Phụ Âm"
	},
	vowels: {
		url: "/vowels",
		desc: "",
		title: "Nguyên Âm"
	},
	random: {
		url: "/random",
		desc: "",
		title: "Chữ ngẫu nhiên"
	},
	stories: {
		url: "/stories",
		desc: "",
		title: "Truyện ngắn"
	},
}

export const displaySettings = {
	"wordBold": true,
	"wordItalic": false,
	"wordCase": "uppercase",
}

export const homeDestinations = [
	urls.alphabets,
	urls.vowels,
	urls.consonants,
	urls.random,
]

export const mainMenuItems = [
	urls.home,
	urls.alphabets,
	urls.vowels,
	urls.consonants,
	urls.random,
]

export const fontsList: Array<{ family: TSupportFont, name: string}> = [
	{ family: "dancing" , name: "Dancing Script"},
	{ family: "inter" , name: "Inter"},
	{ family: "pacifico" , name: "Pacifico"},
   { family: "varela_round", name: "Varela Round" },
   { family: "ysabeau" , name: "Ysabeau"},
   { family: "space_grotesk" , name: "Space Grotesk"},
   { family: "great_vibes" , name: "Great Vibes"},
   { family: "alegreya_Sans_SC" , name: "Alegreya Sans SC"},
   { family: "patrick_Hand" , name: "Patrick Hand"},
   { family: "mynerve" , name: "Mynerve"},
]
