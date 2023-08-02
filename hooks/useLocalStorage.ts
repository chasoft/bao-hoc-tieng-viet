"use client"

import React from "react"

function useLocalStorage<T>(key: string, defaultValue: T) {
	const [state, setState] = React.useState(() => {
		try {
			const item = window.localStorage.getItem(key);
			return item ? JSON.parse(item) as T : defaultValue;
		} catch (e) {
			return defaultValue;
		}
	})

	React.useEffect(() => {
		window.localStorage.setItem(key, JSON.stringify(key))
	}, [key, state])

	return [state, setState] as const
}