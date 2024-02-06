import { Router } from "express";
import { GetItemDetailService } from "../core/application/GetItemDetail.service";
import { GetItemsService } from "../core/application/GetItems.service";
import { MeliItemsApiRepository } from "./repositories/MeliItemsApiRepository";

import { z } from "zod";

const meliRepo = new MeliItemsApiRepository();
const getItemsService = new GetItemsService(meliRepo);
const getItemDetailService = new GetItemDetailService(meliRepo);

const router = Router();

//Search query squema for validation
const QuerySchema = z.object({
  search: z
    .string({
      required_error: "Search key is required",
    })
    .max(120, "Too large")
    .min(3, "Too short"),

  //add more query keys to validate as you need.
});

router.route("/").get((req, res) => {
  const query = QuerySchema.safeParse(req.query);
  if (!query.success) {
    return res.status(400).send(query.error.issues);
  }

  getItemsService
    .getItems(query.data.search)
    .then((itemsResult) => {
      res.status(200).json(itemsResult);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.route("/:id").get((req, res) => {
  if (!req.params.id) {
    res.status(400).send("Id not found");
  } else {
    getItemDetailService
      .getItemDetail(req.params.id)
      .then((itemDetail) => {
        res.status(200).json(itemDetail);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  }
});

export default router;
