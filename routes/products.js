const router = require('express').Router();
let Product = require('../models/Product');

// Obtener todos los productos
router.route('/').get((req, res) => {
  Product.find()
    .then(products => res.json(products))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Añadir un producto
router.route('/add').post((req, res) => {
  const { name, price, description } = req.body;

  const newProduct = new Product({ name, price, description });

  newProduct.save()
    .then(() => res.json({ success: true, message: 'Product added!' }))
    .catch(err => res.status(400).json({ success: false, message: 'Error: ' + err }));
});

// Eliminar un producto
router.route('/:id').delete((req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(() => res.json({ success: true, message: 'Product deleted!' }))
    .catch(err => res.status(400).json({ success: false, message: 'Error: ' + err }));
});

module.exports = router;
