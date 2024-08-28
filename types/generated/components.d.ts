import type { Schema, Attribute } from '@strapi/strapi';

export interface SectionSectionMetadata extends Schema.Component {
  collectionName: 'components_section_section_metadata';
  info: {
    displayName: 'section_metadata';
    icon: 'apps';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    section_id: Attribute.String & Attribute.Required & Attribute.Unique;
    background: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'section.section-metadata': SectionSectionMetadata;
    }
  }
}
