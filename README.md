# rtk-api-demo 🚀

> **A modern API-driven React application using Redux Toolkit, RTK Query, React Hook Form, and React Router.**

## 📖 Overview
This project is a **React-based API demo** that showcases efficient API management using **Redux Toolkit (RTK Query)** and form handling with **React Hook Form**. It demonstrates how to:
- Fetch, cache, and update API data efficiently
- Implement CRUD operations with RTK Query
- Manage form submissions with validation
- Use React Router for navigation

## 🎯 Features
✅ **React Router** - Client-side navigation
✅ **Redux Toolkit** - State management
✅ **RTK Query** - API caching & data fetching
✅ **React Hook Form** - Form handling & validation
✅ **CRUD operations** - Create, Read, Update, Delete users
✅ **Automatic caching & refetching** - Uses `providesTags` & `invalidateTags`
✅ **Optimistic UI updates** - Immediate UI feedback before API confirmation
✅ **Error handling** - Graceful API error management

## 🚀 Getting Started
### 1️⃣ Install dependencies
```sh
pnpm install
```

### 2️⃣ Start the development server
```sh
pnpm dev
```

### 3️⃣ Open the app in your browser
[http://localhost:5173](http://localhost:5173) 🎉

## 🛠 Tech Stack
- **React** - Component-based UI
- **Redux Toolkit (RTK Query)** - State & API management
- **React Router** - Navigation & routing
- **React Hook Form** - Form handling & validation
- **Tailwind CSS (optional)** - Styling

## 📌 Project Structure
```
rtk-api-demo/
│── src/
│   ├── api/            # RTK Query API services
│   ├── features/       # Redux slices
│   ├── pages/          # React pages (Home, UserDetail, AddUser)
│   ├── store.js        # Redux store configuration
│   ├── App.jsx         # Main application component
│   ├── main.jsx        # Entry point
│── public/             # Static assets
│── package.json        # Project metadata
│── README.md           # Project documentation
```

## 🔗 Routes & Functionality
| Route            | Description |
|-----------------|-------------|
| `/`             | Display user list (with delete functionality) |
| `/user/:id`     | View & edit user details |
| `/add-user`     | Add a new user (form submission) |

## 📡 API Integration (RTK Query)
| Hook | Functionality |
|------|--------------|
| `useGetUsersQuery` | Fetch user list (auto-refresh every 5s) |
| `useGetUserByIdQuery` | Fetch a single user by ID |
| `useAddUserMutation` | Add a new user (triggers auto-refresh) |
| `useDeleteUserMutation` | Delete a user (auto-refresh list) |
| `useUpdateUserMutation` | Update user details |

## 📝 Contributing
Pull requests are welcome! Feel free to open an issue for feature suggestions or improvements.

## 📜 License
This project is open-source under the **MIT License**.

---
✨ Built with **React, Redux Toolkit, and RTK Query** ✨