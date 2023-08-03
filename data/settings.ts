import { TSupportFont } from "@/app/fonts"
import { TWordCase } from "@/types";

export const CAT_SEPARATOR = "+";

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
		title: "Chữ ngẫu nhiên",
		details: (categories: string[]) => `/random/${categories.join(CAT_SEPARATOR)}`
	},
	stories: {
		url: "/stories",
		desc: "",
		title: "Truyện ngắn"
	},
	char: {
		url: "/char",
		desc: "",
		title: "Chữ cái",
		details: (char: string) => `/char/${char}`
	},
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

export const fontsList: Array<{ family: TSupportFont, name: string }> = [
	{ family: "dancing", name: "Dancing Script" },
	{ family: "inter", name: "Inter" },
	{ family: "pacifico", name: "Pacifico" },
	{ family: "varela_round", name: "Varela Round" },
	{ family: "ysabeau", name: "Ysabeau" },
	{ family: "space_grotesk", name: "Space Grotesk" },
	{ family: "great_vibes", name: "Great Vibes" },
	{ family: "alegreya_Sans_SC", name: "Alegreya Sans SC" },
	{ family: "patrick_Hand", name: "Patrick Hand" },
	{ family: "mynerve", name: "Mynerve" },
]


/**
 * mode 0: highlighting compound vowels and consonants
 * mode 1: highlighting each character in the word
 * mode 2: no highlighting
*/
export const WORD_HIGHLIGHT = {
	COMPOUND: 0,
	CHAR: 1,
	NONE: 2,
}

export const characterSplitterMode = {
	[WORD_HIGHLIGHT.COMPOUND]: "T Á CH CH Ữ",
	[WORD_HIGHLIGHT.CHAR]: "T Á C H C H Ữ",
	[WORD_HIGHLIGHT.NONE]: "TÁCH CHỮ",
}

/**
 * These be configurable via Settings page
 */

type TDefaultSettings = {
	countDownNumber: { name: string, value: number }
	fontFamily: { name: string, value: TSupportFont }
	wordCase: { name: string, value: TWordCase }
	wordBold: { name: string, value: boolean }
	wordItalic: { name: string, value: boolean }
	characterSplitterMode: { name: string, value: number }
}

export const DEFAULT_SETTINGS: TDefaultSettings = {
	countDownNumber: { name: "countDownNumber", value: 15 },
	fontFamily: { name: "fontFamily", value: "inter" },
	wordCase: { name: "wordCase", value: "capitalize" },
	wordBold: { name: "wordBold", value: true },
	wordItalic: { name: "wordItalic", value: false },
	characterSplitterMode: { name: "characterSplitterMode", value: WORD_HIGHLIGHT.CHAR }
} as const

/**
 * Some dummy data
 */

export const sampleImg = "https://images.unsplash.com/photo-1690860131818-6794aa1e0ff7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1871&q=80"

