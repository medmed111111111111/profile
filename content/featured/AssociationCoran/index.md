---
title: 'جمعية المحافظة على القرآن الكريم و الأخلاق الفاضلة'
date: '2026-04-01'
tech:
  - 'Angular'
  - 'Spring Boot'
  - 'Java'
  - 'TypeScript'
  - 'MySQL'
  - 'JWT'
  - 'WebSocket'
  - 'Gemini API'
  - 'Email Service'
cta: ''
cover: '/c1.png'
---

### Context & Impact

- **First-of-its-kind solution** — First complete digital management platform for an Islamic educational association in Tunisia, replacing 100% paper-based processes (registrations, attendance, grade tracking, memorization follow-up)
- **Scalability** — Solution designed to handle 500+ students and 30+ teachers across multiple geographically dispersed centers and branches
- **User adoption** — Built for non-technical users (administrators, teachers, parents) with intuitive interface

### Architecture & Technical Design

- **Clean 3‑layer architecture** — Presentation (Angular), Business Logic (Spring Boot), Data (MySQL) ensuring maintainability, testability, and scalability
- **DTO + Pagination + EntityGraph** — Optimized API performance: reduced payload size, avoided N+1 queries, lowered memory footprint
- **Multi‑role RBAC** — Fine‑grained access control with 5 distinct roles (Admin, Super Admin, Teacher, Parent, Student)

### Security (Zero Vulnerability)

- **SonarQube 'A' rating — 0 vulnerabilities** on both frontend and backend (SQL injection, XSS, memory leaks fully prevented)
- **Multi‑layer rate limiting** — Global (100 requests/10s) + per‑IP (2 registrations/5min) + per‑IP login (5 attempts then CAPTCHA v2 with temporary blacklist)
- **JWT authentication** with secure password encoding (BCrypt)
- **Automatic account deactivation** — Scheduled task (`@Scheduled`) expires memberships and disables accounts at year end

### Quran & Hadiths Memorization Tracking

- **Complete pedagogical follow‑up** — Teachers can assign memorized Surahs and Hadiths with date, comments, and validation
- **Duplication prevention** — Business rule ensures a student cannot receive the same Surah/Hadith twice
- **Progress history** — Students and parents can consult chronological memorization progress with filtering
- **Export support** — Attendance sheets and memorization reports can be generated as PDF

### Real‑time Messaging System

- **Group & private conversations** — Teachers can create public discussion groups or private chats
- **Participant management** — Add/remove members (teachers only), view participant lists
- **Message safety** — Teachers can delete inappropriate messages; users can delete their own messages
- **Read receipts & unread counter** — Real‑time message status tracking
- **Notifications** — Automatic notifications for new messages, added/removed from groups

### AI Assistant (Gemini API)

- **Intent recognition** — Automatic extraction of CIN, group numbers, statistics keywords from natural language
- **Intelligent caching (Caffeine)** — 60% reduction in external API calls via smart cache
- **Rate limiting** — 55 requests/minute with FIFO queue
- **Key rotation** — Multiple Google accounts to avoid quota limits
- **Real‑time statistics** — Request count, cache hit rate monitoring

### Dashboard & Reporting

- **Dynamic statistics** — Interactive dashboard with charts (student distribution, payment status, group occupancy rates)
- **Resource availability** — Visual display of teacher and room availability per time slot
- **Custom PDF reports** — Filter indicators and generate printable reports (similar to Power BI)

### Code Quality & Testing

- **SonarQube full analysis** — Security: A (0 vulnerabilities), Reliability: A (0 bugs backend), Maintainability: A
- **Postman API testing** — All REST endpoints validated before frontend integration
- **Duplication rate** — Backend: 0.5%, Frontend: 6.5% (clean, well‑structured code)