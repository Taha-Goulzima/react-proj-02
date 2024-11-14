const TagButton=({buttonList})=>{
    return(
       
        <div className="d-flex gap-1">
            
            {buttonList.map((element,index)=>
            
                <span key={index} className="badge text-bg-secondary">{element}</span>
           
               
            )}
               
        </div>
    )
}
export default TagButton