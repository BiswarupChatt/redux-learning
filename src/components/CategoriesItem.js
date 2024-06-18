export default function CategoriesItem(props) {

    const { id, name } = props

    const handleRemove = ()=>{
        const userConfirm = window.confirm("Are you sure?")
        if(userConfirm){
            
        }


    }

    return (
        <li key={id}>{name} <button onClick={handleRemove}>Remove</button></li>
    )
}