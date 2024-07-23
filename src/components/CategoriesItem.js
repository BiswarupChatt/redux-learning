import { useDispatch } from "react-redux"
import { startRemoveCategory } from "../actions/catagories-action"

export default function CategoriesItem(props) {
const dispatch = useDispatch()
    const { id, name } = props

    const handleRemove = ()=>{
        const userConfirm = window.confirm("Are you sure?")
        if(userConfirm){
            dispatch(startRemoveCategory(id))
        }


    }

    return (
        <li key={id}>{name} <button onClick={handleRemove}>Remove</button></li>
    )
}