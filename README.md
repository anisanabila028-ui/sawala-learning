# sawala-learning

## Tentang Project

Repository ini digunakan untuk mendokumentasikan proses pembelajaran **Fullstack Web Development** mulai dari dasar JavaScript, TypeScript, React, Node.js, hingga Next.js dan integrasi Strapi CMS.

Project ini bertujuan untuk membangun kemampuan dalam membuat aplikasi web, mengelola data melalui API, menyusun komponen yang terstruktur, serta bekerja secara kolaboratif menggunakan Git dan GitHub.

##  Tujuan Pembelajaran

- Memahami dasar JavaScript dan TypeScript.
- Mampu mengolah data menggunakan array, object, dan array methods.
- Memahami asynchronous programming dan Fetch API.
- Mampu membuat REST API sederhana.
- Memahami React component, props, state, dan event handling.
- Membangun aplikasi menggunakan Next.js App Router.
- Mengintegrasikan Next.js dengan Strapi CMS.
- Memahami Git, GitHub, branch, Pull Request, dan code review.
- Mampu menyelesaikan final project aplikasi artikel sederhana.

---

## Learning Roadmap

### 1. JavaScript Fundamentals & GitHub

**Materi yang dipelajari:**
- Dasar ECMAScript: `let`, `const`, tipe data, dan kondisi `if/else`.
- Function.
- Struktur data dasar: object dan array.
- Basic debugging menggunakan `console.log` dan browser DevTools.
- Looping dan array methods: `map`, `filter`, `find`, `forEach`, dan `reduce`.
- Destructuring dan spread operator.
- ES Modules: `import` dan `export`.

**Target pembelajaran:**
- Mampu membaca dan menulis program JavaScript dari nol.
- Mampu mengolah data array dan object menggunakan array methods.
- Mampu memecah kode menjadi beberapa module.

**Latihan dan mini project:**
- Kalkulator sederhana.
- Pengolahan data siswa.
- Daftar produk atau artikel dari data lokal dengan fitur filter dan pencarian.

**Praktik GitHub:**
- Membuat akun dan repository GitHub.
- Menulis README.
- Menggunakan `git add`, `git commit`, dan `git push`.
- Membuat minimal 3 commit yang bermakna.
- Mempraktikkan branch dan Pull Request.

### 2. Asynchronous JavaScript, Fetch API & TypeScript

**Materi yang dipelajari:**
- Promise dan `async/await`.
- Fetch API untuk mengambil data.
- Dasar HTTP: method dan status code.
- Format JSON.
- Error handling.
- Dasar TypeScript: `type` dan `interface`.

**Target pembelajaran:**
- Mampu mengambil data dari API.
- Memahami bentuk request dan response.
- Memahami typing dasar pada TypeScript.

**Mini project:**
- Membuat aplikasi yang mengonsumsi public API.
- Menampilkan state loading, error, dan data.
- Mengimplementasikan TypeScript pada aplikasi.

**Praktik GitHub:**
- Membuat Issue untuk setiap task atau bug.
- Membuat Pull Request untuk setiap perubahan kode.
- Mendapatkan minimal 1 code review atau feedback dari peserta lain atau mentor.

### 3. Backend Development dengan Node.js & Express

**Materi yang dipelajari:**
- Node.js runtime dan dasar event loop.
- Module system: CommonJS dan ES Modules.
- npm dan `package.json`.
- Membuat server menggunakan Express.
- Routing dan middleware.
- REST API dan operasi CRUD.
- Environment variable menggunakan `.env`.

**Target pembelajaran:**
- Mampu membuat REST API sederhana menggunakan Node.js dan Express.
- Memahami peran backend dalam aplikasi fullstack.

**Mini project:**
- Membuat REST API untuk mengelola data artikel.
- Mengimplementasikan operasi CRUD: Create, Read, Update, dan Delete.
- Menguji API menggunakan Postman atau Thunder Client.

**Praktik GitHub:**
- Membuat Issue untuk setiap task atau bug.
- Membuat Pull Request untuk setiap perubahan.
- Mendapatkan minimal 1 code review.
- Menulis README yang menjelaskan cara menjalankan server.

### 4. React Fundamentals

**Materi yang dipelajari:**
- JSX dan component.
- Props dan state.
- Event handling.
- Conditional rendering.
- List rendering.
- Dasar penggunaan `useEffect`.

**Target pembelajaran:**
- Mampu membangun UI menggunakan komponen-komponen kecil.
- Memahami aliran data dari parent component ke child component.

**Mini project:**
- Membuat aplikasi artikel atau dashboard sederhana menggunakan React dan TypeScript.

**Praktik GitHub:**
- Berkolaborasi menggunakan branch dan Pull Request.
- Meninjau struktur component bersama peserta lain.
- Memperbarui progress pembelajaran di README.

### 5. Next.js, Atomic Design & Strapi CMS

**Materi yang dipelajari:**
- Next.js App Router: `page` dan `layout`.
- Routing.
- Server Component dan Client Component.
- Data fetching.
- Atomic Design: atoms, molecules, dan organisms.
- Integrasi Strapi melalui REST API.
- Pembuatan content type di Strapi.
- Environment variable.
- Dasar deployment aplikasi.

**Target pembelajaran:**
- Mampu membangun aplikasi Next.js dengan struktur yang terorganisasi.
- Mampu mengambil data dari Strapi sebagai CMS.
- Mampu menjelaskan alur data:

  `Strapi → REST API → Next.js → UI`

