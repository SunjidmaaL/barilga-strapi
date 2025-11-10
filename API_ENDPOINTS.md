# Strapi API Endpoints Documentation

Энэ файл нь Strapi API-ийн бүх collection type-уудын endpoint-уудын баримт бичгийг агуулна.

## Server Configuration
- **Host**: 0.0.0.0 (эсвэл environment variable-аас)
- **Port**: 1337 (эсвэл environment variable-аас)
- **Base URL**: `http://localhost:1337/api`

## API Configuration
- **Default Limit**: 25 records
- **Max Limit**: 100 records
- **With Count**: true (total count буцаана)

---

## Collection Types & API Endpoints

### 1. Activity (Үйл ажиллагаа)
**Endpoint**: `/api/activities`

**Attributes**:
- `title` (string, required) - Гарчиг
- `description` (text) - Тайлбар
- `icon` (media, single) - Дүрс
- `about` (richtext) - Тухай

**Endpoints**:
- `GET /api/activities` - Бүх activity-г авах
- `GET /api/activities/:id` - Нэг activity авах
- `POST /api/activities` - Шинэ activity үүсгэх
- `PUT /api/activities/:id` - Activity засах
- `DELETE /api/activities/:id` - Activity устгах

**Query Parameters** (GET):
- `?filters[title][$eq]=value` - Шүүлт хийх
- `?sort=title:asc` - Эрэмбэлэх
- `?pagination[page]=1&pagination[pageSize]=25` - Хуудаслалт
- `?populate=*` - Бүх relation-уудыг populate хийх

---

### 2. Contact (Холбоо барих мэдээлэл)
**Endpoint**: `/api/contacts`

**Attributes**:
- `address` (string, required) - Хаяг
- `phone` (string, required) - Утас
- `email` (email) - Имэйл

**Endpoints**:
- `GET /api/contacts` - Бүх contact авах
- `GET /api/contacts/:id` - Нэг contact авах
- `POST /api/contacts` - Шинэ contact үүсгэх
- `PUT /api/contacts/:id` - Contact засах
- `DELETE /api/contacts/:id` - Contact устгах

---

### 3. Contact-HR (Хүний нөөцийн холбоо барих)
**Endpoint**: `/api/contact-hrs`

**Attributes**:
- `name` (string, required) - Нэр
- `position` (string, required) - Албан тушаал
- `phone` (string, required) - Утас
- `fax` (string) - Факс
- `order` (biginteger, default: 0) - Эрэмбэ

**Endpoints**:
- `GET /api/contact-hrs` - Бүх contact-hr авах
- `GET /api/contact-hrs/:id` - Нэг contact-hr авах
- `POST /api/contact-hrs` - Шинэ contact-hr үүсгэх
- `PUT /api/contact-hrs/:id` - Contact-hr засах
- `DELETE /api/contact-hrs/:id` - Contact-hr устгах

---

### 4. Expert-Team (Мэргэжилтнүүд)
**Endpoint**: `/api/expert-teams`

**Attributes**:
- `image` (media, single, required) - Зураг
- `order` (biginteger) - Эрэмбэ

**Endpoints**:
- `GET /api/expert-teams` - Бүх expert-team авах
- `GET /api/expert-teams/:id` - Нэг expert-team авах
- `POST /api/expert-teams` - Шинэ expert-team үүсгэх
- `PUT /api/expert-teams/:id` - Expert-team засах
- `DELETE /api/expert-teams/:id` - Expert-team устгах

---

### 5. Foreign-Relation (Гадаад харилцаа)
**Endpoint**: `/api/foreign-relations`

**Attributes**:
- `title` (string) - Гарчиг
- `picture` (media, single) - Зураг
- `order` (biginteger) - Эрэмбэ

**Endpoints**:
- `GET /api/foreign-relations` - Бүх foreign-relation авах
- `GET /api/foreign-relations/:id` - Нэг foreign-relation авах
- `POST /api/foreign-relations` - Шинэ foreign-relation үүсгэх
- `PUT /api/foreign-relations/:id` - Foreign-relation засах
- `DELETE /api/foreign-relations/:id` - Foreign-relation устгах

---

### 6. Law (Хууль)
**Endpoint**: `/api/laws`

**Attributes**:
- `title` (string, required) - Гарчиг
- `file` (media, single) - Файл
- `date` (date) - Огноо

**Endpoints**:
- `GET /api/laws` - Бүх law авах
- `GET /api/laws/:id` - Нэг law авах
- `POST /api/laws` - Шинэ law үүсгэх
- `PUT /api/laws/:id` - Law засах
- `DELETE /api/laws/:id` - Law устгах

---

### 7. License (Лиценз)
**Endpoint**: `/api/licenses`

**Attributes**:
- `title` (string, required) - Гарчиг
- `licenseNumber` (string, required, unique) - Лицензийн дугаар
- `issueDate` (date, required) - Олгосон огноо
- `expiryDate` (date, required) - Дуусах огноо
- `issuer` (string, required) - Олгосон байгууллага
- `isActive` (boolean, required, default: true) - Идэвхтэй эсэх

