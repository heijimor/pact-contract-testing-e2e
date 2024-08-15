// src/__tests__/pact.test.js

import { Pact } from "@pact-foundation/pact";
import { fetchUser } from "../api"; // Your API call function
import { Matchers } from "@pact-foundation/pact";
const { like } = Matchers;

const provider = new Pact({
  consumer: "ReactApp",
  provider: "UserService",
  port: 1234, // Arbitrary port
});

describe("Pact with UserService", () => {
  beforeAll(() => provider.setup());
  afterEach(() => provider.verify());
  afterAll(() => provider.finalize());

  describe("when a user exists", () => {
    beforeEach(() => {
      return provider.addInteraction({
        uponReceiving: "a request for a user",
        withRequest: {
          method: "GET",
          path: "/user/1",
          headers: {
            "Content-Type": "application/json",
          },
        },
        willRespondWith: {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
          body: like({
            id: 1,
            name: "John",
          }),
        },
      });
    });

    it("should fetch user data", async () => {
      const user = await fetchUser("http://localhost:1234/user/1");
      expect(user).toEqual({ id: 1, name: "John" });
    });
  });
});
