const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll ({
    attributes: ['id', 'tag_name'],
    include: [
      {
        model: Product, attributes: ['id', 'product_name', 'stock', 'price', 'category_id']
      }
    ]
  })
  .then (data => res.json(data));
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  
  Tag.findOne ({
    where: {id: req.params.id},
    attributes: ['id', 'tag_name'],
    include: [
      {
        model: Product, attributes: ['id', 'product_name', 'stock', 'price', 'category_id']
      }
    ]
  })
  .then (data => res.json(data));
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create ({tag_name: req.body.tag_name})
  .then (data => res.json(data));
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update (req.body{
    where: {id: req.params.id}
  })
  .then (data => res.json(data));
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {id: req.params.id}
  })
  .then (data => res.json(data));
});

module.exports = router;
