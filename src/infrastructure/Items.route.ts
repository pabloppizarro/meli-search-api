import { Router } from "express";
import { MeliItemsApiRepository } from "./repositories/MeliItemsApiRepository";
import { GetItemsService } from "../core/application/GetItems.service";
import { GetItemDetailService } from "../core/application/GetItemDetail.service";

const meliRepo = new MeliItemsApiRepository();
const getItemsService = new GetItemsService(meliRepo);
const getItemDetailService = new GetItemDetailService(meliRepo);

const router = Router();

router.route("/").get((req, res, next) => {
  const { search } = req.query;

  if (!search || typeof search !== "string") {
    res.status(400).send("Query string not found");
  } else {
    getItemsService
      .getItems(search)
      .then((itemsResult) => {
        res.status(200).json(itemsResult);
      })
      .catch((err) => {
        next(err);
      });
  }
});

router.route("/:id").get((req, res, next) => {
  if (!req.params.id) {
    res.status(400).send("Id not found");
  } else {
    getItemDetailService
      .getItemDetail(req.params.id)
      .then((itemDetail) => {
        res.status(200).json(itemDetail);
      })
      .catch((err) => {
        next(err);
      });
  }
});

export default router;
