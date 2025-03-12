# Mariel Povolny - Personal Website

This is the personal website for Mariel Povolny, a researcher at the Columbia SIPA Innovation Lab. The website showcases her professional work, research interests, publications, and provides ways to contact her.

## About Mariel Povolny

Mariel Povolny is a researcher at the Innovation Lab, part of the Columbia SIPA Institute of Global Politics, where she explores the intersection of technology, policy, and digital governance. Her work focuses on:

- Open-source tooling development
- The impact of artificial intelligence on democratic systems
- Red-teaming methodologies to assess online threats

## Website Features

- **Professional Portfolio**: Showcases Mariel's academic and professional background
- **Research Showcase**: Detailed information about her research projects and methodologies
- **Publications Archive**: A collection of her articles published in Tech Policy Press and academic journals
- **Blog**: Regular insights and updates on technology policy topics
- **Contact Information**: Professional contact details and a contact form

## Technical Details

The website is built with:

- [Next.js](https://nextjs.org/) - React framework for production
- [TypeScript](https://www.typescriptlang.org/) - For type safety
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [ESLint](https://eslint.org/) - For code quality

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd mariel-povolny-website

# Install dependencies
npm install
# or
yarn install
```

### Development

```bash
# Run the development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

```bash
# Build for production
npm run build
# or
yarn build

# Run the production server
npm start
# or
yarn start
```

## Project Structure

```
├── public/             # Static files
├── src/                # Source files
│   ├── app/            # Next.js app router
│   │   ├── about/      # About page
│   │   ├── blog/       # Blog section
│   │   ├── contact/    # Contact page
│   │   ├── publications/ # Publications page
│   │   ├── research/   # Research page
│   │   ├── layout.tsx  # Root layout
│   │   └── page.tsx    # Home page
│   ├── components/     # Reusable components
│   └── styles/         # CSS styles
└── package.json        # Project metadata and dependencies
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions about this website, please contact [contact@marielpovolny.com](mailto:contact@marielpovolny.com).
