const { faker } = require('@faker-js/faker');

function createRandomPosts() {
  return {
    title: faker.book.title(),
    content: faker.lorem.paragraphs(10),
    published: true,
    authorId: 1,
  };
}

const posts = faker.helpers.multiple(createRandomPosts, {
  count: 7,
});

module.exports = posts;
