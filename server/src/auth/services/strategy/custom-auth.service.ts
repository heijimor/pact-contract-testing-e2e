import { IAuthenticateStrategy } from "../../interfaces/authenticate-strategy.interface";
import { AuthResult } from "../../types/auth-result.type";
import { Credential } from "../../types/credential.type";

export class CustomAuth implements IAuthenticateStrategy {
  async authenticate(_credential: Credential): Promise<AuthResult> {
    return Promise.resolve({ accessToken: "local" });
  }
}
