# Plode Docs

> Modern Technical Documentation Platform

[한국어](./README.ko.md) | English

## 📚 Overview

Plode Docs is a comprehensive technical documentation platform built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build). It provides detailed documentation for 40+ popular technologies across Frontend, Backend, DevOps, and AI domains.

## ✨ Features

- 🎨 **Modern Design**: Clean and intuitive interface powered by Starlight
- 🌍 **Multilingual Support**: i18n support for multiple languages
- 🔍 **Full-text Search**: Built-in search functionality
- 📱 **Responsive**: Mobile-friendly design
- ⚡ **Fast Performance**: Lightning-fast page loads with Astro
- 🎯 **40+ Tech Guides**: Comprehensive guides for modern technologies

## 📖 Documentation Categories

### Frontend (10)
- React, Vue, Angular
- Next.js, Nuxt, Svelte
- TypeScript, Tailwind CSS
- Redux, React Query

### Backend (10)
- Node.js, Express, NestJS
- Django, FastAPI
- Spring Boot, Laravel
- Ruby on Rails, Go (Gin), ASP.NET Core

### DevOps (10)
- Docker, Kubernetes
- Jenkins, GitHub Actions
- Terraform, Ansible
- Prometheus, Grafana
- AWS, Azure

### AI (10)
- TensorFlow, PyTorch
- LangChain, OpenAI API
- Hugging Face, LlamaIndex
- Pinecone, Weaviate
- AutoGen, CrewAI

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- pnpm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/plode-docs.git
cd plode-docs

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The site will be available at `http://localhost:4321`

## 📁 Project Structure

```
plode-docs/
├── src/
│   ├── content/
│   │   └── docs/
│   │       ├── app/
│   │       │   ├── front/      # Frontend technologies
│   │       │   ├── backend/    # Backend frameworks
│   │       │   ├── devops/     # DevOps tools
│   │       │   └── ai/         # AI/ML frameworks
│   │       └── index.mdx
│   ├── components/
│   ├── styles/
│   └── config/
├── astro.config.mjs
├── astro.sidebar.ts
└── package.json
```

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build)
- **Documentation**: [Starlight](https://starlight.astro.build)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Package Manager**: pnpm
- **Deployment**: Vercel

## 📝 Adding New Documentation

1. Create a new `.mdx` file in the appropriate category folder:
   ```
   src/content/docs/app/{category}/{technology}.mdx
   ```

2. Add frontmatter:
   ```yaml
   ---
   title: Technology Name
   description: Brief description
   ---
   ```

3. Add the entry to `astro.sidebar.ts`:
   ```typescript
   {
     label: "Category",
     items: [
       "app/category/technology",
       // ...
     ]
   }
   ```

## 🔄 Migration Notes

### Legacy Nextra (⚠️ Deprecated)

The `apps/nextra/` directory contains the legacy documentation system and **will be removed** in future versions. All documentation has been migrated to the Astro-based system.

**Migration Status**:
- ✅ All content migrated to `src/content/docs/`
- ✅ New sidebar configuration in `astro.sidebar.ts`
- ⏳ Legacy folder scheduled for removal

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🔗 Links

- [Documentation Site](https://plode-docs.vercel.app)
- [Astro Documentation](https://docs.astro.build)
- [Starlight Documentation](https://starlight.astro.build)

## 👥 Maintainers

- [@Lee-DongWook](https://github.com/Lee-DongWook)

---

Built with ❤️ using Astro and Starlight
