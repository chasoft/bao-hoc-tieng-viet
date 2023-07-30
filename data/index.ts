type Mark = "´" | "`" | "ˀ" | "~" | ".";
export type ALPHABET_CHAR_VALUE = {
	char: string,
	reading: string,
}

export const ALPHABETS: Array<ALPHABET_CHAR_VALUE> = [
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

export const COMPOUND_VOWELS = [
	"ch",
	"kh",
	"nh",
	"th",
	"ph",
	"gh",
	"ng",
	"ngh",
	"tr",
	"gi"
]

export const COMPOUND_CONSONANTS = [
	"iê",
	"yê",
	"uô",
	"ươ"
]

export const MARKS: Array<{ char: Mark, reading: string }> = [
	{ char: "´", reading: "sắc" },
	{ char: "`", reading: "huyền" },
	{ char: "ˀ", reading: "hỏi" },
	{ char: "~", reading: "ngã" },
	{ char: ".", reading: "nặng" },
]

export const WORDS = [
	{ text: "châu", desc: "" },
	{ text: "khó", desc: "" },
	{ text: "khế", desc: "" },
	{ text: "tủ", desc: "" },
	{ text: "thỏ", desc: "" },
	{ text: "nhà", desc: "" },
]