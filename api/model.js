const mongoose = require('mongoose');


const EventSchema = mongoose.Schema({
    title: String,
    value: String,
    label: String,
    startDate: String,
    endDate: String,
    startTime: String,
    endTime: String,
    description: String,

    username: String,

}, {
    timestamps: true
});

module.exports = mongoose.model('Events', EventSchema);