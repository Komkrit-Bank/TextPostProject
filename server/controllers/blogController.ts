//Connect with Database
const slugify = require('slugify')


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
    res.json({
        data:{title, content, author, slug}
    })
}