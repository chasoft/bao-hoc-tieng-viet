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


/**
 * DATA
 */
export type TWordCategory =
	"adjective" |
	"adverb" |
	"animal" |
	"capital" |
	"computer" |
	"country" |
	"family" |
	"in-the-sky" |
	"kitchenware" |
	"learning-tools" |
	"machine" |
	"noun" |
	"on-the-land" |
	"relationship" |
	"under-water" |
	"verb" |
	// Keep following item at the bottom of the list
	"others";

export const WORD_CATEGORY: Record<TWordCategory, { title: string, desc: string }> = {
	"adjective": { title: "Tính từ", desc: "Tính chất của sự vật, sự việc" },
	"adverb": { title: "Trạng từ", desc: "" },
	"animal": { title: "Động vật", desc: "" },
	"capital": { title: "Thủ đô", desc: "" },
	"computer": { title: "Máy vi tính", desc: "" },
	"country": { title: "Quốc gia", desc: "" },
	"family": { title: "Gia đình", desc: "" },
	"in-the-sky": { title: "Trên bầu trời", desc: "" },
	"kitchenware": { title: "Đồ dùng nhà bếp", desc: "" },
	"learning-tools": { title: "Dụng cụ học tập", desc: "Công cụ học tập của bé" },
	"machine": { title: "Máy móc", desc: "Tên gọi của các loại máy móc" },
	"noun": { title: "Danh từ", desc: "Tên gọi của các vật xung quanh em" },
	"on-the-land": { title: "Trên mặt đất", desc: "" },
	"relationship": { title: "Quan hệ", desc: "" },
	"under-water": { title: "Dưới mặt nước", desc: "" },
	"verb": { title: "Động từ", desc: "" },
	// Keep following item at the bottom of the list
	"others": { title: "Không phân loại", desc: "Các từ không thuộc chủ đề nào" },
}

export type TWordDataItem = {
	text: string
	desc: string
	cat: TWordCategory[]
	sentence?: string[]
}

export const WORDS: Array<TWordDataItem> = [
	{ text: "trái đất", desc: "", cat: [] },
	{ text: "dễ thương", desc: "", cat: [] },
	{ text: "cái bàn", desc: "", cat: [] },
	{ text: "cái ghế", desc: "", cat: [] },
	{ text: "con thỏ", desc: "", cat: [] },
	{ text: "mẹ châu", desc: "", cat: [] },
	{ text: "con trai", desc: "", cat: [] },
	{ text: "con gái", desc: "", cat: [] },
	{ text: "ba mẹ", desc: "", cat: [] },
	{ text: "ông bà", desc: "", cat: [] },
	{ text: "khó khăn", desc: "", cat: [] },
	{ text: "khăn tay", desc: "", cat: [] },
	{ text: "trái khế", desc: "", cat: [] },
	{ text: "tủ đồ", desc: "", cat: [] },
	{ text: "thỏ con", desc: "", cat: [] },
	{ text: "mặt trăng", desc: "", cat: [] },
	{ text: "khó khăn", desc: "", cat: [] },
	{ text: "thắng cảnh", desc: "", cat: [] },
]