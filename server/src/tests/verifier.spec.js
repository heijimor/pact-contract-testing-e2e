const { Verifier } = require("@pact-foundation/pact");
const path = require("path");

describe("Pact Verification", () => {
  it("should validate the expectations of Consumer", () => {
    return new Verifier({
      provider: "UserService",
      providerBaseUrl: "http://localhost:3000",
      pactBrokerUrl: "http://localhost:9292",
      pactUrls: [path.resolve(process.cwd(), "pacts")],
      publishVerificationResult: true,
      providerVersion: "1.0.0",
    })
      .verifyProvider()
      .then((output) => {
        console.log("Pact Verification Complete!");
        console.log(output);
      })
      .catch((err) => {
        console.error("Pact verification failed:", err);
        process.exit(1);
      });
  });
});
