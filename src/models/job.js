const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const jobSchema = new mongoose.schema({
    title: {
        type:String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})