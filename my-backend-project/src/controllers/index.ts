class IndexController {
    getIndex(req, res) {
        res.send('Welcome to the API!');
    }

    createItem(req, res) {
        // Logic to create an item
        res.status(201).send('Item created');
    }
}

export default IndexController;