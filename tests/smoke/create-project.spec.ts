/* eslint-disable playwright/max-expects */

import { faker } from '@faker-js/faker';
import { expect, test } from '../../src/fixtures/po.fixture';
import { CreateProjectModel } from '../../src/models/create-project.model';

test('should create a new project', { tag: ['@project', '@wip'] }, async ({ homePage}) => {
  const project: CreateProjectModel = {
    name: faker.lorem.word(2),
    color: 'Łosoś',
  };

  await homePage.open();
  await homePage.leftPanel.addNewProject(project);

  await expect(homePage.leftPanel.getProjectByName(project.name)).toBeVisible();
});
