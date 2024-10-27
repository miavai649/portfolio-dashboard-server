import { TExperience } from "./experience.interface";
import { Experience } from "./experience.model";

const createExperienceIntoDb = async (payload: TExperience) => {
  const user = await Experience.create(payload);

  return user;
};

export const ExperienceServices = {
  createExperienceIntoDb,
};
