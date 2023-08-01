type TMark = "´" | "`" | "ˀ" | "~" | "."

export const VOWELS = [
	"b",
	"c",
	"d",
	"đ",
	"g",
	"h",
	"k",
	"l",
	"m",
	"n",
	"p",
	"q",
	"r",
	"s",
	"t",
	"v",
	"x",
	"y",
]

export const COMPOUND_VOWELS: Array<TChar> = [
	{ char: "ch", reading: "chờ" },
	{ char: "kh", reading: "khờ" },
	{ char: "nh", reading: "nhờ" },
	{ char: "th", reading: "thờ" },
	{ char: "ph", reading: "pờ" },
	{ char: "gh", reading: "gờ" },
	{ char: "ng", reading: "ngờ đơn" },
	{ char: "ngh", reading: "ngờ ghép" },
	{ char: "tr", reading: "trờ" },
	{ char: "gi", reading: "gờ" },
	{ char: "qu", reading: "quờ" }
]

export const CONSONANTS = [
	"a", "á", "à", "ả", "ã", "ạ", "ă", "ắ", "ằ", "ẳ", "ẵ", "ặ", "â", "ấ", "ầ", "ẩ", "ẫ", "ậ",
	"e", "é", "è", "ẻ", "ẽ", "ẹ", "ế", "ề", "ể", "ễ", "ệ",
	"i", "í", "í", "ỉ", "ĩ", "ị",
	"o", "ó", "ò", "ỏ", "õ", "ọ", "ố", "ồ", "ổ", "ỗ", "ộ", "ơ", "ớ", "ờ", "ở", "ỡ", "ợ",
	"u", "ú", "ù", "ủ", "ũ", "ụ", "ư", "ứ", "ừ", "ử", "ữ", "ự",
]

export const COMPOUND_CONSONANTS = [
	"iê",
	"yê",
	"uô",
	"ươ"
]


export type TChar = {
	char: string,
	reading: string,
}

export const ALPHABETS: Array<TChar> = [
	{ char: "a", reading: "a" },
	{ char: "ă", reading: "á" },
	{ char: "â", reading: "ớ" },
	{ char: "b", reading: "bờ" },
	{ char: "c", reading: "cờ" },
	{ char: "d", reading: "dờ" },
	{ char: "đ", reading: "đờ" },
	{ char: "e", reading: "e" },
	{ char: "ê", reading: "ê" },
	{ char: "g", reading: "gờ" },
	{ char: "h", reading: "hờ" },
	{ char: "i", reading: "i" },
	{ char: "k", reading: "ca" },
	{ char: "l", reading: "lờ" },
	{ char: "m", reading: "mờ" },
	{ char: "n", reading: "nờ" },
	{ char: "o", reading: "o" },
	{ char: "ô", reading: "ô" },
	{ char: "ơ", reading: "ơ" },
	{ char: "p", reading: "pờ" },
	{ char: "q", reading: "qui" },
	{ char: "r", reading: "rờ" },
	{ char: "s", reading: "sờ" },
	{ char: "t", reading: "tờ" },
	{ char: "u", reading: "u" },
	{ char: "ư", reading: "ư" },
	{ char: "v", reading: "vờ" },
	{ char: "x", reading: "xờ" },
	{ char: "y", reading: "y" },
]

export const ALPHABETS_EXTENDED: Array<TChar> = [
	...ALPHABETS,
	...COMPOUND_VOWELS,
	...CONSONANTS.map((vowel) => ({ char: vowel, reading: vowel })),
	...COMPOUND_CONSONANTS.map((vowel) => ({ char: vowel, reading: vowel })),
]

export const WORD_COMPOSITION = [
	VOWELS,
	CONSONANTS,
	COMPOUND_CONSONANTS,
	CONSONANTS,
	COMPOUND_VOWELS.map(({ char }) => char),
	VOWELS
]

export type TMarkData = { char: TMark, reading: string }

export const MARKS: Array<TMarkData> = [
	{ char: "´", reading: "sắc" },
	{ char: "`", reading: "huyền" },
	{ char: "ˀ", reading: "hỏi" },
	{ char: "~", reading: "ngã" },
	{ char: ".", reading: "nặng" },
]

export type TWord = { text: string, desc: string }

export const WORDS: Array<TWord> = [
	// { text: "châu", desc: "" },
	// { text: "khó", desc: "" },
	// { text: "khế", desc: "" },
	// { text: "tủ", desc: "" },
	// { text: "thỏ", desc: "" },
	{ text: "thăng chức", desc: "" },
	{ text: "khó khăn", desc: "" },
	{ text: "thắng cảnh", desc: "" },
]