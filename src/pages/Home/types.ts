import * as zod from 'zod'
import { schema } from './schema'

export type NewCycleFormData = zod.infer<typeof schema>
