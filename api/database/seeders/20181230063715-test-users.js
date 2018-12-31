'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Bryan',
          lastName: 'de Oliveira',
          email: 'test@test.com',
          password:
            '$2a$10$Jv/SjTv9SRhQfiaszx.1muzZJeolD9HG6I5EZ64aFjdLLK6ws1MYq',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'John',
          lastName: 'Doe',
          email: 'jd@test.com',
          password:
            '$2a$10$Jv/SjTv9SRhQfiaszx.1muzZJeolD9HG6I5EZ64aFjdLLK6ws1MYq',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Bryan test',
          lastName: 'Doe',
          email: 'bryan',
          password:
            '$2a$10$Jv/SjTv9SRhQfiaszx.1muzZJeolD9HG6I5EZ64aFjdLLK6ws1MYq',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
}
