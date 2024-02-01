import { Router } from "express";
import { MeliItemsApiRepository } from "./repositories/MeliItemsApiRepository";
import { GetItemsService } from "../core/application/GetItems.service";

const meliRepo = new MeliItemsApiRepository();
const getItemsService = new GetItemsService(meliRepo);

const router = Router();

router.route("/").get((req, res) => {
  const { q } = req.query;

  if (!q || typeof q !== "string") {
    res.status(400).send("Query string not found");
  } else {
    getItemsService
      .getItems(q)
      .then((itemsResult) => {
        res.status(200).json(itemsResult);
      })
      .catch((err) => {
        throw res.status(500).send({ msg: "Something wrong", err });
      });
  }
});

router.route("/:id").get((req, res) => {
  res.status(200).json({ id: req.params.id });
});

export default router;
