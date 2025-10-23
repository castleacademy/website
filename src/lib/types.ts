import type { EntryFieldTypes } from "contentful";

export type TutorSkeleton = {
  contentTypeId: "tutor";
  fields: {
    name: EntryFieldTypes.Text;
    rating: EntryFieldTypes.Number;
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