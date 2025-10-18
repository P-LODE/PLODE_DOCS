# Plode Docs

> 현대적인 기술 문서 플랫폼

한국어 | [English](./README.md)

## 📚 개요

Plode Docs는 [Astro](https://astro.build)와 [Starlight](https://starlight.astro.build)로 구축된 포괄적인 기술 문서 플랫폼입니다. 프론트엔드, 백엔드, DevOps, AI 분야의 40개 이상의 인기 기술에 대한 상세한 문서를 제공합니다.

## ✨ 주요 기능

- 🎨 **현대적인 디자인**: Starlight 기반의 깔끔하고 직관적인 인터페이스
- 🌍 **다국어 지원**: i18n을 통한 다국어 지원
- 🔍 **전체 텍스트 검색**: 내장된 검색 기능
- 📱 **반응형**: 모바일 친화적 디자인
- ⚡ **빠른 성능**: Astro를 통한 초고속 페이지 로딩
- 🎯 **40개 이상의 기술 가이드**: 현대 기술에 대한 포괄적인 가이드

## 📖 문서 카테고리

### Frontend (10개)
- React, Vue, Angular
- Next.js, Nuxt, Svelte
- TypeScript, Tailwind CSS
- Redux, React Query

### Backend (10개)
- Node.js, Express, NestJS
- Django, FastAPI
- Spring Boot, Laravel
- Ruby on Rails, Go (Gin), ASP.NET Core

### DevOps (10개)
- Docker, Kubernetes
- Jenkins, GitHub Actions
- Terraform, Ansible
- Prometheus, Grafana
- AWS, Azure

### AI (10개)
- TensorFlow, PyTorch
- LangChain, OpenAI API
- Hugging Face, LlamaIndex
- Pinecone, Weaviate
- AutoGen, CrewAI

## 🚀 시작하기

### 사전 요구사항

- Node.js 20+
- pnpm 9+

### 설치

```bash
# 저장소 클론
git clone https://github.com/your-username/plode-docs.git
cd plode-docs

# 의존성 설치
pnpm install

# 개발 서버 시작
pnpm dev
```

사이트는 `http://localhost:4321`에서 확인할 수 있습니다.

## 📁 프로젝트 구조

```
plode-docs/
├── src/
│   ├── content/
│   │   └── docs/
│   │       ├── app/
│   │       │   ├── front/      # 프론트엔드 기술
│   │       │   ├── backend/    # 백엔드 프레임워크
│   │       │   ├── devops/     # DevOps 도구
│   │       │   └── ai/         # AI/ML 프레임워크
│   │       └── index.mdx
│   ├── components/
│   ├── styles/
│   └── config/
├── astro.config.mjs
├── astro.sidebar.ts
└── package.json
```

## 🛠️ 기술 스택

- **프레임워크**: [Astro](https://astro.build)
- **문서화**: [Starlight](https://starlight.astro.build)
- **스타일링**: [Tailwind CSS](https://tailwindcss.com)
- **패키지 매니저**: pnpm
- **배포**: Vercel

## 📝 새로운 문서 추가하기

1. 적절한 카테고리 폴더에 새로운 `.mdx` 파일을 생성합니다:
   ```
   src/content/docs/app/{category}/{technology}.mdx
   ```

2. frontmatter를 추가합니다:
   ```yaml
   ---
   title: 기술 이름
   description: 간단한 설명
   ---
   ```

3. `astro.sidebar.ts`에 항목을 추가합니다:
   ```typescript
   {
     label: "카테고리",
     items: [
       "app/category/technology",
       // ...
     ]
   }
   ```

## 🔄 마이그레이션 참고사항

### Legacy Nextra (⚠️ deprecated)

`apps/nextra/` 디렉토리는 레거시 문서 시스템을 포함하고 있으며 **향후 버전에서 제거될 예정**입니다. 모든 문서는 Astro 기반 시스템으로 마이그레이션되었습니다.

**마이그레이션 상태**:
- ✅ 모든 콘텐츠가 `src/content/docs/`로 마이그레이션됨
- ✅ `astro.sidebar.ts`에 새로운 사이드바 구성 완료
- ⏳ 레거시 폴더 제거 예정

## 🤝 기여하기

기여는 언제나 환영합니다! Pull Request를 자유롭게 제출해주세요.

1. 저장소를 Fork합니다
2. feature 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add some amazing feature'`)
4. 브랜치에 Push합니다 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성합니다

## 📄 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.

## 🔗 링크

- [문서 사이트](https://plode-docs.vercel.app)
- [Astro 문서](https://docs.astro.build)
- [Starlight 문서](https://starlight.astro.build)

## 👥 메인테이너

- [@Lee-DongWook](https://github.com/Lee-DongWook)

---

Astro와 Starlight로 ❤️를 담아 제작되었습니다

