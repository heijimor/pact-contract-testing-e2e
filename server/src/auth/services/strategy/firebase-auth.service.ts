import { IAuthenticateStrategy } from "../../interfaces/authenticate-strategy.interface";
import { AuthResult } from "../../types/auth-result.type";
import { Credential } from "../../types/credential.type";

export class FirebaseAuth implements IAuthenticateStrategy {
  /**
   * @description this is a way to isolate auth logic of authenticating by firebase
   * could be implemented for example by firebase rest api, for more details:
   * https://firebase.google.com/docs/reference/rest/auth
   */
  async authenticate(_credential: Credential): Promise<AuthResult> {
    return Promise.resolve({ accessToken: "firebase" });
  }
}
