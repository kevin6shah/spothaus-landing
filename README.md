# Spothaus Landing Page

AI-powered app that helps you discover the perfect NYC spots based on vibe, not just ratings or location.

## 🚀 Deployment to GitHub Pages

### Prerequisites
- GitHub account
- Git installed on your machine

### Setup Steps

1. **Create a new GitHub repository:**
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it `spothaus-landing` (or your preferred name)
   - Make it public

2. **Update the homepage URL in package.json:**
   - Replace `[YOUR_USERNAME]` with your actual GitHub username
   - Example: `"homepage": "https://kevinshah.github.io/spothaus-landing"`

3. **Initialize Git and push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/[YOUR_USERNAME]/spothaus-landing.git
   git push -u origin main
   ```

4. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click "Settings" → "Pages"
   - Source: "Deploy from a branch"
   - Branch: "gh-pages" → "Save"

### Custom Domain (Optional)
- In GitHub Pages settings, add your custom domain
- Update the `homepage` field in package.json
- Add a `CNAME` file in the `public` folder with your domain

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## 📱 Features
- Responsive design
- PWA support
- Smooth animations with Framer Motion
- Modern UI with Tailwind-inspired CSS
- Mobile-first approach

## 🌐 Live Demo
Your app will be available at: `https://[YOUR_USERNAME].github.io/spothaus-landing`
