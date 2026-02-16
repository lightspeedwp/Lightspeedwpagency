/**
 * Features Home Pattern
 * 
 * WordPress pattern: lsx-design/features/home
 * 
 * Homepage specific features grid — "Why Choose LightSpeed?"
 * Uses FeatureGrid pattern with specific content from front-page.ts data.
 */

import { FeatureGrid } from './FeatureGrid';
import { frontPageWhyChoose } from '../../data/front-page';

export function FeaturesHome() {
  return (
    <FeatureGrid
      title={frontPageWhyChoose.title}
      description={frontPageWhyChoose.description}
      items={frontPageWhyChoose.features}
      columns={3}
      variant="bordered"
      iconStyle="rounded"
      spacing="xl"
      maxWidth="6xl"
    />
  );
}
