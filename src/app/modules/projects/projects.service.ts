import { TImageFiles } from '../../interfaces/file.interface'
import { TProject } from './projects.interface'
import { Projects } from './projects.model'

const createProjectIntoDb = async (payload: TProject, images: TImageFiles) => {
  payload.images = images.postImages?.map((image) => image?.path)

  const post = await Projects.create(payload)
  return post
}

export const ProjectServices = {
  createProjectIntoDb
}
