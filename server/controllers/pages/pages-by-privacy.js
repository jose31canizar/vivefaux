const Page = require("../../models/page");

module.exports = (req, res) => {
  return Page.find({ private: req.query.private })
    .lean()
    .exec((err, pages) => {
      res.json(pages);
    });
};
