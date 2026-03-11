# Prashant Raj - Portfolio Website

A modern, responsive portfolio website built with React, Vite, TailwindCSS, and Framer Motion.

## 🚀 Features

- **Modern Dark Theme**: Deep navy/black background with electric blue and cyan highlights
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: Framer Motion powered animations and page transitions
- **Multi-Page Routing**: React Router for seamless navigation
- **SEO Optimized**: Meta tags for better search engine visibility
- **Easy Content Management**: All data stored in separate files for easy editing

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── CompetitiveProgramming.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── pages/             # Page components
│   │   ├── Home.jsx
│   │   └── FreelancingTeam.jsx
│   ├── data/              # Content data files
│   │   ├── projects.js
│   │   ├── skills.js
│   │   ├── experience.js
│   │   └── teamMembers.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: React Icons
- **Fonts**: Inter & Space Grotesk (Google Fonts)

## 📦 Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## ✏️ Customization Guide

### Adding/Editing Projects
Edit `src/data/projects.js`:
```javascript
{
  id: 1,
  title: "Your Project Name",
  description: "Project description",
  technologies: ["React", "Node.js"],
  liveLink: "https://...",
  githubLink: "https://github.com/...",
  featured: true
}
```

### Adding Team Members
Edit `src/data/teamMembers.js`:
```javascript
{
  id: 2,
  name: "Team Member Name",
  role: "Developer Role",
  bio: "Brief bio...",
  photoUrl: "photo-url",
  skills: ["Skill1", "Skill2"],
  careerPath: [
    { year: "2023", title: "Position" }
  ],
  github: "https://github.com/...",
  linkedin: "https://linkedin.com/in/...",
  email: "email@example.com"
}
```

### Editing Experience
Edit `src/data/experience.js` to add/modify work experience.

### Editing Skills
Edit `src/data/skills.js` to update your skills and technologies.

### Changing Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    DEFAULT: '#00d4ff', // Change primary color
  },
  secondary: {
    DEFAULT: '#6c63ff', // Change secondary color
  }
}
```

## 📧 Contact Information

Update your contact details in:
- `src/components/Contact.jsx`
- `src/data/teamMembers.js`
- `index.html` (for SEO meta tags)

## 🎨 Customizing Profile Photo

Replace the placeholder URLs in:
- `src/components/About.jsx`
- `src/data/teamMembers.js`

## 📱 Sections

1. **Home/Hero**: Landing page with animated text
2. **About**: Bio, stats, and downloadable resume
3. **Experience**: Timeline of work experience
4. **Projects**: Featured and other projects
5. **Skills**: Technical and soft skills
6. **Competitive Programming**: CF and CodeChef profiles
7. **Freelancing Team**: Dedicated page for team info
8. **Contact**: Contact form and social links

## 🚀 Deployment

Deploy to Vercel, Netlify, or any static hosting:

```bash
npm run build
# Upload the 'dist' folder to your hosting service
```

## 📝 License

© 2025 Prashant Raj. All rights reserved.

---

**Built with ❤️ by Prashant Raj**
