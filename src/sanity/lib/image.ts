import createImageUrlBuilder from '@sanity/image-url';
import type { Image } from 'sanity';

// Import your projectId and dataset from environment configuration
import { dataset, projectId } from '../env';

// Step 1: Initialize the image builder with projectId and dataset
const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '', // Ensure a fallback to an empty string
  dataset: dataset || '',    // Ensure a fallback to an empty string
});

// Step 2: Define the function to generate image URLs
export const urlForImage = (source: Image | null | undefined): string => {
  // Validate the source object
  if (!source?.asset?._ref) {
    console.warn('Invalid image source:', source); // Log invalid sources for debugging
    return '/fallback-image.jpg'; // Provide a fallback image URL
  }

  // Generate and return the image URL
  return imageBuilder.image(source).auto('format').fit('max').url();
};
