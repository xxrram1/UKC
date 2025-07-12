# Unknowcallback Digital Agency Website

A modern, responsive website for Unknowcallback Digital Agency built with React + Vite. This website showcases a complete digital agency offering web design, e-commerce, app development, e-learning, and graphic design services.

## 🚀 Features

### Core Features
- **Modern Design**: Dark theme with electric blue accent color
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Fast Performance**: Built with Vite for optimal loading speed
- **SEO Optimized**: Proper HTML structure and meta tags
- **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation

### Visual Elements
- **Typing Animation**: Dynamic hero section with typing effect
- **Smooth Animations**: Framer Motion animations throughout
- **Interactive Components**: Hover effects, transitions, and micro-interactions
- **Professional Typography**: Inter font family for modern appearance
- **Consistent Branding**: Cohesive color scheme and styling

### Pages & Sections
- **Home Page**: Hero, process timeline, services overview, testimonials, CTA
- **Pricing Page**: Package comparison, additional services, FAQ
- **Contact Page**: Contact information, form, Google Maps integration
- **Service Pages**: Detailed pages for Web Design and E-commerce
- **Global Components**: Sticky header with dropdown navigation, footer

## 🛠️ Technology Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Icons**: React Icons (Font Awesome)
- **Styling**: CSS-in-JS with CSS custom properties (variables)

## 📦 Project Structure

```
unknowcallback-agency/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Footer.jsx          # Footer with links
│   │   └── Layout.jsx          # Main layout wrapper
│   ├── pages/
│   │   ├── Home.jsx            # Landing page
│   │   ├── Pricing.jsx         # Pricing packages
│   │   ├── Contact.jsx         # Contact form & info
│   │   └── services/
│   │       ├── WebDesign.jsx   # Web design service
│   │       └── ECommerce.jsx   # E-commerce service
│   ├── index.css               # Global styles & variables
│   ├── App.jsx                 # Main app component
│   └── main.jsx                # Entry point
├── public/
├── package.json
└── README.md
```

## 🎨 Design System

### Color Palette
- **Primary Background**: `#000000` (Black)
- **Secondary Background**: `#1a1a1a` (Dark Gray)
- **Primary Text**: `#ffffff` (White)
- **Secondary Text**: `#f4f4f4` (Light Gray)
- **Accent Color**: `#007bff` (Electric Blue)
- **Muted Text**: `#888888` (Gray)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold weight (700-800)
- **Body Text**: Regular weight (400)
- **Font Sizes**: Responsive scale from 0.75rem to 3.75rem

### Spacing System
- **XS**: 0.5rem
- **SM**: 1rem
- **MD**: 1.5rem
- **LG**: 2rem
- **XL**: 3rem
- **2XL**: 4rem
- **3XL**: 6rem

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd unknowcallback-agency
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Visit `http://localhost:5173` to see the website

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌟 Key Components

### Header
- Sticky navigation with smooth scrolling
- Dropdown menu for services
- Mobile-friendly hamburger menu
- Active state indicators

### Hero Section
- Typing animation with multiple text variations
- Gradient background with animated elements
- Call-to-action buttons
- Responsive typography

### Service Cards
- Hover effects with smooth transitions
- Icon-based design
- Consistent layout and spacing
- Link integration

### Pricing Table
- Comparison layout with featured package
- Check-mark icon lists
- Responsive card design
- Clear pricing structure

### Contact Form
- Form validation
- File upload capability
- Loading states
- Success/error messages
- reCAPTCHA integration ready

### FAQ Section
- Accordion-style questions
- Smooth expand/collapse animations
- Keyboard navigation support

## 🎯 Business Information

### Company Details
- **Name**: Unknowcallback
- **Tagline**: "Complete! All in one place." (ครบ! จบที่เดียว)
- **Services**: Web Design, E-commerce, App Development, E-Learning, Graphic Design
- **Target Market**: Thai businesses from startups to enterprises

### Contact Information
- **Address**: 48/91 ต.ขุนทะเล อ.เมือง จ.สุราษฎร์ธานี 10270
- **Email**: hello@unknowcallback.com
- **Phone**: +66 (0) 77-123-456
- **Line ID**: @unknowcallback

### Service Packages
- **Web Design**: Starting from ฿45,000+
- **E-commerce**: Starting from ฿70,000+
- **Custom Apps**: Starting from ฿150,000+

## 🔧 Customization

### Adding New Services
1. Create a new service page in `src/pages/services/`
2. Add the route in `src/App.jsx`
3. Update navigation links in `src/components/Header.jsx`
4. Add to footer links in `src/components/Footer.jsx`

### Modifying Styles
- Global styles and CSS variables are in `src/index.css`
- Component-specific styles use CSS-in-JS with styled-jsx
- Responsive breakpoints are defined in CSS variables

### Adding Content
- Service information is stored in component state
- FAQ items can be easily modified in respective page components
- Portfolio items and testimonials are configurable arrays

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support or questions about this project, please contact:
- Email: hello@unknowcallback.com
- Line: @unknowcallback

---

**Built with ❤️ by Unknowcallback Digital Agency**
