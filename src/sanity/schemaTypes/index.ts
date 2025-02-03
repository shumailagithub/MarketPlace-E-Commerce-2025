import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import { userSchema } from './user'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, userSchema]
}
