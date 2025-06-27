### Test ID: SMOKE-002

### Test Description: Max Number of Projects on Free Plan

#### Test Objective:

The objective of this test is to verify that a user cannot create more than the maximum allowed number of projects on the free plan in the Todoist application.

#### Steps to Perform:

1. **Navigate to the "Today" page:**

   - Go to the main page of the Todoist application that displays today's tasks.

2. **Create multiple projects:**

   - Create five projects with the following names and color:
     - **Project One** with color **Intense Red**
     - **Project Two** with color **Intense Red**
     - **Project Three** with color **Intense Red**
     - **Project Four** with color **Intense Red**
     - **Project Five** with color **Intense Red**

3. **Attempt to create an additional project:**

   - Open the "My Projects" menu from the left panel.
   - Attempt to create a sixth project.

#### Expected Result:

- The user should see a premium modal indicating that the limit of 5 active projects has been reached.

#### Pre-Requirements:

- The user must be logged in beforehand to access the "Today" page and create projects.

#### Additional Notes:

- Ensure that the test cleans up all created projects after execution to maintain a clean test environment.
