import { useDispatch } from "react-redux"

const dispatch = useDispatch()
export const changeTerm = (term:string) => {
    dispatch({
        type: "CHANGETERM",
        payload: term
    })
    console.log(term)
}

export const resetTerm = () => {
    dispatch({
        type: "RESETTERM",
    })
}
