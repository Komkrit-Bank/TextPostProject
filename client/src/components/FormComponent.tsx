import { useState } from 'react'
import NavBarComponent from './NavBarComponent'
import axios from 'axios'

// const configValue: string | undefined = 

const FormComponent = () => {
    const [state, setState] = useState({
        title:'',
        content: '',
        author: ''
    })
    const { title, content, author } = state

    //set data into state variable
    const inputValue = (name:string) => (event:any) =>{
        setState({...state, [name]:event.target.value})
    }

    const submitForm = (e:any) => {
        e.preventDefault();
        // console.table({title, content, author});
        console.log('API: ', import.meta.env.VITE_APP_API)
        axios
        .post(`${import.meta.env.VITE_APP_API}/create`, { title, content, author })
        .then(()=>{
            alert('Save data is completed');
        })
        .catch(err=>{
            alert(err.respond.data.error)
        })
    }

    return (
    <>
        <div className="container" style={{position: 'static'}}>
            <NavBarComponent/>
            <h1>Composing Blogs</h1>
            <form onSubmit={submitForm}>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" value={title} onChange={inputValue('title')}/>
                </div>
                <div className="form-group">
                    <label>Detail</label>
                    <textarea name="" id="" className="form-control" value={content} onChange={inputValue('content')}></textarea>
                </div>
                <div className="form-group">
                    <label>Author</label>
                    <input type="text" className="form-control" value={author} onChange={inputValue('author')}/>
                </div>
                <br/>
                <input type="submit" value='Save' className="btn btn-primary" />
            </form>
        </div>
    </>

  )
}

export default FormComponent