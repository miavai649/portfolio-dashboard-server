import httpStatus from 'http-status'
import { TImageFiles } from '../../interfaces/file.interface'
import { catchAsync } from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { ProjectServices } from './projects.service'

const createProject = catchAsync(async (req, res) => {
  const post = await ProjectServices.createProjectIntoDb(
    req.body,
    req.files as TImageFiles
  )

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Project Created Successfully',
    data: post
  })
})

export const ProjectControllers = {
  createProject
}
