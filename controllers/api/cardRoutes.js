const router = require("express").Router();
const Card = require("../../models/Card");

//get all cards 
//http://localhost:3001/api/cards
router.get("/", async (req, res) => {
    try{
        const data = await Card.findAll();
        if (!data) {
            res.status(404).json({ message: 'data not found' });
            return;
        }

        const cards = data.map(card => card.get({plain:true}));

        res.render('allCards', {cards});
    } catch (err) {
        res.status(500).json(err);
    }
});

// get a card by an id
//http://localhost:3001/api/cards/#
router.get("/:id", async (req, res) => {
    try {
      const data = await Card.findByPk(req.params.id);
      if (!data) {
        res.status(404).json({ message: 'card not found' });
        return;
      }
      const card = data.get({plain:true});
      res.render('card', card);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;