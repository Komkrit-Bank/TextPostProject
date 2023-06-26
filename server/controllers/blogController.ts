//Connect with Database// Input Data to Database
const slugify = require('slugify')
const Blogs = require('../models/blogsModel')

type blogs = {
    title: string,
    content: string,
    author: string,
    slug: string

}


//Save Data into API
exports.create = (req: any, res: any):void => {
    const {title, content, author} = req.body
    const slug = slugify(title)

    //data validation
    switch (true){
        case !title:
            return res.status(400).json({error: "Please Fill Content Title"})
            break;
        case !content:
            return res.status(400).json({error: "Content cannot be empty Please fill content"})
            break;
    }
    //save data
    Blogs.create({title, content, author, slug}).then((blog:blogs)=>{
        res.json(blog)})
        .catch((err:string) => {
        res.status(404).json({error: "มืชื่อบทความซ้ำกัน"}
        )
    })
}