**Endpoints**:
- `GET /api/licenses` - Бүх license авах
- `GET /api/licenses/:id` - Нэг license авах
- `POST /api/licenses` - Шинэ license үүсгэх
- `PUT /api/licenses/:id` - License засах
- `DELETE /api/licenses/:id` - License устгах

---

### 8. License-Info (Лицензийн мэдээлэл)
**Endpoint**: `/api/license-infos`

**Attributes**:
- `title` (string, required) - Гарчиг
- `description` (text) - Тайлбар
- `images` (media, single) - Зураг

**Endpoints**:
- `GET /api/license-infos` - Бүх license-info авах
- `GET /api/license-infos/:id` - Нэг license-info авах
- `POST /api/license-infos` - Шинэ license-info үүсгэх
- `PUT /api/license-infos/:id` - License-info засах
- `DELETE /api/license-infos/:id` - License-info устгах

---

### 9. License-Table (Лицензийн хүснэгт)
**Endpoint**: `/api/license-tables`

**Attributes**:
- `year` (biginteger) - Он
- `total` (biginteger) - Нийт
- `newlyIssued` (biginteger) - Шинээр олгосон
- `extended` (biginteger) - Сунгасан
- `cancelled` (biginteger) - Цуцлагдсан
- `meetings` (biginteger) - Уулзалт

**Endpoints**:
- `GET /api/license-tables` - Бүх license-table авах
- `GET /api/license-tables/:id` - Нэг license-table авах
- `POST /api/license-tables` - Шинэ license-table үүсгэх
- `PUT /api/license-tables/:id` - License-table засах
- `DELETE /api/license-tables/:id` - License-table устгах

---

### 10. News (Мэдээ)
**Endpoint**: `/api/news2` (⚠️ Анхаар: pluralName нь "news2")

**Attributes**:
- `title` (string, required) - Гарчиг
- `description` (text) - Тайлбар
- `content` (richtext) - Агуулга
- `date` (date) - Огноо
- `image` (media, single) - Зураг
- `slug` (uid, targetField: title) - Slug (автоматаар үүсдэг)
- `published` (boolean, default: false) - Нийтлэгдсэн эсэх
- `view_count` (integer, default: 0) - Үзсэн тоо

**Endpoints**:
- `GET /api/news2` - Бүх news авах
- `GET /api/news2/:id` - Нэг news авах
- `POST /api/news2` - Шинэ news үүсгэх
- `PUT /api/news2/:id` - News засах
- `DELETE /api/news2/:id` - News устгах

**Query Examples**:
- `GET /api/news2?filters[published][$eq]=true` - Зөвхөн нийтлэгдсэн мэдээ
- `GET /api/news2?sort=date:desc` - Огноогоор буурах дарааллаар
- `GET /api/news2?filters[slug][$eq]=my-slug` - Slug-аар хайх

---

### 11. Project (Төсөл)
**Endpoint**: `/api/projects`

**Attributes**:
- `title` (string, required) - Гарчиг
- `image` (media, single) - Зураг
- `order` (biginteger, default: 0) - Эрэмбэ

**Endpoints**:
- `GET /api/projects` - Бүх project авах
- `GET /api/projects/:id` - Нэг project авах
- `POST /api/projects` - Шинэ project үүсгэх
- `PUT /api/projects/:id` - Project засах
- `DELETE /api/projects/:id` - Project устгах

---

### 12. Slide (Слайд)
**Endpoint**: `/api/slides`

**Attributes**:
- `image` (media, multiple, required) - Зурагнууд
- `name` (string, required) - Нэр
- `link` (string) - Холбоос
- `order` (integer, required, unique, default: 0, min: 0) - Эрэмбэ

**Endpoints**:
- `GET /api/slides` - Бүх slide авах
- `GET /api/slides/:id` - Нэг slide авах
- `POST /api/slides` - Шинэ slide үүсгэх
- `PUT /api/slides/:id` - Slide засах
- `DELETE /api/slides/:id` - Slide устгах

**Query Examples**:
- `GET /api/slides?sort=order:asc` - Эрэмбэгээр нь эрэмбэлэх

---

### 13. Training (Сургалт)
**Endpoint**: `/api/trainings`

**Attributes**:
- `title` (string, required) - Гарчиг
- `description` (text) - Тайлбар
- `image` (media, single) - Зураг
- `published` (boolean, default: false) - Нийтлэгдсэн эсэх
- `content` (richtext) - Агуулга

**Endpoints**:
- `GET /api/trainings` - Бүх training авах
- `GET /api/trainings/:id` - Нэг training авах
- `POST /api/trainings` - Шинэ training үүсгэх
- `PUT /api/trainings/:id` - Training засах
- `DELETE /api/trainings/:id` - Training устгах

---

### 14. Training-Anket (Сургалтын анкет)
**Endpoint**: `/api/training-ankets`

