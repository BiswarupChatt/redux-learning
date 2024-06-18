import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { startGetCatagories } from "../actions/catagories-action"
import CategoriesList from "./CategoriesList"

export default function CategoriesContainer() {

    const categories = useSelector((state) => {
        return state.categories
    })

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startGetCatagories())
    }, [])

    return (
        <div>
            <h2>
                Listing Category - {categories.data.length}
                <CategoriesList data = {categories.data}/>
            </h2>
        </div>
    )
}