export interface FeatureBlock {
  id: string
  title: string
  description: string
  image: string
  imageAlt: string
  imagePosition: 'left' | 'right'
}

/**
 * Features section content
 * Highlighting key features, benefits, or unique aspects of the practice
 */
export const featureBlocks: FeatureBlock[] = [
  {
    id: 'feature-1',
    title: 'Expert Chiropractic Care',
    description:
      'Our comprehensive approach combines advanced chiropractic techniques with personalized treatment plans designed to address your specific needs. We focus on long-term solutions rather than temporary relief, helping you achieve lasting wellness.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
    imageAlt: 'Professional chiropractic treatment',
    imagePosition: 'right',
  },
  {
    id: 'feature-2',
    title: 'Modern Treatment Techniques',
    description:
      'We utilize the latest evidence-based chiropractic methods and state-of-the-art equipment to provide effective, gentle care. Our techniques are continuously updated to incorporate the most current research in chiropractic medicine.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    imageAlt: 'Modern treatment techniques',
    imagePosition: 'left',
  },
  {
    id: 'feature-3',
    title: 'Personalized Wellness Plans',
    description:
      'Every patient receives a customized treatment plan tailored to their unique condition, lifestyle, and wellness goals. We take the time to understand your needs and create a roadmap to help you achieve optimal health.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80',
    imageAlt: 'Personalized wellness consultation',
    imagePosition: 'right',
  },
]
