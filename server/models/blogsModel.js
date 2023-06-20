//Title Name (title), content body (content), Author (author), slug(url)
const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: {},
        required: true
    },
    author: {
        type: String,
        default: 'Admin'
    },
    slug: {
        type: String,
        lowercase: true,
        unique: true,
        required: true
    }
}, {timestamps:true})

module.exports = mongoose.model('Blogs', blogSchema)