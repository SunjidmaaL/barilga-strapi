# Strapi Cloud Production Deployment Checklist

## ✅ Шалгасан зүйлс

### 1. Configuration Files
- ✅ Database config-оос hardcoded credentials арилгасан
- ✅ Environment variables зөв ашиглаж байгаа
- ✅ Admin config дээр бүх secrets environment variable-аас авч байна
- ✅ Server config дээр APP_KEYS environment variable-аас авч байна

### 2. Dependencies
- ✅ `@strapi/plugin-cloud` суусан байна (5.24.1)
- ✅ `pg` (PostgreSQL) суусан байна
- ✅ `better-sqlite3` арилгасан (PostgreSQL ашиглаж байгаа тул шаардлагагүй)

### 3. Security
- ✅ Бүх sensitive data environment variable-аар дамжин авч байна
- ✅ Hardcoded passwords, keys арилгасан
- ✅ `.env` file `.gitignore`-д багтсан байна

## 📋 Strapi Cloud-д Deploy хийхээс өмнө

### Environment Variables (Strapi Cloud Dashboard дээр тохируулах)

Strapi Cloud дээр дараах environment variables-уудыг тохируулах шаардлагатай:

#### Required Variables:

1. **Database Configuration:**
   ```
   DATABASE_HOST=<Strapi Cloud-ийн өгөгдлийн сангийн host>
   DATABASE_PORT=5432
   DATABASE_NAME=<database name>
   DATABASE_USERNAME=<database username>
   DATABASE_PASSWORD=<database password>
   DATABASE_SSL=true
   DATABASE_SSL_SELF=false
   ```

2. **App Keys (4 ширхэг байх ёстой):**
   ```
   APP_KEYS=<key1>,<key2>,<key3>,<key4>
   ```
   - Эдгээр нь random string байх ёстой
   - Коммаар тусгаарлагдсан 4 ширхэг key

3. **Admin JWT Secret:**
   ```
   ADMIN_JWT_SECRET=<random-secret-string>
   ```

4. **API Token Salt:**
   ```
   API_TOKEN_SALT=<random-salt-string>
   ```

5. **Transfer Token Salt:**
   ```
   TRANSFER_TOKEN_SALT=<random-salt-string>
   ```

6. **Encryption Key:**
   ```
   ENCRYPTION_KEY=<random-encryption-key>
   ```

### Secrets үүсгэх арга:

Terminal дээр дараах командыг ашиглаж random secrets үүсгэж болно:

```bash
# APP_KEYS (4 ширхэг)
node -e "console.log(Array.from({length: 4}, () => require('crypto').randomBytes(32).toString('base64')).join(','))"

# ADMIN_JWT_SECRET
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"

# API_TOKEN_SALT
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"

# TRANSFER_TOKEN_SALT
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"

# ENCRYPTION_KEY
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

## 🚀 Deployment алхмууд

### 1. Strapi Cloud Dashboard дээр:

1. [Strapi Cloud](https://cloud.strapi.io/) руу нэвтрэх
2. "Create project" товч дарах
3. GitHub/GitLab repository-г сонгох
4. Branch сонгох (ихэвчлэн `main` эсвэл `master`)
5. Environment variables-уудыг дээр дурдсан байдлаар тохируулах
6. "Deploy on push" идэвхжүүлэх (optional, автоматаар deploy хийх)

### 2. Database:

Strapi Cloud нь автоматаар PostgreSQL database үүсгэдэг. Гэхдээ хэрэв та өөрийн database (жишээ нь Supabase) ашиглахыг хүсвэл:

1. Database connection string-ийг бэлдэх
2. Environment variables-уудыг тохируулах
3. SSL connection идэвхжүүлэх (`DATABASE_SSL=true`)

### 3. Build & Deploy:

Strapi Cloud автоматаар:
- `npm install` гүйцэтгэнэ
- `npm run build` гүйцэтгэнэ
- Application-ийг start хийнэ

### 4. Post-Deployment:

1. Admin panel руу нэвтрэх (`https://your-project.strapi.app/admin`)
2. Эхний admin хэрэглэгч үүсгэх
3. Content types-уудыг publish хийх
4. API permissions тохируулах
5. CORS settings шалгах (хэрэв frontend-тэй холбогдох бол)

## ⚠️ Анхаарах зүйлс

1. **Environment Variables:**
   - Бүх required environment variables тохируулсан эсэхийг шалгах
   - Secrets-ууд хангалттай урт, random байх ёстой

2. **Database:**
   - PostgreSQL connection зөв байгаа эсэхийг шалгах
   - SSL connection идэвхжүүлсэн эсэхийг шалгах

3. **Build:**
   - TypeScript compile амжилттай болсон эсэхийг шалгах
   - Dependencies бүгд суусан эсэхийг шалгах

4. **Content Types:**
   - Бүх content types зөв define хийгдсэн эсэхийг шалгах
   - Relationships зөв тохируулсан эсэхийг шалгах

5. **Permissions:**
   - Public API permissions тохируулсан эсэхийг шалгах
   - Admin panel руу хандах эрх зөв байгаа эсэхийг шалгах

## 🔍 Testing

Deploy хийсний дараа:

1. Admin panel ажиллаж байгаа эсэхийг шалгах
2. API endpoints ажиллаж байгаа эсэхийг шалгах
3. Database connection зөв байгаа эсэхийг шалгах
4. Content types create, read, update, delete хийж шалгах

## 📝 Notes

- Strapi Cloud нь автоматаар HTTPS идэвхжүүлдэг
- Database backups автоматаар хийгддэг
- Logs-ууд Strapi Cloud Dashboard дээр харагдана
- Environment variables өөрчлөхөд application автоматаар restart хийгддэг

## 🆘 Troubleshooting

Хэрэв алдаа гарвал:

1. Strapi Cloud Dashboard дээр logs шалгах
2. Environment variables зөв тохируулсан эсэхийг шалгах
3. Database connection зөв байгаа эсэхийг шалгах
4. Build logs шалгах
5. [Strapi Cloud Documentation](https://docs.strapi.io/cloud) үзэх

---

**Хамгийн чухал:** Бүх sensitive data (passwords, keys, secrets) environment variables-аар дамжуулах ёстой бөгөөд код дотор hardcode хийх ёсгүй!
