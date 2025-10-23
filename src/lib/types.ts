import type { EntryFieldTypes } from "contentful";

export type TutorSkeleton = {
  contentTypeId: "tutor";
  fields: {
    name: EntryFieldTypes.Symbol;
    picture: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    rating: EntryFieldTypes.Number;
    specialization: EntryFieldTypes.Symbol;
    exp: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  };
};

export type CourseSkeleton = {
  contentTypeId: "course";
  fields: {
    name: EntryFieldTypes.Text;
    desc: EntryFieldTypes.Text;
    image: EntryFieldTypes.AssetLink;
    materials: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    price: EntryFieldTypes.Integer;
    tutor: EntryFieldTypes.EntryLink<TutorSkeleton>;
  };
};
