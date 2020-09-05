import React from 'react'

class TodoInput extends React.Component{
    render(){
        const{item, handleChange, handleSubmit, editItem}=this.props
        return(
            <div className="card card-body my-3">
               <form onSubmit={handleSubmit}> 
                   <div className="input-group">
                       <div className="input-group-prepend">
                           <div className="input-group-text bg-primary text-white">
                               <i className="fas fa-book"></i>
                           </div>
                       </div>
                       <input 
                        placeholder="Add an item..."
                        type="text" 
                        className="form-control"
                        value={item}
                        onChange={handleChange}
                        />
                   </div>
                   <button type="submit"
                    className={
                        editItem ? 'btn btn-block bg-success mt-3 text-white text-capitalize': 
                        'btn btn-block bg-primary mt-3 text-white text-capitalize'
                    }
                    >
                       {editItem ? 'edit item' : "add item"} 
                    </button>
               </form>
               
            </div>
        )
    }
}

export default TodoInput;