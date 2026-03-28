<img width="1024" height="559" alt="image" src="https://github.com/user-attachments/assets/fac9c5b7-603b-486d-bd02-a19c10b7b138" />



### 🚀 Overview

The primary goal of this project is to demonstrate a seamless **Continuous Integration and Continuous Deployment (CI/CD)** pipeline. By leveraging GitHub Actions, every push to the main branch triggers an automated build and deployment process, ensuring that the live Azure Web App always reflects the latest stable code.

### 🛠️ Tech Stack

*   **Frontend Framework:** [React](https://react.dev/)
    
*   **Build Tool:** [Vite](https://vitejs.dev/) (Optimized for speed and HMR)
    
*   **Hosting Platform:** [Azure App Service](https://azure.microsoft.com/en-us/products/app-service/)
    
*   **CI/CD Engine:** [GitHub Actions](https://github.com/features/actions)
    
*   **Linting:** [ESLint](https://eslint.org/)
    

### ⚙️ CI/CD Workflow Highlights

The automated pipeline defined in .github/workflows handles the following lifecycle stages:

1.  **Environment Setup:** Initializes the runner with the required Node.js version.
    
2.  **Dependency Management:** Installs project dependencies using npm install.
    
3.  **Production Build:** Generates a minified, production-ready bundle via Vite.
    
4.  **Artifact Deployment:** Securely uploads the build artifacts to the designated Azure Web App slot using a **Publish Profile** or **Service Principal**.
    

### 📖 Getting Started

#### Prerequisites

*   An active **Azure Subscription**.
    
*   An **Azure App Service** (Web App) instance created.
    
*   Node.js (v18 or higher recommended).
    

#### Configuration

To connect this repository to your Azure instance:

1.  Download the **Publish Profile** from your Azure Web App overview page.
    
2.  Add the content of the profile as a **GitHub Secret** named AZURE\_WEBAPP\_PUBLISH\_PROFILE.
    
3.  Ensure the app-name in the workflow YAML matches your Azure resource name.
    

### 🛠️ Available Scripts

In the project directory, you can run:

**Command-Action**
```
npm run dev
Runs the app in development mode with HMR.

npm run build 
Builds the app for production to the dist folder.

npm run lint - Runs ESLint to check for code quality issues.

npm run preview
Locally previews the production build.
```
