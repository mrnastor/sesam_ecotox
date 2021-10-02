import { IGatsbyImageData } from 'gatsby-plugin-image';

export type ImageSharpFluid = IGatsbyImageData;

export type ImageSharpFixed = IGatsbyImageData;

export type ObjectType = Record<string, any>;

export interface SectionTitle {
  title: string;
  subtitle: string;
  headLabel?: string;
  staffLabel?: string;
  recentLabel?: string;
}
