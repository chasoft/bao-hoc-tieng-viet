import { urls } from "@/data/settings"
import { redirect } from "next/navigation"

export default function CharRoute() {
	redirect(urls.home.url)
}