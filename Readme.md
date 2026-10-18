# 📚 The Reading Room

A modern, responsive independent bookstore website built with **React, Vite, and Tailwind CSS v4**.

The Reading Room provides a welcoming digital space for book lovers to discover fiction, non-fiction, and staff-recommended books. The website features an interactive book collection, category filtering, quantity selection, and upcoming bookstore events.

## 🚀 Features

- **Responsive Design** — Optimized for mobile, tablet, and desktop screens.
- **Book Collection** — Browse Fiction, Non-Fiction, and Staff Picks.
- **Category Filtering** — Filter books dynamically using React's `useState` hook.
- **Quantity Stepper** — A reusable controlled component for selecting book quantities.
- **Dynamic Rendering** — Book cards are generated from JavaScript product data.
- **Upcoming Events** — View bookstore events and activities.
- **Responsive Navigation** — Mobile hamburger menu and smooth section navigation.
- **Modern Styling** — Custom bookstore theme using Tailwind CSS v4.
- **Accessibility** — Semantic HTML, descriptive image text, and accessible navigation controls.
- **Responsive Layout** — Designed to prevent horizontal overflow across screen sizes.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React | Component-based user interface |
| Vite | Development server and build tool |
| JavaScript (ES6+) | Application logic |
| Tailwind CSS v4 | Responsive styling and custom theme |
| HTML5 | Semantic page structure |
| CSS3 | Global styling and theme configuration |

## 📁 Project Structure

```text
the-reading-room/
├── public/
│   └── images/
│       ├── fiction/
│       ├── non-fiction/
│       └── staffpicks/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── BookGrid.jsx
│   │   ├── BookCard.jsx
│   │   ├── QuantityStepper.jsx
│   │   ├── Events.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── products.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## ⚙️ Getting Started

### Prerequisites

Make sure you have installed:

- Node.js (a version supported by your installed Vite release)
- npm
- Git (optional)

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
```

### 2. Navigate to the Project

```bash
cd YOUR-REPOSITORY
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

`http://localhost:5173`

## 📦 Production Build

To create a production-ready build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

The production files are generated in the `dist/` directory.

## 📚 Book Categories

The bookstore includes nine books across three categories.

### Fiction Favorites

- The Midnight Library — Matt Haig
- Tomorrow, and Tomorrow, and Tomorrow — Gabrielle Zevin
- The Seven Husbands of Evelyn Hugo — Taylor Jenkins Reid

### Non-Fiction

- Atomic Habits — James Clear
- Educated — Tara Westover
- The Art of Gathering — Priya Parker

### Staff Picks

- Braiding Sweetgrass — Robin Wall Kimmerer
- Piranesi — Susanna Clarke
- Before the Coffee Gets Cold — Toshikazu Kawaguchi

## ⚛️ React Functionality

### Category Filtering

The application uses React's `useState` hook to manage the selected category.

Users can select **All Books**, **Fiction**, **Non-Fiction**, or **Staff Picks**, and the displayed books update immediately without refreshing the page.

### Reusable Components

The application uses reusable components to maintain a consistent design and reduce duplicated code.

### Controlled Quantity Stepper

Each book includes a reusable `QuantityStepper` component.

The parent component manages the quantity state and passes the current value and an update callback to the stepper through props.

Each book maintains its own selected quantity.

## 🎨 Design

The Reading Room uses a warm, bookstore-inspired visual theme:

- Forest green primary colors
- Cream backgrounds
- Gold accents
- Georgia serif headings
- Arial body typography
- Responsive Flexbox and Grid layouts

## ♿ Accessibility

The website incorporates accessibility considerations, including semantic HTML elements, descriptive image alternatives, keyboard-operable controls, and accessible navigation labels.

## 🔮 Future Improvements

- Shopping cart functionality
- Book search by title or author
- Price sorting
- Book detail pages
- Persistent cart using local storage
- Checkout integration
- Backend API and database

## 📄 License

This project was created for educational and portfolio purposes. Book titles and cover images belong to their respective rights holders.

---

**The Reading Room** — *Good books. Great company.*