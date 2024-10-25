import { model, Schema } from 'mongoose'
import { TProject } from './projects.interface'

const projectSchema = new Schema<TProject>(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true
    },
    technologies: {
      type: [String],
      required: true
    },
    images: {
      type: [String],
      default: []
    }
  },
  { timestamps: true }
)

export const Projects = model<TProject>('Projects', projectSchema)
