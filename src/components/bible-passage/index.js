import React from "react";

export const BiblePassage = ({ book, chapter, verses, translation }) => {
  return (
    <div>{`${book} ${chapter}:${verses} (${translation})`}</div>
  );
}
