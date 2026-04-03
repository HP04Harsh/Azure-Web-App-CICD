<img width="1024" height="559" alt="image" src="https://github.com/user-attachments/assets/fac9c5b7-603b-486d-bd02-a19c10b7b138" />

🚀 Vite + React: Seamless CI/CD to Azure App Service
====================================================

This repository provides a robust blueprint for automating the delivery of modern React applications to **Azure App Service**. By integrating **Vite** for rapid builds and **GitHub Actions** for orchestration, this project minimizes manual intervention and ensures code quality at every commit.

🛠️ Tech Stack & Tools
----------------------

*   **Core:** [React](https://react.dev/) (Functional Components & Hooks)
    
*   **Build Tool:** [Vite](https://vitejs.dev/) (ESM-based HMR and lightning-fast bundling)
    
*   **Hosting:** [Azure App Service](https://azure.microsoft.com/en-us/products/app-service/) (Linux/Windows containers)
    
*   **CI/CD:** [GitHub Actions](https://github.com/features/actions)
    
*   **Code Quality:** [ESLint](https://eslint.org/)
    

⚙️ Automated Workflow Architecture
----------------------------------

The pipeline defined in .github/workflows follows a strict production-grade lifecycle:

1.  **Environment Initialization:** Provisions a Node.js runner (v18+) to match production parity.
    
2.  **Dependency Resolution:** Executes npm install to build the local dependency tree.
    
3.  **Linting & Validation:** Runs static analysis via npm run lint to ensure code standards.
    
4.  **Optimized Compilation:** Triggers npm run build to generate a tree-shaked, minified /dist folder.
    
5.  **Secure Deployment:** Utilizes the **Azure Publish Profile** to push artifacts securely to the Web App slot.
    

🚀 Getting Started
------------------

### Prerequisites

*   An active **Azure Subscription**.
    
*   A pre-configured **Web App** instance on Azure.
    
*   Node.js (v18.x or higher) installed locally.
    

### Deployment Configuration
```
1.  **Secret Management:** Download your [Publish Profile](https://github.com/HP04Harsh/azure-appservice-react-deploy-cicd#configuration) from the Azure Portal.
    
2.  **GitHub Setup:** Navigate to Settings > Secrets and variables > Actions and add:
    
    *   AZURE\_WEBAPP\_PUBLISH\_PROFILE: Paste the XML content of your profile.
        
3.  **Workflow Sync:** Update the app-name in .github/workflows/main.yml to match your Azure resource name.
    
```
scripts Available Scripts
-------------------------
```
npm run dev Spins up the Vite development server.

npm run build Compiles the production-ready bundle.

npm run lint Performs static code analysis.

npm run preview Previews the production build locally.
```
🤝 Contributing
---------------

Contributions are welcome! Please feel free to submit a Pull Request or open an Issue for feature requests.
