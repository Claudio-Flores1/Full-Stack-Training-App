const mongoose = require('./connection')

const { Schema } = mongoose

const commentSchema = new Schema({ //Schema names should be capitalized
    note: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
})

module.exports = commentSchema