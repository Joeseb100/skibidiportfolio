# Cyberpunk Portfolio

A stylish cyberpunk-themed portfolio website built with React, Vite, and TailwindCSS.

## Deployment to GitHub Pages

To fix the GitHub Pages deployment issue, follow these steps:

1. Go to your GitHub repository: https://github.com/Joeseb100/goofyportfolio
2. Navigate to Settings > Pages
3. Under "Source", select "GitHub Actions" as the deployment source
4. This will allow the GitHub Actions workflow to deploy your site

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

- `src/` - React components and application code
- `.github/workflows/` - GitHub Actions workflow for deployment
- `vite.config.js` - Vite configuration with base path set for GitHub Pages