# Strapi API Endpoints Summary

## Quick Reference Table

| # | Display Name | API Endpoint | Collection Name | Singular Name | Key Fields |
|---|--------------|--------------|-----------------|---------------|------------|
| 1 | Activity | `/api/activities` | activities | activity | title, description, icon, about |
| 2 | Contact-info | `/api/contacts` | contacts | contact | address, phone, email |
| 3 | Contact-HR | `/api/contact-hrs` | contact_hrs | contact-hr | name, position, phone, fax, order |
| 4 | expert-team | `/api/expert-teams` | expert_teams | expert-team | image, order |
| 5 | Foreign-relation | `/api/foreign-relations` | foreign_relations | foreign-relation | title, picture, order |
| 6 | Law | `/api/laws` | laws | law | title, file, date |
| 7 | License | `/api/licenses` | licenses | license | title, licenseNumber, issueDate, expiryDate, issuer, isActive |
| 8 | License-info | `/api/license-infos` | license_infos | license-info | title, description, images |
| 9 | License-table | `/api/license-tables` | license_tables | license-table | year, total, newlyIssued, extended, cancelled, meetings |
| 10 | News | `/api/news2` ⚠️ | news2 | news1 | title, description, content, date, image, slug, published, view_count |
| 11 | Projects | `/api/projects` | projects | project | title, image, order |
| 12 | Slide | `/api/slides` | slides | slide | image (multiple), name, link, order |
| 13 | Training | `/api/trainings` | trainings | training | title, description, image, published, content |
| 14 | Training-anket | `/api/training-ankets` | training_ankets | training-anket | file |

## Base URL
```
http://localhost:1337/api
```

## Common Operations

### GET All Records
```
GET /api/{endpoint}?populate=*
```

### GET Single Record
```
GET /api/{endpoint}/{id}?populate=*
```

### CREATE Record
```
POST /api/{endpoint}
Content-Type: application/json
{
  "data": {
    "field": "value"
  }
}
```

### UPDATE Record
```
PUT /api/{endpoint}/{id}
Content-Type: application/json
{
  "data": {
    "field": "new value"
  }
}
```

### DELETE Record
```
DELETE /api/{endpoint}/{id}
```

## Important Notes

1. ⚠️ **News endpoint is `/api/news2`** (not `/api/news` or `/api/news1`)
2. All collection types support **Draft & Publish** workflow
3. All endpoints require proper **permissions** setup in Roles
4. Use `?populate=*` to include media files and relations
5. Default pagination: 25 records per page (max: 100)

## Media Fields

Collection types with media fields:
- **Activity**: `icon`
- **Expert-team**: `image`
- **Foreign-relation**: `picture`
- **Law**: `file`
- **License-info**: `images`
- **News**: `image`
- **Project**: `image`
- **Slide**: `image` (multiple)
- **Training**: `image`
- **Training-anket**: `file`

## Required Fields Summary

| Collection | Required Fields |
|------------|----------------|
| Activity | title |
| Contact | address, phone |
| Contact-HR | name, position, phone |
| Expert-team | image |
| Law | title |
| License | title, licenseNumber, issueDate, expiryDate, issuer, isActive |
| License-info | title |
| News | title |
| Project | title |
| Slide | image, name, order |
| Training | title |
| Training-anket | file |

## Sortable Fields

Most collections have `order` field for sorting:
- Contact-HR: `order` (biginteger)
- Expert-team: `order` (biginteger)
- Foreign-relation: `order` (biginteger)
- Project: `order` (biginteger)
- Slide: `order` (integer, unique)

Example:
```
GET /api/projects?sort=order:asc
```

## Filter Examples

### Get published news
```
GET /api/news2?filters[published][$eq]=true
```

### Get active licenses
```
GET /api/licenses?filters[isActive][$eq]=true
```

### Get contacts by phone
```
GET /api/contacts?filters[phone][$contains]=123
```

## Full Documentation

See `API_ENDPOINTS.md` for complete documentation with all query parameters, examples, and authentication details.
