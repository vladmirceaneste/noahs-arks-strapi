import type { Schema, Struct } from '@strapi/strapi';

export interface AnimalTimelineUpdate extends Struct.ComponentSchema {
  collectionName: 'components_animal_timeline_updates';
  info: {
    displayName: 'timelineUpdate';
  };
  attributes: {
    date: Schema.Attribute.Date;
    description: Schema.Attribute.RichText;
    photos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'animal.timeline-update': AnimalTimelineUpdate;
    }
  }
}
