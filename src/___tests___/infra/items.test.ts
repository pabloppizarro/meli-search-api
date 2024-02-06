import supertest from "supertest";
import { ApiServer } from "../../infrastructure/ApiServer";

const app = ApiServer.run(3001);

describe("Items", () => {
  describe("get items routes", () => {
    describe("given a empty search query", () => {
      it("should return a 400 status code", async () => {
        const searchKey: string = "";
        await supertest(await app)
          .get(`/api/items?search=${searchKey}`)
          .expect(400);
      });
    });
    describe("given a search query", () => {
      describe("contain less than 3 chars", () => {
        it("should return a 400 status code", async () => {
          const searchKey: string = "ap";
          await supertest(await app)
            .get(`/api/items?search=${searchKey}`)
            .expect(400);
        });
      });
      describe("contain more than 120 chars", () => {
        it("should return a 400 status code", async () => {
          const searchKey: string =
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur gravida molestie egestas. Cras tempor magna tristique convallis. ";
          await supertest(await app)
            .get(`/api/items?search=${searchKey}`)
            .expect(400);
        });
      });
      it("should return a 200 status code", async () => {
        const searchKey: string = "apple";
        await supertest(await app)
          .get(`/api/items?search=${searchKey}`)
          .expect(200);
      });
    });
  });
});
