# Implementation Plan

- [x] 1. Initialize Next.js project with TypeScript and core dependencies





  - Create Next.js 14+ project with App Router and TypeScript
  - Install and configure Tailwind CSS
  - Install shadcn/ui CLI and initialize with custom theme
  - Install Framer Motion for animations
  - Install fast-check for property-based testing
  - Install Vitest for unit testing
  - Set up ESLint, Prettier, Husky, and lint-staged
  - _Requirements: 9.1, 9.3, 9.4, 10.1, 10.2, 10.3_

- [x] 2. Configure theme system and global styles





  - Create centralized theme configuration in Tailwind config
  - Define blue and indigo gradient colors as primary theme
  - Configure dark mode as default
  - Set up custom typography (modern, futuristic fonts)
  - Create global styles in styles/globals.css
  - Configure shadcn/ui theme to match brand colors
  - _Requirements: 1.1, 1.2, 1.3, 1.5_

- [x] 2.1 Write property test for theme configuration centralization







  - **Property 1: Theme configuration centralization**
  - **Validates: Requirements 1.5**
-

- [x] 3. Create data models and constants structure




  - Set up /constants directory structure
  - Define TypeScript interfaces for all data models (Skill, Project, Experience, About, Contact)
  - Create skills.ts with MERN, Full Stack, JavaScript, and DevOps skills data
  - Create projects.ts with sample project data
  - Create experience.ts with work history data
  - Create about.ts with personal background data
  - Create contact.ts with contact information and social links
  - _Requirements: 9.5, 4.1, 4.2, 4.3, 4.4_

- [x] 4. Build layout components



  - [x] 4.1 Create root layout with theme provider






    - Implement app/layout.tsx with metadata and theme setup
    - Add font configuration
    - _Requirements: 1.1, 11.4_
  -

  - [x] 4.2 Create Navbar component






    - Build Navbar with brand name "TheAbhiPatel"
    - Add navigation links (Home, Skills, Projects, Experience, About, Contact)
    - Implement sticky positioning with backdrop blur
    - Add mobile responsive menu
    - _Requirements: 2.1, 2.3_
  
  - [x] 4.3 Write property test for navigation functionality


    - **Property 2: Navigation functionality**
    - **Validates: Requirements 2.2**
  
  - [x] 4.4 Create Footer component


    - Build Footer with brand name "TheAbhiPatel"
    - Add social links
    - Add copyright information
    - _Requirements: 2.4_
  
  - [x] 4.5 Write property test for footer brand consistency








    - **Property 3: Footer brand consistency**
    - **Validates: Requirements 2.4**

- [x] 5. Create shared components




  - [x] 5.1 Build AnimatedBackground component






    - Create SVG-based animated backgrounds
    - Implement variants (hero, section, page)
    - Add subtle animations using CSS transforms
    - Optimize for performance
    - _Requirements: 1.4, 3.5, 12.4_
  
  - [x] 5.2 Build SectionHeading component








  - [x] 5.2 Build SectionHeading component


    - Create consistent heading styles
    - Add optional gradient text effect
    - Support alignment options
    - _Requirements: 1.3_
-

- [x] 6. Build home page components



-

  - [x] 6.1 Create HeroSection component






    - Build hero with name, job title, tagline
    - Add CTA button with hover effects
    - Implement animated entrance with Framer Motion
    - Add gradient text effects
    - _Requirements: 3.1_
  -

  - [x] 6.2 Create SkillsPreview component





    - Display skill icons in grid layout
    - Add "View All Skills" link
    - Implement hover animations
    - _Requirements: 3.2_
  
  - [x] 6.3 Create ProjectsPreview component







    - Display featured project cards
    - Add "View More Projects" button
    - Implement card hover effects
    - _Requirements: 3.3_
  -

  - [x] 6.4 Create ExperiencePreview component





    - Build mini timeline view
    - Display recent experience entries
    - Add link to full experience page
    - _Requirements: 3.4_
  
  - [x] 6.5 Assemble home page






    - Integrate all home page components in app/page.tsx
    - Add animated background
    - Configure SEO metadata
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_
-

- [x] 7. Build skills page



  - [x] 7.1 Create SkillCard component






    - Build card with icon, name, and category
    - Add optional proficiency indicator
    - Implement hover animation with scale and glow
    - _Requirements: 4.5_
  
  - [x] 7.2 Write property test for skills categorization






    - **Property 4: Skills categorization**
    - **Validates: Requirements 4.5**
  
  - [x] 7.3 Create skills page layout







    - Organize skills by categories (MERN, Full Stack, JavaScript, DevOps)
    - Render SkillCard components for each skill
    - Add section headings for each category
    - Configure SEO metadata
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_
- [x] 8. Build projects page and components



