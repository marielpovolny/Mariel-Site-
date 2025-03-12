# Project Notes: Mariel Povolny's Personal Website

## Project Overview

This repository contains the personal website for Mariel Povolny, a technology policy researcher at Columbia SIPA Innovation Lab. The site showcases her academic and professional work, publications, research interests, and provides contact information.

## Technology Stack

- **Framework**: Next.js 15.2.2 with Turbopack
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom global styles
- **Typography**: Geist font family
- **Deployment**: GitHub

## Key Features Implemented

- Responsive design that works well on both mobile and desktop devices
- Professional information architecture with sections for About, Research, Publications, Blog, Resume, and Contact
- Accessible navigation with hover effects and skip-to-content links
- Visually appealing UI with consistent branding and color scheme
- Optimized typography for readability
- Smooth animations for enhanced user experience

## Design Challenges and Solutions

### Dark Mode Issues

**Challenge**: The website was initially displaying in dark mode by default, making text unreadable with poor contrast.

**Solution**: 
- Removed the `prefers-color-scheme: dark` media query from globals.css
- Explicitly set `color-scheme: light` for all users
- Enhanced text contrast by using darker shades for text elements
- Added specific color values for heading and paragraph elements

### Visual Design Improvements

**Challenge**: The initial design lacked visual appeal and hierarchy.

**Solution**:
- Added subtle gradients for background elements
- Implemented shadows for depth and dimensionality
- Enhanced spacing between elements for better readability
- Created consistent styling for cards and buttons
- Added hover effects for interactive elements
- Improved color contrast throughout the site

### Navigation Enhancement

**Challenge**: The navigation menu lacked visual distinction and accessibility features.

**Solution**:
- Improved the NavLink component with better contrast
- Added underline animations for hover states
- Enhanced focus styles for keyboard navigation
- Ensured proper spacing between navigation items
- Made the active state visually clear

## Accessibility Considerations

- Implemented skip-to-content link for keyboard users
- Used semantic HTML structure throughout
- Ensured sufficient color contrast for all text
- Added focus indicators for keyboard navigation
- Included ARIA labels where appropriate
- Designed with responsive layouts to accommodate different screen sizes
- Used appropriate text alternatives for non-text content

## Component Structure

The site is organized into several main sections:

1. **Header**: Navigation and site identity
2. **Hero Section**: Introduction to Mariel and her work
3. **Featured Research**: Highlights of key research areas
4. **Publications**: Notable published works
5. **Resume**: Detailed professional experience and skills
6. **Contact/Newsletter**: Communication channel
7. **Footer**: Additional navigation and legal information

## Styling Approach

The styling combines Tailwind CSS utility classes with custom CSS variables for consistent theming. Global styles define:

- Color palette with primary, secondary, and accent colors
- Typography settings for headings and body text
- Spacing and layout conventions
- Animation keyframes for consistent motion design
- Accessibility enhancements

## Lessons Learned

1. **Theme Management**: Explicit theme setting is important to ensure consistent user experience regardless of system preferences.

2. **Visual Hierarchy**: Proper spacing, typography, and color contrast significantly improve readability and user experience.

3. **Component Design**: Well-structured components with consistent styling patterns make the site more maintainable.

4. **Accessibility First**: Building with accessibility in mind from the start is easier than retrofitting later.

5. **Responsive Considerations**: Testing across various viewport sizes ensures a consistent experience for all users.

## Future Improvements

Potential enhancements for future iterations:

1. Add actual content and images to replace placeholders
2. Implement a dark mode toggle that users can control
3. Add blog functionality with a CMS integration
4. Enhance SEO with structured data
5. Include more interactive elements like filters for publications
6. Add analytics to track user engagement
7. Implement a contact form with backend functionality

## Development Workflow

1. Local development using `npm run dev`
2. Access the development server at http://localhost:3000
3. Changes tracked via Git and pushed to GitHub
4. Potential future CI/CD implementation for automated deployment 