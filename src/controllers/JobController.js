const mongoose = require('mongoose');

const job = mongoose.model('job');

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query
        const jobs = await job.paginate({ }, {  page, limit: 10})

        return res.json(jobs);
    },

    async show(req, res) {
        const job = await job.findById(req.params.id);

        return res.json(job);
    },

    async store(req, res) {
        const job = await job.create(req.body);

        return res.json(job);
    },

    async update(req, res) {
        const job = await job.findByIdAndUpdate(req.params.id, req.body, {  new: true })

        return res.json(job)
    },

    async destroy(req, res) {
        await job.findByIdAndRemove(req.params.id);

        return res.send()
    }
}