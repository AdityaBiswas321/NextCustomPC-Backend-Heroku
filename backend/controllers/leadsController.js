import asyncHandler from 'express-async-handler'
import Lead from '../models/leadsModel.js'

//Create new leads
// POST /api/leads

const addLeads = asyncHandler(async (req, res) => {
    const { type, tab, app, name, email, phone, postal, Ctype } = req.body

    const lead = new Lead({
        type,
        tab,
        app,
        name,
        email,
        phone,
        postal,
        Ctype
    })

    const createdLead = await lead.save()

    res.status(201).json(createdLead)
})

export { addLeads }