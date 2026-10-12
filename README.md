# 🚀 DevStack — Technology Stack Builder

**Build your ideal tech stack, one technology at a time.**

DevStack is a responsive web application that helps developers explore popular programming languages, frameworks, tools, and other technologies, then build a personalized technology stack based on their needs.

## ✨ Features

- **Explore Technologies:** Browse technology cards with icons, descriptions, categories, ratings, and difficulty levels.
- **Add to Stack:** Add your favorite technologies to your personal stack.
- **Remove from Stack:** Remove individual technologies whenever you want.
- **Remove All:** Clear your selected stack at once.
- **Duplicate Prevention:** Prevents the same technology from being added more than once.
- **Interactive Feedback:** Displays toast notifications for successful actions, duplicate selections, and removals.
- **Stack Counter:** Shows the number of technologies currently selected.
- **Responsive Design:** Works across desktop, tablet, and mobile devices.
- **Modern UI:** Built with Tailwind CSS and DaisyUI for a clean, consistent interface.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React | Building reusable UI components |
| TypeScript | Type safety and maintainable code |
| Vite | Development server and build tool |
| Tailwind CSS | Utility-first styling |
| DaisyUI | Prebuilt UI components |
| React Toastify | Toast notifications |
| JavaScript (ES6+) | Application logic |

## 📸 Project Overview

DevStack provides an interactive interface where users can explore available technologies and create their own technology stack.

Each technology card displays relevant information, such as its name, icon, category, difficulty level, and rating. Users can add technologies to their stack and remove them whenever necessary.

## 📂 Project Structure

```text
B14-A05-DevStack/
├── public/
│   └── data.json
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Banner.tsx
│   │   ├── Footer.tsx
│   │   ├── AvailableLanguage.tsx
│   │   ├── languages/
│   │   │   └── Languages.tsx
│   │   └── YourStack.tsx
│   ├── types/
│   │   └── languageType.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

*Note: The structure above is illustrative. Adjust the file names and folders to match your actual project.*

## ⚙️ Installation and Setup

Follow these steps to run DevStack locally.

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/) (recommended)

### 1. Clone the Repository

```bash
git clone https://github.com/Hasan-new/B14-A05-DevsStack
```

Replace `https://github.com/Hasan-new/B14-A05-DevsStack` with your actual GitHub repository URL.

### 2. Open the Project Folder

```bash
cd B14-A05-DevStack
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually:

```text
https://b14-a05-devstack-hasan.netlify.app/
```

### 5. Build for Production

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 🌐 Deployment

DevStack can be deployed using platforms such as Netlify or Vercel.

### Deploy with Netlify

1. Push your project to GitHub.
2. Sign in to [Netlify](https://www.netlify.com/).
3. Select **Add new project** and import your GitHub repository.
4. Set the build command to `npm run build`.
5. Set the publish directory to `dist`.
6. Click **Deploy**.

After deployment, Netlify will provide a public URL for your application.

## 🎯 Project Goals

This project demonstrates practical skills in:

- Building reusable React components.
- Using TypeScript interfaces and types.
- Managing state and handling events in React.
- Working with promises and external JSON data.
- Rendering dynamic lists and handling unique keys.
- Implementing add, remove, and duplicate-prevention functionality.
- Creating responsive layouts with Tailwind CSS.
- Providing user feedback through toast notifications.
- Preparing and deploying a production build.

## 🔮 Future Improvements

- Search technologies by name.
- Filter technologies by category.
- Sort technologies by rating or difficulty.
- Save the selected stack using local storage.
- Add detailed technology information pages.
- Allow users to export their selected stack.

## 👨‍💻 Author

**Md. Hasan**

Aspiring Professional Web Developer

GitHub: [My GitHub Profile](https://github.com/Hasan-new)

LinkedIn: [My LinkedIn Profile](https://www.linkedin.com/in/mohammad-hasan-73284291/?isSelfProfile=true)
##Project Link:[My project Link] (https://b14-a05-devstack-hasan.netlify.app/)
---

⭐ If you find this project useful, consider giving it a star on GitHub.

**Built with React, TypeScript, and a passion for web development.**
