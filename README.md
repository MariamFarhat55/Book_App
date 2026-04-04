# 📚 Book Store React App

## 📝 Description
This project is a simple **React.js** book store app.  
You can browse a collection of books, see details like price and description, and "buy" available copies with a dynamic stock counter.  

---

## 🚀 Features
- Display all books in a responsive grid layout.
- Buy books with live stock updates.
- Dynamic button colors based on stock:
  - Green: Available
  - Yellow: Low stock
  - Red: Sold out
- Utilizes **props** and **useState** for state management.
- Styled with **Bootstrap** and **CSS Modules**.

---

## 🛠️ Technologies
- React.js
- Bootstrap 5
- CSS Modules
- JavaScript (ES6)

---

## 📁 Project Structure
- `books.js` → Book data (array of objects).  
- `BooksList.jsx` → Component that maps through books and displays them.  
- `BookCard.jsx` → Individual book card with dynamic purchase button.  
- `App.jsx` → Main component, includes Header, BooksList, and Footer.  
- `Header.jsx` → Page header.  
- `Footer.jsx` → Page footer.  
- `assets/` → Book images.  
- `css/card.module.css` → Book card styling.  

---

## 💻 Installation & Run
1. Clone the repository:
```bash
git clone https://github.com/USERNAME/REPO_NAME.git