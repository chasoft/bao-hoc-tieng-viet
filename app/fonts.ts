import { NextFont } from 'next/dist/compiled/@next/font'
import { Inter, Dancing_Script, Pacifico, Varela_Round, Ysabeau } from 'next/font/google'

export const dancing = Dancing_Script({ subsets: ['vietnamese'] })
export const inter = Inter({ subsets: ['vietnamese'] })
export const pacifico = Pacifico({ subsets: ['vietnamese'], weight: "400" })
export const varela_round = Varela_Round({ subsets: ['vietnamese'], weight: "400" })
export const ysabeau = Ysabeau({ subsets: ['vietnamese'] })

export type TSupportFont =
	"dancing" |
	"inter" |
	"pacifico" |
	"varela_round" |
	"ysabeau"

export const fonts: Record<TSupportFont, NextFont> = {
	dancing,
   inter,
   pacifico,
   varela_round,
   ysabeau
}