const { ObjectId } = require("bson")

app.delete('/delte', (req, res) => {
    const userID = new ObjectId(req.body.id)
    db.collection('userCollection').deleteOne({_id: userID})
    .then(results => {
        res.json(results.deleteCount)
    }).catch(err => {
        if (err) throw err;
    })
});