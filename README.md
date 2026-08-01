# Treino OLISP 2026

Simulado de treino pra Fase 2 da Olimpíada Interpreta SP (OLISP), nível 1 (6º e 7º anos).

```
similado-olisp-2026/
├── index.html   estrutura da página
├── styles.css   visual
├── script.js    lógica, banco de textos e perguntas
└── README.md
```

Página estática, sem build e sem dependências além das fontes do Google. É só abrir o `index.html`.

A cada treino, sorteia uma combinação diferente de textos (notícia, anúncio e fábula) e embaralha a ordem das alternativas, pra evitar decorar respostas.

## Sincronizar histórico (opcional)

Por padrão, o histórico fica salvo só no navegador de quem estiver treinando. Pra sincronizar com o Supabase:

1. Cria a tabela, no SQL Editor do projeto:

```sql
create table tentativas (
  id uuid primary key default gen_random_uuid(),
  criado_em timestamptz default now(),
  nome text,
  acertos int,
  total int,
  tempo_segundos int,
  por_genero jsonb
);

alter table tentativas enable row level security;

create policy "permite inserir"
  on tentativas for insert
  to anon
  with check (true);
```

Sem política de leitura pro `anon` de propósito: a página consegue gravar, mas ninguém que só tenha o link consegue ler pela API. Pra ver os dados, é só abrir o Table Editor do projeto, autenticado.

2. Na aba **Publishable and secret API keys** (não a "Legacy"), pega a URL do projeto e a **Publishable key** (prefixo `sb_publishable_...`). É o substituto atual da antiga chave anon, mesmo nível de acesso, mesma política de RLS.
3. Cola as duas nas constantes `SUPABASE_URL` e `SUPABASE_PUBLISHABLE_KEY`, no início do `script.js`.

