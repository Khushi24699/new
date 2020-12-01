const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const eventRoutes = express.Router();
const PORT = 4000;

let Event = require('./model');


app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/todo', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("database connection established successfully");
})

eventRoutes.route('/').get(function(req, res) {
    Event.find(function(err, events) {
        if (err) {
            console.log(err);
        } else {
            res.json(events);
        }
    });
});

eventRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Event.findById(id, function(err, event) {
        res.json(event);
    });
});

eventRoutes.route('/update/:id').post(function(req, res) {
    Event.findById(req.params.id, function(err, event) {
        if (!event)
            res.status(404).send("data is not found");
        else
            event.title = req.body.title;
        event.value = req.body.value;
        event.startDate = req.body.startDate;
        event.endDate = req.body.endDate;
        event.startTime = req.body.startTime;
        event.endTime = req.body.endTime;
        event.description = req.body.description;

        event.save().then(event => {
                res.json('event updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

eventRoutes.route('/add').post(function(req, res) {
    let event = new Event(req.body);
    event.save()
        .then(event => {
            res.status(200).json({ 'event': 'event added successfully' });
        })
        .catch(err => {
            res.status(400).send('adding new event failed');
        });
});

eventRoutes.route('/delete/:id').delete((req, res, next) => {
    Event.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})



app.use('/events', eventRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});