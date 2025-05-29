### Test ID: SMOKE-001

### Test Description: Create New Project

#### Test Objective:

The objective of this test is to verify that a user can successfully create a new project in the Todoist application.

#### Steps to Perform:

1. **Navigate to the "Today" page:**

   - Go to the main page of the Todoist application that displays today's tasks.

2. **Select "My Projects" from the left menu:**

   - Select the 'My Projects' option and click the '+' sign.

3. **Add a project:**

   - Click the "Add Project" option.

4. **Fill out the form:**

   - Enter the project name **"New Project"**.
   - Select the project color **"Intense Red"**.
   - Click 'Add' button.

#### Expected Result:

- A new project named **"New Project"** with the color **"Intense Red"** is successfully added to the project list.
- The add project form is closed after the project is added.
- Notifications are automatically closed if they appear.
- The test cleans up after execution by deleting the newly created project.

#### Pre-Requirements:

- The user must be logged in beforehand to access the "Today" page and create a new project.

#### Additional Notes:

- Ensure that the test does not leave any residual data by deleting the created project.