**Attributes**:
- `file` (media, single, required) - Файл

**Endpoints**:
- `GET /api/training-ankets` - Бүх training-anket авах
- `GET /api/training-ankets/:id` - Нэг training-anket авах
- `POST /api/training-ankets` - Шинэ training-anket үүсгэх
- `PUT /api/training-ankets/:id` - Training-anket засах
- `DELETE /api/training-ankets/:id` - Training-anket устгах

---

## Common Query Parameters

Бүх endpoint-ууд дараах query parameters-уудыг дэмждэг:

### Filters (Шүүлт)
```
?filters[field][$eq]=value           - Тэнцүү
?filters[field][$ne]=value           - Тэнцүү биш
?filters[field][$lt]=value           - Бага
?filters[field][$lte]=value          - Бага буюу тэнцүү
?filters[field][$gt]=value           - Их
?filters[field][$gte]=value          - Их буюу тэнцүү
?filters[field][$contains]=value     - Агуулна
?filters[field][$containsi]=value    - Агуулна (case-insensitive)
?filters[field][$in][]=value1&filters[field][$in][]=value2  - Массив дотор
?filters[field][$notIn][]=value1     - Массив дотор биш
?filters[$and][0][field][$eq]=value  - AND логик
?filters[$or][0][field][$eq]=value   - OR логик
```

### Sort (Эрэмбэлэлт)
```
?sort=field:asc   - Өсөх дараалал
?sort=field:desc  - Буурах дараалал
?sort=field1:asc,field2:desc  - Олон талбараар эрэмбэлэх
```

### Pagination (Хуудаслалт)
```
?pagination[page]=1           - Хуудасны дугаар
?pagination[pageSize]=25      - Хуудас бүр дэх бичлэгийн тоо
?pagination[withCount]=true   - Нийт тоог буцаах
```

### Population (Relation авах)
```
?populate=*                    - Бүх relation-ууд
?populate=field                - Нэг relation
?populate[field][populate]=*   - Nested populate
?populate=field1,field2        - Олон relation
```

### Fields (Талбарууд)
```
?fields=field1,field2          - Зөвхөн тодорхой талбарууд
```

### Publication State (Нийтлэлийн төлөв)
```
?publicationState=live         - Зөвхөн нийтлэгдсэн
?publicationState=preview      - Зөвхөн draft
```

---

## Authentication

### Public Access (Нийтийн хандалт)
Public role-аас permissions тохируулж болно. Settings → Users & Permissions → Roles → Public

### Authenticated Access (Нэвтэрсэн хандалт)
JWT token шаардлагатай:
```
Authorization: Bearer <your-jwt-token>
```

### Getting JWT Token
```
POST /api/auth/local
Body: {
  "identifier": "user@example.com",
  "password": "password"
}
```

---

## Media Files

Media файлууд дараах endpoint-аар авах боломжтой:
```
GET /api/upload/files
GET /api/upload/files/:id
```

Media файлын URL нь:
```
http://localhost:1337/uploads/...
```

---

## Example Requests

### Get all published news
```bash
GET /api/news2?filters[published][$eq]=true&sort=date:desc&pagination[page]=1&pagination[pageSize]=10
```

### Get activity with populated media
```bash
GET /api/activities?populate=icon
```

### Create new contact
```bash
POST /api/contacts
Content-Type: application/json
{
  "data": {
    "address": "Улаанбаатар хот",
    "phone": "+976 11 123456",
    "email": "info@example.com"
  }
}
```

### Update project
```bash
PUT /api/projects/1
Content-Type: application/json
{
  "data": {
    "title": "Шинэ төсөл",
    "order": 1
  }
}
```

---

## Important Notes

1. **Draft and Publish**: Бүх collection type-ууд `draftAndPublish: true` байна. Энэ нь:
   - `publishedAt` талбар шаардлагатай
   - `publicationState=live` query parameter ашиглаж болно
   - Admin panel дээр "Publish" товч байна

2. **News Endpoint**: News-ийн endpoint нь `/api/news2` (pluralName нь "news2" байна)

3. **Media Fields**: Media талбаруудыг populate хийх шаардлагатай:
   ```
   ?populate=image,icon,picture
   ```

4. **Permissions**: Бүх endpoint-уудын permissions-ийг Settings → Users & Permissions → Roles дээр тохируулах шаардлагатай

5. **CORS**: CORS тохиргоог `config/middlewares.ts` дээр тохируулсан байна

---

## Error Responses

### 401 Unauthorized
```json
{
  "error": {
    "status": 401,
    "message": "Unauthorized"
  }
}
```

### 403 Forbidden
```json
{
  "error": {
    "status": 403,
    "message": "Forbidden"
  }
}
```

### 404 Not Found
```json
{
  "error": {
    "status": 404,
    "message": "Not Found"
  }
}
```

### 400 Bad Request
```json
{
  "error": {
    "status": 400,
    "message": "Bad Request",
    "details": {...}
  }
}
```

---

Generated: $(date)
