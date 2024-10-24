import { TUser } from "./auth.interface";
import { Auth } from "./auth.model";

const createUserIntoDb = async (payload: TUser) => {
  const user = await Auth.create(payload);

  return user;
};

export const AuthServices = {
  createUserIntoDb,
};