**Final project:**
Membangun aplikasi artikel sederhana dengan ketentuan:
- Strapi digunakan sebagai Content Management System (CMS).
- Next.js digunakan sebagai frontend.
- Data artikel diambil dari Strapi REST API.
- Komponen disusun menggunakan pendekatan Atomic Design.
- Aplikasi memiliki tampilan daftar artikel dan detail artikel.
- README menyediakan petunjuk setup dan cara menjalankan aplikasi.

**Praktik GitHub:**
- Membagi task melalui Issues.
- Setiap peserta atau kelompok memiliki Pull Request sendiri.
- Melakukan review sebelum merge.
- Menulis README dengan instruksi setup lengkap.
- Menunjukkan kontribusi masing-masing peserta atau kelompok.

---

##  Teknologi yang Digunakan

| Teknologi | Kegunaan |
|---|---|
| JavaScript | Bahasa pemrograman dasar |
| TypeScript | Menambahkan sistem tipe pada JavaScript |
| React | Membangun UI berbasis component |
| Next.js | Framework React untuk aplikasi web |
| Node.js | Menjalankan JavaScript di sisi server |
| Express | Membuat server dan REST API |
| Strapi | CMS untuk mengelola konten |
| SQLite | Database lokal untuk Strapi |
| Git | Mengelola versi kode |
| GitHub | Menyimpan repository dan kolaborasi |

##  Struktur Project

```text
└── sawala-learning-project/
    ├── README.md
    ├── .gitignore
    │
    ├── 01-javascript-fundamentals/            
    │   ├── 01-variabel-tipe-data/
    │   │   └── index.js
    │   ├── 02-kondisi-function/
    │   │   └── index.js
    │   ├── 03-object-array/
    │   │   └── index.js
    │   ├── 04-looping-array-methods/
    │   │   └── index.js
    │   ├── 05-destructuring-spread/
    │   │   └── index.js
    │   ├── 06-es-modules/
    │   │   ├── math.js
    │   │   └── index.js
    │   └── mini-project-produk-list/
    │       ├── data.js
    │       └── index.js
    │
    ├── 02-async-api-typescript/              
    │   ├── 01-promise-async-await/
    │   │   └── index.js
    │   ├── 02-fetch-api/
    │   │   └── index.js
    │   ├── 03-error-handling/
    │   │   └── index.js
    │   ├── 04-typescript-basic/
    │   │   ├── type-interface.ts
    │   │   └── index.ts
    │   └── mini-project-consume-api/
    │       ├── api.ts
    │       └── index.ts
    │
    ├── 03-nodejs-fundamentals/                
    │   ├── 01-module-system/
    │   │   └── index.js
    │   ├── 02-npm-package-json/
    │   │   └── package.json
    │   └── mini-project-rest-api/
    │       ├── src/
    │       │   ├── routes/
    │       │   │   └── articles.route.js
    │       │   ├── controllers/
    │       │   │   └── articles.controller.js
    │       │   ├── middlewares/
    │       │   │   └── logger.middleware.js
    │       │   └── server.js
    │       ├── .env
    │       └── package.json
    │
    ├── 04-react-fundamentals/                
    │   └── mini-project-react-dashboard/
    │       ├── src/
    │       │   ├── components/
    │       │   │   ├── Card.tsx
    │       │   │   └── Button.tsx
    │       │   ├── App.tsx
    │       │   └── main.tsx
    │       ├── index.html
    │       └── package.json
    │
    └── 05-nextjs-strapi-final-project/        
        ├── frontend-nextjs/
        │   ├── app/
        │   │   ├── layout.tsx
        │   │   ├── page.tsx
        │   │   └── articles/
        │   │       └── [slug]/
        │   │           └── page.tsx
        │   ├── components/
        │   │   ├── atoms/
        │   │   │   └── Button.tsx
        │   │   ├── molecules/
        │   │   │   └── ArticleCard.tsx
        │   │   └── organisms/
        │   │       └── ArticleList.tsx
        │   ├── lib/
        │   │   └── strapi.ts
        │   ├── .env.local
        │   └── package.json
        └── backend-strapi/
            ├── src/
            │   └── api/
            │       └── article/
            ├── .env
            └── package.json
## GitHub Workflow

Alur kerja yang digunakan selama pembelajaran:

1. Membuat Issue untuk task atau bug.
2. Membuat branch untuk mengerjakan task.
3. Mengembangkan dan menguji kode secara lokal.
4. Menyimpan perubahan menggunakan commit.
5. Push branch ke GitHub.
6. Membuat Pull Request.
7. Meminta review dari teman atau mentor.
8. Memperbaiki feedback jika diperlukan.
9. Merge setelah perubahan diperiksa.

Contoh perintah Git:

```bash
git checkout -b feat/article-list
git add .
git commit -m "feat: add article list component"
git push -u origin feat/article-list
```

Setelah branch berhasil di-push, buat Pull Request melalui GitHub.

## Progress Pembelajaran

- [ ] JavaScript Fundamentals
- [ ] Git dan GitHub Basics
- [ ] Asynchronous JavaScript dan Fetch API
- [ ] TypeScript Fundamentals
- [ ] Node.js dan Express REST API
- [ ] React Fundamentals
- [ ] Next.js App Router
- [ ] Atomic Design
- [ ] Integrasi Next.js dengan Strapi
- [ ] Final Project
- [ ] Dokumentasi dan Code Review

##  Kesimpulan

Repository ini menjadi dokumentasi perjalanan pembelajaran Fullstack Web Development. Melalui latihan, mini project, dan final project, diharapkan peserta mampu membangun aplikasi web yang terstruktur, terhubung dengan API, dan dikelola menggunakan workflow GitHub yang baik.
