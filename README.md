# Inbank Hire Purchase - Loan Application

![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?logo=vite&logoColor=white)
![Storybook](https://img.shields.io/badge/Storybook-10.2-FF4785?logo=storybook&logoColor=white)

**AI-assisted technical implementation of a responsive loan application flow built with React & TypeScript**

This project showcases the frontend implementation of Inbank's Hire Purchase loan application, demonstrating modern development practices, design system implementation, and effective use of AI-powered development tools.

📖 **[View Design Case Study](https://www.rockgomes.com/project/inbank---hire-purchase)** - Full UX/UI design process, research, and visual designs

---

## 📋 Table of Contents

- [About the Project](#about-the-project)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Design System](#design-system)
- [Development Highlights](#development-highlights)
- [AI-Assisted Development](#ai-assisted-development)
- [Future Enhancements](#future-enhancements)
- [Author](#author)

---

## 🎯 About the Project

This is a technical implementation of Rock Gomes' product design work for Inbank's Hire Purchase loan application flow. As Inbank's first in-house Product Designer, Rock led the end-to-end UX/UI redesign, creating an accessible and scalable experience across multiple markets.

This repository demonstrates:

- Translation of design system into reusable React components
- Implementation of complex multi-step application flows
- Responsive design across devices
- Type-safe development with TypeScript
- Modern React patterns and best practices
- **AI-assisted development** using Windsurf IDE and Claude Sonnet

### Application Flow

1. **Loan Details** - Interactive loan calculator with adjustable parameters
2. **Identity Verification** - Authentication method selection
3. **Personal Details** - Form validation, tooltips, and compliance checkboxes
4. **Decision** - Loading animation with automatic redirect
5. **Loan Offer** - Success screen with detailed loan terms and contract preview

---

## 🛠 Tech Stack

### Core Technologies

- **React 19** - Modern UI library with latest features
- **TypeScript 5.9** - Type-safe development
- **Vite 7.3** - Fast build tool and dev server
- **React Router 7** - Client-side routing

### Development Tools

- **Storybook 10** - Component development and documentation
- **Vitest** - Unit and component testing
- **Playwright** - Browser testing
- **ESLint** - Code quality and consistency

### Styling

- **CSS Modules** - Scoped component styling
- **Design Tokens** - Consistent colors, spacing, and typography

### AI Development Tools

- **Windsurf IDE** - AI-powered code editor
- **Claude Sonnet** - Advanced AI assistance for architecture and problem-solving

---

## ✨ Features

### Loan Details Page

- Interactive loan calculator with real-time updates
- Adjustable loan amount, period, and down payment
- Visual summary card with monthly payment breakdown
- Order information display
- Legal consent checkboxes

### Personal Details Page

- Contact information display (read-only for existing customers)
- Additional information form with validation
  - Monthly net income
  - Monthly obligations
  - Number of dependents
- Tooltips for field explanations
- Compliance checkboxes with legal disclaimers
- Form validation on blur
- Responsive layout

### Identity Verification Page

- Authentication method selection (Smart-ID, Mobile-ID, ID-Card)
- Tab-based interface
- Clear instructions for each method

### Decision Page

- Loading animation with bouncing dots
- Automatic redirect to loan offer (2 seconds)
- Clean, minimal design

### Loan Offer Page

- Success card with green styling and checkmark
- Priority loan information (Monthly Payment, Loan Amount)
- Detailed loan terms grid (7 data points)
- Contract preview section with purple border
- Primary action button (Sign and continue)
- Cancel application option
- Legal disclaimers and links

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (recommended: latest LTS)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/rockgomes/inbank-loan-app.git

# Navigate to project directory
cd inbank-loan-app

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Open http://localhost:5173
```

### Build

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

### Storybook

```bash
# Start Storybook
npm run storybook

# Open http://localhost:6006
```

### Linting

```bash
# Run ESLint
npm run lint
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── TextField/
│   │   ├── Checkbox/
│   │   ├── Icon/
│   │   └── ...
│   ├── layout/          # Layout components
│   │   ├── PageLayout/
│   │   └── PageTitle/
│   └── loan/            # Domain-specific components
│       ├── LoanSummaryCard/
│       ├── LoanOfferCard/
│       ├── ContactDetailsCard/
│       └── ...
├── pages/               # Page components
│   ├── LoanDetailsPage/
│   ├── PersonalDetailsPage/
│   ├── IdentityVerificationPage/
│   ├── DecisionPage/
│   └── LoanOfferPage/
├── contexts/            # React Context providers
│   └── LoanFlowContext/
├── design-tokens/       # Design system tokens
│   ├── colors.ts
│   ├── spacing.ts
│   └── typography.ts
└── routes.tsx           # Application routing
```

---

## 🎨 Design System

### Design Tokens

The project uses a centralized design token system for consistency:

- **Colors**: Primary (Night Violet, White), Secondary (Light Lavender), Status colors
- **Spacing**: Consistent scale from XS to 3XL
- **Typography**: Font families, sizes, weights, and line heights
- **Border Radius**: Small, Medium, Large

### Component Library

Reusable UI components built with:

- CSS Modules for scoped styling
- TypeScript interfaces for type safety
- Storybook documentation
- Accessibility considerations (ARIA labels, keyboard navigation)

### Key Components

- **Button**: Multiple variants (filled, outlined, filledLight)
- **Card**: Flexible container with variants and padding options
- **TextField**: Floating label, validation, prefix support
- **Checkbox**: Custom styling with accessible markup
- **Icon**: SVG icon system with size variants
- **InfoRow**: Label-value pair with optional helper text

---

## 💡 Development Highlights

### Component-Driven Development

- Built with Storybook for isolated component development
- Comprehensive component documentation
- Visual testing and interaction testing

### Type Safety

- Strict TypeScript configuration
- Type-safe props and state management
- Reduced runtime errors

### Architecture

- Modular component structure
- Clear separation of concerns (UI, layout, domain)
- Context API for global state management
- React Router for navigation

### Code Quality

- ESLint for code consistency
- CSS Modules for style encapsulation
- Responsive design patterns
- Accessibility best practices

---

## 🤖 AI-Assisted Development

This project demonstrates effective use of AI tools in modern development workflows:

### Tools Used

- **Windsurf IDE**: AI-powered code editor for accelerated development
- **Claude Sonnet**: Advanced AI assistance for:
  - Architecture decisions and component design
  - Code generation and refactoring
  - Problem-solving and debugging
  - Design system implementation

### Benefits Demonstrated

✅ **Rapid Prototyping** - Quick iteration on component designs and layouts

✅ **Consistent Patterns** - AI-assisted enforcement of coding standards and best practices

✅ **Efficient Debugging** - Faster identification and resolution of issues

✅ **Design System at Scale** - Systematic implementation of design tokens and reusable components

✅ **Code Quality** - Maintaining architectural integrity while leveraging AI assistance

### Approach

This project showcases the ability to leverage AI tools effectively while maintaining:

- Code quality and readability
- Architectural integrity
- Design fidelity to original mockups
- Type safety and best practices

The key is using AI as a **productivity multiplier** rather than a replacement for engineering judgment and design thinking.

---

## 🔮 Future Enhancements

- [ ] Integration with backend API
- [ ] Negative decision flow implementation
- [ ] Edit contact details functionality
- [ ] PEP (Politically Exposed Person) modal
- [ ] New customer flow
- [ ] Enhanced form validation and error handling
- [ ] Mobile optimization improvements
- [ ] Accessibility audit and improvements
- [ ] Performance optimization (code splitting, lazy loading)
- [ ] Unit and integration test coverage

---

## 👤 Author

**Rock Gomes** - Product Designer & Frontend Developer

- 🌐 Portfolio: [rockgomes.com](https://www.rockgomes.com)
- 📖 Case Study: [Inbank Hire Purchase Design](https://www.rockgomes.com/project/inbank---hire-purchase)
- 📧 Email: rock@rockgomes.com
- 💼 GitHub: [@rockgomes](https://github.com/rockgomes)

---

## 📄 License

This project is a portfolio demonstration. All rights reserved.

---

**Built with ❤️ using React, TypeScript, and AI-powered development tools**
