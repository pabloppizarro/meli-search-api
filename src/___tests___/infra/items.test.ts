import supertest from "supertest";
import { ApiServer } from "../../infrastructure/ApiServer";
describe("Items", () => {
  describe("get items routes", () => {
    describe("given a empty search query", () => {
      it("should return a 404 status code", async () => {
        const searchKey: string = "";
        const app = await ApiServer.run(3001);
        await supertest(app).get(`/api/items?search=${searchKey}`).expect(400);
      });
    });
  });
});
