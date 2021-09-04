import { FluidObject, FixedObject } from 'gatsby-image';

export type ImageSharpFluid = FluidObject | FluidObject[] | undefined;

export type ImageSharpFixed = FixedObject | FixedObject[] | undefined;

export type ObjectType = Record<string, any>;

export interface SectionTitle {
  title: string;
  subtitle: string;
  headLabel?: string;
  staffLabel?: string;
  recentLabel?: string;
}
