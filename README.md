# portal-aluno — WydenCoin

Portal do Aluno em React + TypeScript (Vite). Responsável: **Felipe Lima e Pablo**.

```bash
cp .env.example .env.local   # preencha
npm ci
npm run dev                  # http://localhost:5173
```

As telas estão em `src/pages/` (uma por arquivo, com o TODO do que cada uma precisa). As chamadas à API passam por `src/lib/api.ts`, que já envia o token do login.

Deploy: Cloudflare Pages ligado a este repositório (build `npm run build`, saída `dist`). Cada pull request ganha uma prévia.
