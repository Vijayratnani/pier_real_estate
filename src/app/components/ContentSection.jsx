import React from 'react';

const ContentSection = ({ title, paragraphs, listItems, id }) => {
  return (
    <section className="mt-10 ">
      <h2 className="text-2xl font-bold text-transparent bg-clip-text
                bg-gradient-to-r from-grayCustom to-voiletCustom" id={id}>{title}</h2>
      {paragraphs.map((text, index) => (
        <p key={index} className="mt-4 text-voiletCustom">
          {text}
        </p>
      ))}
      {listItems && (
        <ul className="mt-4 ml-6 list-disc text-voiletCustom">
          {listItems.map((item, index) => (
            <li key={index} className="mt-2">
              {item}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default ContentSection;
