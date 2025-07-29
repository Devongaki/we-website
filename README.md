# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

To start your server for this React + Vite project, you have a few options based on the scripts in your `package.json`:

- To start the Vite development server (frontend only), run:
  ```
  npm run dev
  ```

- To start the backend server (Node/Express, from `server.js`), run:
  ```
  npm run server
  ```

- To start both the frontend and backend servers together, run:
  ```
  npm run dev:all
  ```

This last command uses `concurrently` to run both the frontend and backend at the same time, which is usually what you want for full development.

Let me know if you want to run one of these commands now or need more details!
