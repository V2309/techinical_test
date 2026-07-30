# QTable — Landing Page

Trang landing page marketing cho sản phẩm **QTable**, được xây dựng từ thiết kế Figma và triển khai với React + Vite + TailwindCSS v4.
<img width="1898" height="2497" alt="image" src="https://github.com/user-attachments/assets/06369ff6-e05c-4e36-ba2c-54c8fd2ecaac" />

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

---

## 🎨 Design System

### Color Tokens (`index.css`)

| Token | Hex | Dùng cho |
|---|---|---|
| `brand-02` | `#BFFB4F` | Màu nhấn chính (neon green), CTA button |
| `brand-2-01` | `#2D2F33` | Màu chữ chính (dark charcoal) |

### Typography

- **Font**: [Manrope](https://fonts.google.com/specimen/Manrope) — weights 300 → 800
- **Base color**: `#2D2F33`
- Scrollbar bị ẩn toàn cục để UI sạch hơn

---

## 🧩 Các Component chính

### `Banner`
Hero section của trang, responsive hoàn toàn:
- **Desktop**: Layout 2 cột — nội dung text bên trái, card demo bên phải
- **Mobile**: Layout dọc — card ảnh sản phẩm + nội dung text phía dưới

### `Header` / `MobileMenu`
- Header sticky với logo + desktop navigation
- Mobile menu dạng full-screen overlay với:
  - Collapsible "Giải pháp" sub-menu
  - Decorative blob trang trí ở góc dưới (từ thiết kế Figma)
  - Lock scroll body khi menu mở

### `InfoSection` / `TabBar` / `InfoDetail`
Section giới thiệu tính năng sản phẩm với hệ thống tab tương tác.

---

## ⚙️ Cài đặt & Chạy

### Yêu cầu
- Node.js >= 18
- npm >= 9

### Cài dependencies

```bash
npm install
```

### Chạy dev server

```bash
npm run dev
```

Mặc định chạy tại: **http://localhost:5173**

### Build production

```bash
npm run build
```

Output sẽ nằm trong thư mục `dist/`.

### Preview production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## 📐 Responsive Breakpoints

Dự án sử dụng breakpoints mặc định của Tailwind:

| Breakpoint | Width |
|---|---|
| `sm` | >= 640px |
| `md` | >= 768px |
| `lg` | >= 1024px |
| `xl` | >= 1280px |

Mobile-first approach — layout desktop được bật từ `lg:` trở lên.

---

## 📄 License

Private project — All rights reserved.
