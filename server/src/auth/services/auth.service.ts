import { Credential } from "../types/credential.type";
import { authProviders } from "./strategy";

export class AuthService {
  async authenticate(credential: Credential) {
    const environment = "prod"; // swith to: firebase or prod

    const service = authProviders[environment];
    const instance = new service();
    return await instance.authenticate(credential);
  }
}
