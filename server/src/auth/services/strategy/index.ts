import { IAuthenticateStrategy } from "../../interfaces/authenticate-strategy.interface";
import { Environment } from "../../types/environment.type";
import { CustomAuth } from "./custom-auth.service";
import { FirebaseAuth } from "./firebase-auth.service";

export const authProviders: {
  [key in Environment]: new () => IAuthenticateStrategy;
} = {
  local: FirebaseAuth,
  prod: CustomAuth,
};
