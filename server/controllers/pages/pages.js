const Page = require("../../models/page");

module.exports = (req, res) => {
  return Page.find({})
    .lean()
    .exec((err, pages) => {
      res.json(pages);
    });
};
