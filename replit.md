# Overview

CloudIaC is a Brazilian DevOps consulting company website built as a full-stack application using React and Express. The site showcases their services in cloud infrastructure, security, and DevOps consulting, with a focus on AWS solutions. The application features a modern blue gradient design system using Tailwind CSS and shadcn/ui components, with Portuguese language content targeting the Brazilian market.

## Recent Changes (January 2025)
- **Complete Business Language Transformation**: Replaced all technical jargon with business-focused language emphasizing results, ROI, and measurable benefits
- **Results-Driven Content**: Updated hero section with specific value propositions (40% cost reduction, 3x faster delivery, 100% security compliance)
- **WhatsApp-First Strategy**: Replaced contact forms with direct WhatsApp integration for immediate lead generation
- **Outcome-Based Services**: Reframed service offerings to focus on business outcomes rather than technical features
- **Success Metrics Display**: Added real performance indicators throughout the site (-40% costs, 3x speed improvements)
- **Professional Imagery**: Used Unsplash technology-focused photos to support business messaging
- **Call-to-Action Optimization**: Enhanced CTAs to emphasize free consultation and guaranteed results
- **Fixed WhatsApp Button**: Implemented sticky floating WhatsApp button visible across all pages during scroll
- **Pricing Removal**: Removed all pricing from services page for commercial safety and flexibility
- **Netlify Deploy Configuration**: Added netlify.toml and _redirects files for proper SPA deployment

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Client-side routing implemented with Wouter library for lightweight navigation
- **Styling**: Tailwind CSS with custom design tokens and shadcn/ui component library
- **State Management**: TanStack React Query for server state management
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing
- **UI Components**: Comprehensive component library built on Radix UI primitives with consistent theming

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints with proper error handling and request logging
- **Data Storage**: In-memory storage implementation with interface for future database integration
- **Validation**: Zod schemas for request/response validation shared between client and server

## Data Storage Solutions
- **Current Implementation**: Memory-based storage using Map structures for rapid prototyping
- **Database Ready**: Drizzle ORM configured for PostgreSQL with schema definitions
- **Migration Support**: Database migration system configured with proper schema management
- **Connection**: Neon Database serverless PostgreSQL configured for production deployment

## Authentication and Authorization
- **Current State**: Basic user schema defined but not implemented in UI
- **Session Management**: Express sessions configured with PostgreSQL session store
- **Security**: Password handling and user management structures prepared for implementation

## External Dependencies

### Core Technologies
- **Database**: Neon Database (serverless PostgreSQL)
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Validation**: Zod for schema validation
- **Query Client**: TanStack React Query for data fetching

### UI and Styling
- **Component Library**: Radix UI primitives with shadcn/ui wrapper components
- **Styling**: Tailwind CSS with PostCSS processing
- **Icons**: Lucide React icon library
- **Fonts**: Google Fonts (Inter) for typography

### Development Tools
- **Build Tool**: Vite with React plugin and TypeScript support
- **Development**: Hot module replacement and error overlay for development experience
- **Replit Integration**: Cartographer plugin and development banner for Replit environment
- **Type Checking**: Strict TypeScript configuration with path aliases

### Business Integrations
- **Communication**: WhatsApp Business API integration for customer contact
- **Images**: Unsplash for stock photography
- **Contact Forms**: Direct form submission to backend with email notification structure