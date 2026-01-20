# 📷 Setup Foto Profil

## Cara menambahkan foto profil Anda

### Opsi 1: Tambahkan foto lokal
1. Siapkan foto profil Anda (format: JPG, PNG, WebP)
2. Rename menjadi `profile.jpg` (atau sesuaikan nama)
3. Letakkan di folder `/public/` 

```
fe-portfolio/
├── public/
│   └── profile.jpg  ← letakkan foto di sini
├── app/
└── ...
```

4. Update referensi di `app/cv-page.tsx`:
```tsx
// Ganti baris ini (line 14):
profileImage: "/api/placeholder/200/200",

// Menjadi:
profileImage: "/profile.jpg",
```

5. Restart dev server (Ctrl+C kemudian `npm run dev`)

### Opsi 2: Gunakan URL foto online
Jika Anda punya foto di internet, ubah line 14 di `app/cv-page.tsx`:

```tsx
profileImage: "https://link-foto-anda.jpg",
```

### Ukuran rekomendasi
- **Dimensi**: 200x200 px atau lebih (foto akan di-crop otomatis)
- **Format**: JPG, PNG, atau WebP
- **Ukuran file**: Maksimal 500KB

### Styling foto
Foto akan otomatis:
- ✨ Ditampilkan dalam format bulat dengan border gradient
- 💫 Memiliki efek glow animasi yang smooth
- 🎨 Responsive di semua ukuran layar

---

**Saat ini**: Menggunakan placeholder 📷 (akan di-update setelah Anda tambahkan foto)
