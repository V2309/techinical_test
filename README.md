# QTable — Landing Page


<img width="1898" height="2497" alt="image" src="https://github.com/user-attachments/assets/06369ff6-e05c-4e36-ba2c-54c8fd2ecaac" />


<img width="1920" height="912" alt="image" src="https://github.com/user-attachments/assets/d5e69986-15f7-42da-bb94-dd3882c48b47" />

# Mobi 1
<img width="359" height="1504" alt="image" src="https://github.com/user-attachments/assets/0d903220-ec0d-4ba7-b0f1-68b5ff2986b6" />


# Mobi 2
<img width="367" height="792" alt="image" src="https://github.com/user-attachments/assets/ee086404-dde9-4864-943d-92a4c643c088" />


# Mobi 3
<img width="367" height="792" alt="image" src="https://github.com/user-attachments/assets/75c698e5-c407-4557-82e6-24193bbafb8d" />


# Menu
<img width="367" height="792" alt="image" src="https://github.com/user-attachments/assets/d72422b2-df13-4e42-88e0-0aab80ccbba5" />



---


## 🚀 Tech Stack

| Công nghệ | Phiên bản | Mục đích |
|---|---|---|
| [React](https://react.dev/) | 19 | UI framework |
| [Vite](https://vitejs.dev/) | 8 | Build tool & dev server |
| [TailwindCSS](https://tailwindcss.com/) | 4 | Utility-first CSS |
| [TypeScript](https://www.typescriptlang.org/) | 6 | Type safety |
| [React Router DOM](https://reactrouter.com/) | 7 | Routing |
| [Manrope](https://fonts.google.com/specimen/Manrope) | — | Typography (Google Fonts) |

---

## 📁 Cấu trúc thư mục

```
src/
├── assets/                  # Hình ảnh, icon, logo tĩnh
├── components/
│   ├── Banner.tsx            # Hero section chính (desktop + mobile)
│   ├── InfoSection.tsx       # Section thông tin sản phẩm
│   ├── Header.tsx            # Entry point của Header
│   ├── Header/
│   │   ├── Logo.tsx          # Component logo QTable
│   │   ├── DesktopNav.tsx    # Navigation bar desktop
│   │   └── MobileMenu.tsx    # Overlay menu mobile (full-screen)
│   └── Info/
│       ├── TabBar.tsx        # Tab điều hướng trong InfoSection
│       ├── InfoDetail.tsx    # Nội dung chi tiết từng tab
│       └── LongSubtitle.tsx  # Subtitle dài với highlight text
├── layouts/
│   └── MainLayout.tsx        # Layout wrapper chung
├── App.tsx                   # Root component & routing
├── main.tsx                  # Entry point React DOM
└── index.css                 # Global styles & design tokens
```
