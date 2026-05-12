import { JsonLd } from './JsonLd';
import { generateOrganizationSchema, generateWebsiteSchema } from '@/lib/seo/generateSchema';

export function OrganizationSchema() {
  return (
    <>
      <JsonLd schema={generateOrganizationSchema()} />
      <JsonLd schema={generateWebsiteSchema()} />
    </>
  );
}
