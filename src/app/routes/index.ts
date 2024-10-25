import express from 'express'
import { AuthRoutes } from '../modules/auth/auth.route'
import { ProjectsRoutes } from '../modules/projects/projects.route'

const router = express.Router()

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes
  },
  {
    path: '/project',
    route: ProjectsRoutes
  }
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))
export default router
