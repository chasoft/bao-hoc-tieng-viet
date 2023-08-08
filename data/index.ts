import { TWordCase } from "@/types"

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
	"e", "é", "è", "ẻ", "ẽ", "ẹ", "ê", "ế", "ề", "ể", "ễ", "ệ",
	"i", "í", "í", "ỉ", "ĩ", "ị",
	"o", "ó", "ò", "ỏ", "õ", "ọ", "ô", "ố", "ồ", "ổ", "ỗ", "ộ", "ơ", "ớ", "ờ", "ở", "ỡ", "ợ",
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
	COMPOUND_VOWELS.map(({ char }) => char),
	VOWELS,
	COMPOUND_CONSONANTS,
	CONSONANTS,
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
	"universe" |
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
	"universe": { title: "Vũ trụ", desc: "" },
	"verb": { title: "Động từ", desc: "" },
	// Keep following item at the bottom of the list
	"others": { title: "Không phân loại", desc: "Các từ không thuộc chủ đề nào" },
}

export type TWord = {
	text: string
	desc: string
	cat: TWordCategory[]
	defaultWordCase?: TWordCase
	sentence?: string[]
}

export const ALL_WORDS: Array<TWord> = [
	{ text: "trái đất", desc: "", cat: ["universe"] },
	{ text: "mặt trăng", desc: "", cat: ["universe"] },
	{ text: "mặt trời", desc: "", cat: ["universe"] },
	{ text: "sao thủy", desc: "", cat: ["universe"] },
	{ text: "sao hỏa", desc: "", cat: ["universe"] },
	{ text: "sao kim", desc: "", cat: ["universe"] },
	{ text: "sao mộc", desc: "", cat: ["universe"] },
	{ text: "sao chổi", desc: "", cat: ["universe"] },
	{ text: "ngôi sao", desc: "", cat: ["universe"] },
	{ text: "thái dương hệ", desc: "", cat: ["universe"] },
	{ text: "vũ trụ", desc: "", cat: ["universe"] },

	{ text: "dễ thương", desc: "", cat: ["adjective"] },
	{ text: "xinh đẹp", desc: "", cat: ["adjective"] },
	{ text: "cao thấp", desc: "", cat: ["adjective"] },
	{ text: "nhanh chậm", desc: "", cat: ["adjective"] },
	{ text: "đẹp xấu", desc: "", cat: ["adjective"] },
	{ text: "giỏi dở", desc: "", cat: ["adjective"] },
	{ text: "thương yêu", desc: "", cat: ["adjective"] },

	{ text: "cái bàn", desc: "", cat: ["learning-tools"] },
	{ text: "cái ghế", desc: "", cat: ["learning-tools"] },
	{ text: "cây viết", desc: "", cat: ["learning-tools"] },
	{ text: "cây bút", desc: "", cat: ["learning-tools"] },
	{ text: "cái đèn", desc: "", cat: ["learning-tools"] },
	{ text: "cục tẩy", desc: "", cat: ["learning-tools"] },
	{ text: "bút chì", desc: "", cat: ["learning-tools"] },
	{ text: "cây thước", desc: "", cat: ["learning-tools"] },

	{ text: "con thỏ", desc: "", cat: ["animal", "on-the-land"] },
	{ text: "con chó", desc: "", cat: ["animal", "on-the-land"] },
	{ text: "con heo", desc: "", cat: ["animal", "on-the-land"] },
	{ text: "con gà", desc: "", cat: ["animal", "on-the-land"] },
	{ text: "con vịt", desc: "", cat: ["animal", "on-the-land"] },
	{ text: "con rắn", desc: "", cat: ["animal", "on-the-land"] },
	{ text: "con sư tử", desc: "", cat: ["animal", "on-the-land"] },
	{ text: "con rùa", desc: "", cat: ["animal", "on-the-land"] },
	{ text: "con cá sấu", desc: "", cat: ["animal", "in-the-sky"] },
	{ text: "con hà mã", desc: "", cat: ["animal", "under-water"] },
	{ text: "con cá", desc: "", cat: ["animal", "under-water"] },
	{ text: "cá mập", desc: "", cat: ["animal", "under-water"] },
	{ text: "cá voi", desc: "", cat: ["animal", "under-water"] },
	{ text: "con mực", desc: "", cat: ["animal", "under-water"] },
	{ text: "con tôm", desc: "", cat: ["animal", "under-water"] },
	{ text: "con khỉ", desc: "", cat: ["animal", "on-the-land"] },
	{ text: "con tê giác", desc: "", cat: ["animal", "on-the-land"] },
	{ text: "con voi", desc: "", cat: ["animal", "on-the-land"] },
	{ text: "con đà điểu", desc: "", cat: ["animal", "on-the-land"] },

	{ text: "ba mẹ", desc: "", cat: ["relationship", "family"] },
	{ text: "ông bà", desc: "", cat: ["relationship", "family"] },
	{ text: "ông nội", desc: "", cat: ["relationship", "family"] },
	{ text: "ông ngoại", desc: "", cat: ["relationship", "family"] },
	{ text: "bà nội", desc: "", cat: ["relationship", "family"] },
	{ text: "bà ngoại", desc: "", cat: ["relationship", "family"] },
	{ text: "cô chú", desc: "", cat: ["relationship"] },
	{ text: "cô bác", desc: "", cat: ["relationship"] },
	{ text: "chú thím", desc: "", cat: ["relationship"] },
	{ text: "cậu mợ", desc: "", cat: ["relationship"] },
	{ text: "dì dượng", desc: "", cat: ["relationship"] },

	{ text: "xe cứu hỏa", desc: "", cat: ["machine"] },
	{ text: "xe cần cẩu", desc: "", cat: ["machine"] },
	{ text: "xe bán tải", desc: "", cat: ["machine"] },
	{ text: "xe ô-tô/ xe hơi", desc: "", cat: ["machine"] },
	{ text: "xe bồn", desc: "", cat: ["machine"] },
	{ text: "xe rác", desc: "", cat: ["machine"] },
	{ text: "xe tăng", desc: "", cat: ["machine"] },
	{ text: "xe công-tai-nơ", desc: "", cat: ["machine"] },
	{ text: "xe lu", desc: "", cat: ["machine"] },
	{ text: "xe ủi", desc: "", cat: ["machine"] },
	{ text: "xe múc", desc: "", cat: ["machine"] },
	{ text: "xe quét đường", desc: "", cat: ["machine"] },

	{ text: "con chuột", desc: "", cat: ["computer"] },
	{ text: "bàn phím", desc: "", cat: ["computer"] },
	{ text: "máy vi tính", desc: "", cat: ["computer"] },
	{ text: "laptop", desc: "", cat: ["computer"] },
	{ text: "tai nghe", desc: "", cat: ["computer"] },

	{ text: "nước việt nam", desc: "", defaultWordCase: "capitalize", cat: ["country"] },
	{ text: "nước thái lan", desc: "", defaultWordCase: "capitalize", cat: ["country"] },
	{ text: "nước hoa kỳ", desc: "", defaultWordCase: "capitalize", cat: ["country"] },
	{ text: "nước đức", desc: "", defaultWordCase: "capitalize", cat: ["country"] },
	{ text: "nước pháp", desc: "", defaultWordCase: "capitalize", cat: ["country"] },
	{ text: "nước anh", desc: "", defaultWordCase: "capitalize", cat: ["country"] },

	{ text: "Hà Nội", desc: "Thủ đô của nước Việt Nam", defaultWordCase: "default", cat: ["capital"] },
	{ text: "Bangkok", desc: "Thủ đô của nước Thái Lan", defaultWordCase: "default", cat: ["capital"] },
	{ text: "Washington DC", desc: "Thủ đô của nước Hoa Kỳ", defaultWordCase: "default", cat: ["capital"] },
	{ text: "Paris", desc: "Thủ đô của nước Pháp", defaultWordCase: "default", cat: ["capital"] },
	{ text: "London", desc: "Thủ đô của nước Anh", defaultWordCase: "default", cat: ["capital"] },
	{ text: "Berlin", desc: "Thủ đô của nước Đức", defaultWordCase: "default", cat: ["capital"] },

	{ text: "chạy bộ", desc: "", cat: ["verb"] },
	{ text: "nhảy dây", desc: "", cat: ["verb"] },
	{ text: "đi bộ", desc: "", cat: ["verb"] },
	{ text: "cầm nắm", desc: "", cat: ["verb"] },
	{ text: "nói chuyện", desc: "", cat: ["verb"] },
	{ text: "lắng nghe", desc: "", cat: ["verb"] },
	{ text: "nhìn", desc: "", cat: ["verb"] },
	{ text: "ăn cơm", desc: "", cat: ["verb"] },

	{ text: "con chim", desc: "", cat: ["in-the-sky"] },
	{ text: "chim hải âu", desc: "", cat: ["in-the-sky"] },
	{ text: "chim bồ câu", desc: "", cat: ["in-the-sky"] },
	{ text: "chim sẻ", desc: "", cat: ["in-the-sky"] },
	{ text: "con dơi", desc: "", cat: ["in-the-sky"] },
	{ text: "máy bay", desc: "", cat: ["in-the-sky"] },
	{ text: "trực thăng", desc: "", cat: ["in-the-sky"] },
	{ text: "hỏa tiễn", desc: "", cat: ["in-the-sky"] },
	{ text: "tên lửa", desc: "", cat: ["in-the-sky"] },
	{ text: "phi thuyền", desc: "", cat: ["in-the-sky"] },
	{ text: "phi thuyền", desc: "", cat: ["in-the-sky"] },

	{ text: "con dao", desc: "", cat: ["kitchenware"] },
	{ text: "cái thớt", desc: "", cat: ["kitchenware"] },
	{ text: "cái chảo", desc: "", cat: ["kitchenware"] },
	{ text: "cái nồi", desc: "", cat: ["kitchenware"] },
	{ text: "cái nắp", desc: "", cat: ["kitchenware"] },
	{ text: "cái muỗng", desc: "", cat: ["kitchenware"] },
	{ text: "đôi đũa", desc: "", cat: ["kitchenware"] },
	{ text: "cái nĩa", desc: "", cat: ["kitchenware"] },
	{ text: "cái chén", desc: "", cat: ["kitchenware"] },
	{ text: "cái tô", desc: "", cat: ["kitchenware"] },
	{ text: "cái ly", desc: "", cat: ["kitchenware"] },

	{ text: "mẹ châu", desc: "", cat: ["others"] },
	{ text: "ba anh", desc: "", cat: ["others"] },
]