# GitHub руу Force Push хийхээс өмнөх Шалгалт

## ✅ Хийгдсэн ажлууд

1. ✅ `.env.backup` файл git түүхнээс арилгагдсан
2. ✅ `.gitignore` шинэчлэгдсэн (бүх .env хувилбаруудыг ignore хийх)
3. ✅ Нууц мэдээлэл солигдсон:
   - ✅ APP_KEYS
   - ✅ ADMIN_JWT_SECRET
   - ✅ Database password (хэрэв солигдсон бол)

## ⚠️ Force Push хийхээс өмнөх Анхааруулга

### 1. Team Members-д мэдэгдэх
Force push хийсний дараа бүх team members:
- Repository-г дахин clone хийх эсвэл
- `git fetch origin` → `git reset --hard origin/main` хийх шаардлагатай

### 2. Бусад branches байгаа эсэхийг шалгах
Хэрэв бусад branches байвал тэдгээрийг ч шинэчлэх шаардлагатай

### 3. Backup авах (сонголттой)
Хэрэв хүсвэл remote-ийн түүхийг backup авах:
```powershell
git fetch origin
git branch backup-before-force-push origin/main
```

## Force Push хийх командууд

### Алхам 1: Force push хийх
```powershell
git push origin --force --all
```

### Алхам 2: Tags байвал (хэрэв байгаа бол)
```powershell
git push origin --force --tags
```

## Force Push хийсний дараа

1. ✅ GitHub дээр шалгах - .env.backup файл байхгүй эсэхийг
2. ✅ Team members-д мэдэгдэх
3. ✅ Бүх хүмүүс repository-г дахин sync хийх
