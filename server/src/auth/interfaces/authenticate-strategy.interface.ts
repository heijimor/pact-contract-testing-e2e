import { AuthResult } from "../types/auth-result.type";
import { Credential } from "../types/credential.type";

export interface IAuthenticateStrategy {
  authenticate(credential: Credential): Promise<AuthResult>;
}
