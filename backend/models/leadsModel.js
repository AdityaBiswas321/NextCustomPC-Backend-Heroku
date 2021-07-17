import mongoose from 'mongoose'

const leadsSchema = mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    tab: {
        type: String,
        required: true,
    },
    app: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    postal: {
        type: String,
        required: true,
    },
    Ctype: {
        type: String,
        required: true,
    },
})

const Lead = mongoose.model('Lead', leadsSchema)

export default Lead