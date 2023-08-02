import React from "react"

function useInit() {
	const [init, setInit] = React.useState(false)

	React.useEffect(() => {
		setInit(true)
	}, [])

	return init
}