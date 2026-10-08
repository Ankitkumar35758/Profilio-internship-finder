# Profilio
### Stop applying. Start getting found.

Profilio is a web platform that flips the internship experience for Indian college students. Instead of students sending hundreds of applications into the void, Profilio lets them build a portfolio that companies actively browse — and reach out directly when they find a match.

## The Problem
- 500+ students compete for every single internship post
- 73% of students never hear back after applying
- Existing platforms like Internshala and LinkedIn follow the same broken model — students apply, companies ignore

## The Solution
Profilio flips the model:
1. Students build a portfolio showcasing real work
2. Companies browse and filter students by skills and field
3. Companies reach out directly to students they want

## Features
- Portfolio first profiles — showcase real projects not just resumes
- Match score — know exactly why you match or don't match a role
- Company reach out — companies message you directly after viewing your work
- Analytics — see who viewed your profile and which projects got attention
- Field neutral — works for UI/UX, Web Development, Cybersecurity, Data Science, Marketing and more

## Tech Stack
- React
- Supabase
- Tailwind CSS
- Node.js

## Designed & Built by
Shriya Gaonkar — UI/UX Designer
[LinkedIn](www.linkedin.com/in/shriya-g55) | [Figma Prototype](https://www.figma.com/proto/dOjIAObnUhnN8VVyXOF31U/internship-platform?node-id=17-403&t=nhJuAzVYYtM2S880-1)

## Run it locally
Requires Node 20+ and [pnpm](https://pnpm.io/installation).

```bash
pnpm install --filter @workspace/profilio...
pnpm --filter @workspace/profilio run dev      # http://localhost:5173
pnpm --filter @workspace/profilio run build    # output: artifacts/profilio/dist/public
```

## Deploy
Pushing to `main` deploys the site to GitHub Pages via `.github/workflows/deploy.yml`
(in the repo: Settings → Pages → Source → **GitHub Actions**).
