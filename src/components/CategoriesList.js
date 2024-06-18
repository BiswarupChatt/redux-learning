import CategoriesItem from "./CategoriesItem"

export default function CategoriesList(props) {

    const {data} = props

    return (
        
            <ul>
                {data.map((ele)=>{
                    return <CategoriesItem key={ele._id} id={ele._id} name={ele.name}/>
                })}
            </ul>
    )
}