# Skip Size UI App

This is React JS coding challenge for REM Waste Hiring Process. It is intended to design a good-looking skip the size step in multi-step form fill.

![Skip Size UI App Preview](https://github.com/julesntare/skip-size-ui/blob/4225359200bf9898a8729c7198b273c1988a8fdc/src/assets/ui-screenshot.jpeg)

## 🚀 Features

### Core Functionality

- **Dynamic Skip Loading**: Fetches available skips based on location
- **Smart Sorting**: Automatically sorts skips by size for easy comparison
- **Real-time Selection**: Interactive cards with immediate visual feedback
- **Responsive Design**: Seamless experience across desktop, tablet, and mobile devices

### UI/UX Highlights

- **Staggered Load Animation**: Cards fade in sequentially for a polished entrance
- **Hover Effects**: 3D transform and shadow effects on card interaction
- **Selection State**: Visual ring and checkmark indicator for selected items
- **Loading Skeletons**: Smooth loading states while fetching data
- **Error Handling**: Graceful error states with retry functionality

### Technical Features

- **TypeScript**: Full type safety throughout the application
- **API Integration**: RESTful API integration with fallback to mock data
- **Component Architecture**: Modular, reusable components
- **Performance Optimized**: Efficient rendering and state management

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Modern icon library

## 📦 Installation

  Clone the repository:

```bash
git clone https://github.com/julesntare/skip-size-ui.git
cd skip-size-ui
```

  Install dependencies:

```bash
npm install
```

  Set up environment variables:

```bash
cp .env.example .env
```

Edit `.env` with your API endpoint:

```bash
VITE_API_BASE_URL=https://app.wewantwaste.co.uk/api
```

1. Start the development server:

```bash
npm run dev
```

## 🏗️ Project Structure

```bash
skip-hire-app/
├── src/
│   ├── assets/               # Static assets
│   │   └── ui-screenshot.jpeg
│   ├── components/          # Reusable UI components
│   │   ├── SkipCard.tsx    # Individual skip card component
│   │   └── SkipCardSkeleton.tsx  # Loading skeleton
│   ├── services/           # API integration layer
│   │   └── api.ts
│   ├── types/              # TypeScript type definitions
│   │   └── skip.ts
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles and Tailwind imports
├── public/                 # Static assets
├── index.html              # HTML template
└── package.json            # Project dependencies
```

## 🎯 UI Components

### SkipCard

The main product card component featuring:

- Gradient background with multiple layers
- Dynamic badges (hire period, road permission, popular items)
- Visual skip representation with size indicator
- Feature grid showing key information
- Price display with clear CTAs
- Success indicator for selected state

### SkipCardSkeleton

Loading placeholder that matches the card design:

- Animated pulse effect
- Maintains layout structure during loading
- Prevents layout shift

### Checkout Bar

Fixed bottom bar that appears on selection:

- Smooth slide-up animation
- Selected skip summary
- Clear pricing information
- Back button to deselect
- Prominent checkout CTA

## 🎨 Design System

### Color Palette

- **Primary**: Gradients from `gray-900` to `black`
- **Accents**: White and gray tones for contrast
- **Success**: Green indicators for permissions
- **Warning**: Orange for restrictions
- **Popular**: Yellow to orange gradient

### Typography

- **Headings**: Bold with gradient text effects
- **Body**: Clear hierarchy with gray tones
- **Prices**: Extra bold with large sizing

### Spacing

- Consistent use of Tailwind's spacing scale
- Card padding: `p-6`
- Grid gaps: `gap-6` to `gap-8`
- Section margins: `mb-8` to `mb-12`

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run type-check   # Run TypeScript type checking
npm run lint         # Run ESLint
```

## 📝 API Integration

The app integrates with the skip hire API:

```typescript
GET /api/skips/by-location?postcode={postcode}&area={area}
```

Response format:

```json
{
  "id": 17933,
  "size": 4,
  "hire_period_days": 14,
  "price_before_vat": 211,
  "vat": 20,
  "allowed_on_road": true,
  "allows_heavy_waste": false,
  ...
}
```

## 🎭 UI Transformation Process

### Before: Traditional Grid Layout

The original design featured:

- Basic grid of skip options
- Simple pricing display
- Minimal visual hierarchy
- Standard form-like interface

## 🚀 Deployment

Build the application:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

### Deployment Options

- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop `dist/` folder
- **GitHub Pages**: Use GitHub Actions workflow
- **Custom Server**: Serve the `dist/` folder with any web server

### Environment Variables for Production

```bash
VITE_API_BASE_URL=https://app.wewantwaste.co.uk/api
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Coding Standards

- Use TypeScript for all new components
- Follow the existing component structure
- Maintain consistent Tailwind class ordering
- Add proper TypeScript types for all props and state
- Include loading and error states for async operations

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from modern product showcase interfaces
- Icons provided by [Lucide](https://lucide.dev/)
- Skip Size API by REM Waste
- Built with React, TypeScript, and Tailwind CSS

## 📞 Support

For support, email <julesntare@gmail.com> or open an issue in the GitHub repository
