
import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `ToyCarWorld | ${title}`;
    }, [title])
}

export default useTitle;