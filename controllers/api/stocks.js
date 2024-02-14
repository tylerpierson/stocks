const Stock = require('../../models/stock')


module.exports = {
    show,
    index,
    create
}

async function index(req, res) {
    try {
        const stocks = await Stock.find({})
        res.status(200).json(stocks)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

/****** C - Create *******/
async function create(req, res){
    try {
        const stock = new Stock(req.body)
        await stock.save()
        res.status(200).json(stock)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

/****** R - Show *****/

async function show(req ,res) {
    try {
        const foundStock = await Stock.findOne({symbol: req.params.symbol})
        if (!foundStock) throw new Error("Could not find stock")
        res.status(200).json(foundStock)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}