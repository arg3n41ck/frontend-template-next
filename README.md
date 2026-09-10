# Шаблон Frontend Next.js

Минимальный server-first стартовый проект на Next.js App Router без готовых продуктовых страниц.

## Стек

Next.js 16, React 19, TypeScript, Tailwind CSS v4 и shadcn/ui (Radix + Lucide).

## Требования

Node.js 22.18+ и pnpm 11 через Corepack.

## Запуск

```bash
pnpm install
pnpm dev
```

## Проверка

```bash
pnpm verify
```

Предпочитайте Server Components. Добавляйте `"use client"` только на минимальной интерактивной границе.

## Структура frontend

```text
src/app/                       тонкие App Router routes/layouts и providers
src/modules/                   доменные модули и экраны
src/shared/ui/shadcn/          примитивы shadcn
src/shared/hooks/              общие hooks
src/shared/libs/               общие утилиты
src/shared/config/styles/      theme tokens и глобальный CSS
```

## shadcn/ui

Часто используемые примитивы уже находятся в `src/shared/ui/shadcn`. Остальные добавляйте по потребности через закреплённый CLI:

```bash
pnpm ui:check dialog
pnpm ui:add dialog
```

Палитра редактируется только в `src/shared/config/styles/palette.css`; shadcn-компоненты автоматически получают её через semantic tokens.

## Работа с ИИ

Начните с `AGENTS.md`, затем изучите `docs/AI_SKILLS.md` и `docs/ARCHITECTURE.md`. Skills уже находятся в репозитории и загружаются по задаче — это не фоновые агенты и не требуют миграции стека или дополнительных зависимостей.

## Сначала ИИ, но проект понятен человеку

Любой coding agent начинает с [AGENTS.md](AGENTS.md); plugin конкретного провайдера не нужен. [Workflow](.ai/WORKFLOW.md) выбирает задачу, учитывает побочные эффекты, проверяет результат и хранит только нужный контекст. Человек использует обычную архитектуру и package-команды: AI runtime для запуска приложения не требуется.

```bash
node .ai/context.mjs --list
node .ai/context.mjs --task ui --risk shared-ui
node .ai/context.mjs --check
```

Это read-only помощники контекста и целостности: они не вызывают модель и не устанавливают пакеты. Skills загружаются по необходимости; wiki и Graphify отвечают за разные виды знаний. Недоступный browser/graph runtime обозначается как непроверенный, а не как успешная проверка.

Текущая локальная проверка и ограничения релиза: [отчёт](docs/VERIFICATION_STATUS.md). Опциональная настройка локального графа: [Graphify](docs/GRAPHIFY.md).

## Фильтры и новые AI-проверки

Всего **42 skills**, загружаются по задаче, не все сразу. Полный состав — [AI_SKILLS](docs/AI_SKILLS.md). Правила search params, истории, пагинации, запросов и приватности — [URL_STATE](docs/URL_STATE.md). Установлен nuqs 2.10.1, подключён адаптер; добавлены типизированные парсеры и `useListSearch`.

## Подготовка к выпуску

Актуальные проверки и ограничения — [VERIFICATION_STATUS](docs/VERIFICATION_STATUS.md). Локальные env/runtime/test-артефакты исключены из Git; `.env.example` разрешён. Версия шаблона: **v0.4.0**.