- [ ] 8. Build projects page and components

  - [x] 8.1 Create ProjectCard component






    - Build card with image, title, description
    - Display technology tags
    - Add GitHub and live demo links
    - Implement hover animations
    - Make card clickable for navigation
    - _Requirements: 5.1, 5.2_
  
  - [x] 8.2 Write property test for project card completeness


    - **Property 5: Project card completeness**
    - **Validates: Requirements 5.1, 5.2**
  -

  - [x] 8.3 Write property test for project card navigation






    - **Property 6: Project card navigation**
    - **Validates: Requirements 5.3**
  -

  - [x] 8.4 Create projects listing page






    - Render ProjectCard for each project
    - Implement grid layout
    - Add filtering or sorting options
    - Configure SEO metadata
    - _Requirements: 5.1_
  
  - [x] 8.5 Create project detail page





    - Build dynamic route app/projects/[slug]/page.tsx
    - Display project overview, features, architecture
    - Add image gallery
    - Include GitHub and live demo links
    - Configure dynamic SEO metadata
    - _Requirements: 5.3, 5.4_
  
  - [x] 8.6 Write property test for project detail completeness


    - **Property 7: Project detail completeness**
    - **Validates: Requirements 5.4**

- [x] 9. Build experience page



  - [x] 9.1 Create ExperienceTimeline component







    - Create components/experience/ExperienceTimeline.tsx
    - Build vertical timeline layout with visual timeline line
    - Display company, role, duration, achievements for each entry
    - Add expandable sections for achievements list
    - Include company logos if available
    - Style with gradient accents and hover effects
    - _Requirements: 6.1, 6.2_
  

  - [x] 9.2 Write property test for experience entry completeness







    - **Property 8: Experience entry completeness**
    - **Validates: Requirements 6.2**
  -

  - [x] 9.3 Write property test for experience chronological ordering







    - **Property 9: Experience chronological ordering**
    - **Validates: Requirements 6.3**
  
  - [x] 9.4 Create experience page layout


    - Create app/experience/page.tsx
    - Integrate ExperienceTimeline component
    - Pass sorted experiences using getSortedExperiences() from constants
    - Add AnimatedBackground component
    - Configure SEO metadata with title and description
    - _Requirements: 6.1, 6.2, 6.3_

- [x] 10. Build about page


  - [x] 10.1 Create about page layout




  - [x] 10.1 Create about page layout



    - Create app/about/page.tsx
    - Display introduction section with aboutData.introduction
    - Render background paragraphs from aboutData.background array
    - Add profile image using Next.js Image component with aboutData.profileImage
    - Include interests section displaying aboutData.interests as a list
    - Add AnimatedBackground component
    - Configure SEO metadata with title and description
    - Style with gradient accents and proper spacing
    - _Requirements: 7.1_
-

- [x] 11. Build contact page and form




  - [x] 11.1 Create form validation utilities







    - Create lib/validation.ts file (using lib directory for consistency)
    - Build validateEmail function for email format validation
    - Create validateRequired function for required field validation
    - Implement getValidationErrors function that returns error messages
    - Export validation helper functions
    - _Requirements: 8.3_
  
  - [x] 11.2 Create ContactForm component







    - Create components/contact/ContactForm.tsx
    - Build form with name, email, and message fields
    - Implement inline validation with error messages using validation utilities
    - Add submit button with loading state
    - Handle form submission with client-side validation
    - Display success message after submission
    - Style with gradient accents and focus states
    - _Requirements: 8.1, 8.3_
  -

  - [x] 11.3 Write property test for contact form validation







    - **Property 10: Contact form validation**
    - **Validates: Requirements 8.3**
  
-

  - [x] 11.4 Create contact page layout




    - Create app/contact/page.tsx
    - Integrate ContactForm component
    - Display social media links from contactInfo.socialLinks
    - Add contact information section with contactInfo.email
    - Add AnimatedBackground component
    - Configure SEO metadata with title and description
    - Style with proper layout and spacing
    - _Requirements: 8.1, 8.2_
-

- [x] 12. Final checkpoint - Ensure all tests pass




  - Run all tests with npm test
  - Verify all property-based tests pass
  - Verify all unit tests pass
  - Check for any TypeScript errors
  - Ensure all pages render correctly
  - Ask the user if questions arise
