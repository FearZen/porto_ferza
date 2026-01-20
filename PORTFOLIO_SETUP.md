# 🎨 Fernanda's Professional Portfolio

Portfolio website yang profesional dengan animasi menarik menggunakan Next.js, Tailwind CSS, dan Framer Motion.

## 📋 Struktur File

- **`app/page.tsx`** - Halaman utama (Home) dengan Hero, About, Projects, dan Contact section
- **`app/cv-page.tsx`** - Halaman CV detail dengan Education, Experience, dan Skills yang terintegrasi

## 🚀 Cara Menggunakan

### 1. **Menambahkan Foto Profil**

Foto profil ditempatkan di folder `public/`:

```bash
1. Letakkan file foto Anda di folder: /public/profile.jpg
2. Pastikan nama file sesuai dengan yang di referensi di cv-page.tsx
3. Format yang direkomendasikan: JPG atau PNG (500x500px)
```

### 2. **Mengedit Data CV**

Edit file `app/cv-page.tsx` dan ubah data dalam objek `cvData`:

```tsx
const cvData = {
  name: "Fernanda Wawang Azraqi",
  title: "Fullstack Developer",
  location: "Surabaya, Indonesia",
  email: "fernandaazra@gmail.com",
  phone: "+62 821-3109-1937",
  // ... data lainnya
};
```

### 3. **Mengedit Projects**

Update array `projects` di `page.tsx` atau `cv-page.tsx`:

```tsx
const projects = [
  {
    title: "Project Name",
    description: "Deskripsi project Anda",
    tech: ["Tech1", "Tech2", "Tech3"],
    link: "https://project-link.com",
  },
  // ... project lainnya
];
```

### 4. **Mengedit Skills**

Update array `skills` di file yang sesuai:

```tsx
const skills = [
  "Laravel",
  "PHP",
  "PostgreSQL",
  // ... skill lainnya
];
```

### 5. **Mengganti Link Kontak**

Cari dan ubah link di section Contact:

- **Email**: Ubah `mailto:fernandaazra@gmail.com` dengan email Anda
- **LinkedIn**: Ubah URL LinkedIn
- **GitHub**: Ubah URL GitHub

## 💻 Cara Menjalankan

### Development Server

```bash
npm run dev
```

Buka browser di: `http://localhost:3000`

### Build untuk Production

```bash
npm run build
npm start
```

## 🎨 Fitur-Fitur

✨ **Animasi Smooth**
- Entrance animations dengan Framer Motion
- Hover effects yang elegan
- Scroll-triggered animations

📱 **Responsive Design**
- Mobile-friendly layout
- Tailored untuk semua ukuran layar
- Dark mode support

🎯 **Professional Layout**
- Gradient text colors
- Modern card designs
- Glassmorphism effects

## 📂 Struktur Folder

```
fe-portfolio/
├── app/
│   ├── page.tsx          # Home page
│   ├── cv-page.tsx       # CV page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── public/
│   └── profile.jpg       # 👈 Letakkan foto di sini
├── package.json
└── tailwind.config.js
```

## 🛠️ Dependencies

- **Next.js 16** - React framework
- **Framer Motion** - Animation library
- **Tailwind CSS 4** - Styling
- **TypeScript** - Type safety

## 📝 Tips Customization

### Mengubah Warna Theme

Edit Tailwind classes di komponen:
- `from-blue-600` → dari-color Anda
- `to-purple-600` → ke-color Anda

### Mengubah Font

Edit di `app/layout.tsx`:
```tsx
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
```

### Menambah Section Baru

1. Copy struktur section yang sudah ada
2. Wrap dengan `<motion.section>`
3. Tambahkan variasi animasi dengan Framer Motion

## 🚀 Deploy

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

1. Push ke GitHub
2. Connect repository ke Netlify
3. Deploy automatically

## ✅ Checklist Sebelum Deploy

- [ ] Foto profil sudah ditambahkan di `/public/`
- [ ] Data CV sudah diupdate
- [ ] Email kontak sudah diubah
- [ ] LinkedIn & GitHub links sudah ditambahkan
- [ ] Projects sudah diupdate dengan project Anda
- [ ] Teksnya sudah dikustomisasi

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)

---

**Happy coding! 🚀** Semoga portfolio Anda sukses menarik perhatian client dan recruiter!
