import { NextFont } from 'next/dist/compiled/@next/font'
import { Inter, Dancing_Script, Pacifico, Varela_Round, Ysabeau, Space_Grotesk, Great_Vibes, Alegreya_Sans_SC, Patrick_Hand, Mynerve } from 'next/font/google'

export const dancing = Dancing_Script({ subsets: ['vietnamese'] })
export const inter = Inter({ subsets: ['vietnamese'] })
export const pacifico = Pacifico({ subsets: ['vietnamese'], weight: "400" })
export const varela_round = Varela_Round({ subsets: ['vietnamese'], weight: "400" })
export const ysabeau = Ysabeau({ subsets: ['vietnamese'] })
export const space_grotesk = Space_Grotesk({ subsets: ['vietnamese'] })
export const great_vibes = Great_Vibes({ subsets: ['vietnamese'], weight: "400" })
export const patrick_Hand = Patrick_Hand({ subsets: ['vietnamese'], weight: "400" })
export const mynerve = Mynerve({ subsets: ['vietnamese'], weight: "400" })

export type TSupportFont =
	"dancing" |
	"inter" |
	"pacifico" |
	"varela_round" |
	"ysabeau" |
	"space_grotesk" |
	"great_vibes" |
	"patrick_Hand" |
	"mynerve"

export const fonts: Record<TSupportFont, NextFont> = {
	dancing,
	inter,
	pacifico,
	varela_round,
	ysabeau,
	space_grotesk,
	great_vibes,
	patrick_Hand,
	mynerve
}