import React from "react"

export function useInit() {
	const [init, setInit] = React.useState(false)

	React.useEffect(() => {
		setInit(true)
	}, [])

	return init
}