import { Router } from "express";

const router = Router();

router.route("/").get((req, res) => {
  const { q } = req.query;
  res.status(200).json({ query: q });
});
router.route("/:id").get((req, res) => {
  res.status(200).json({ id: req.params.id });
});

export default router;
