# 🧠 AI Recruiting App: Updated Architecture & Tech Stack

## ✅ Project Summary
An AI-powered recruiting service where:
- Users log in via Google or email.
- Submit a "search" (e.g., "looking for software engineer, 4+ years").
- App uses a cheap LLM (e.g., DeepSeek) via LangChain to process and match candidates.
- Backend is FastAPI with SQLAlchemy for database handling.

---

## ⚙️ Updated Architecture

```
[Svelte Frontend]
    ↓
[FastAPI Backend (LangChain + SQLAlchemy)]
    ↓
[Cheap AI Model (e.g., DeepSeek)]
    ↓
[Resume Vector DB + SQL DB]
```

---

## 🛠️ Tech Stack

### 🔸 Frontend
- **Framework:** Svelte (or SvelteKit for SSR/routing)
- **Auth:** Google + email sign-in using Firebase Auth or Auth.js (via OAuth)
- **UI:** TailwindCSS or Skeleton UI
- **Communication:** REST or WebSocket for chat interface

### 🔸 Backend
- **Framework:** FastAPI (Python 3.10+)
- **AI Orchestration:** LangChain (using DeepSeek or similar provider)
- **Model Access:** DeepSeek, OpenRouter, or Ollama (local inference)
- **ORM:** SQLAlchemy + Alembic (for migrations)
- **Resume Search:**
  - Embedding search via Chroma, FAISS, or Weaviate
  - Store candidate metadata in SQL

---

## 🧠 LangChain Use Cases

| Use Case                                | LangChain Feature             |
|----------------------------------------|-------------------------------|
| Convert recruiter query to structured  | PromptTemplate + LLMChain     |
| Match against vector store             | RetrievalQA / VectorStoreTool |
| Support multiple LLMs                  | LLM abstraction layer         |
| Chat with recruiter                    | Agent + ConversationMemory    |

---

## ✅ Authentication Options

- **Primary Option:** Firebase Auth (Svelte-friendly, handles Google/email/password easily)
- **Alternative:** Supabase Auth (PostgreSQL-based, Svelte support)
- **Optional Backend Auth Guard:** FastAPI JWT + OAuth flow

---

## 🔢 Database Setup

- **SQL DB:** PostgreSQL or SQLite (dev)
- **ORM:** SQLAlchemy 2.x
- **Migrations:** Alembic
- **Models:**
  - `User` (auth, searches)
  - `SearchRequest` (e.g., "backend dev, 4+ years")
  - `Candidate` (profile, skills, vector ID)
  - `MatchResult` (search-to-candidate relationship)

---

## 🔄 MVP Flow

1. User logs in (Google/email)
2. Submits a role query
3. AI interprets query and vectorizes intent
4. Candidates are retrieved via vector search
5. FastAPI returns ranked matches
6. Optional: User chats to refine results

---

## 🪜 Next Steps

1. Set up Svelte frontend with Google/email auth via Firebase
2. Create FastAPI backend with SQLAlchemy models
3. Integrate DeepSeek (or similar) via LangChain
4. Use Chroma or FAISS for embedding-based resume matching
5. Build MVP UI for query input and candidate results

