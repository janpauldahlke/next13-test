import { faker } from '@faker-js/faker';

export const seed = () => ({
  text: faker.lorem.lines(8)
})
