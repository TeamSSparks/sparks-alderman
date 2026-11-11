const URL_REGEX = /(https?:\/\/[^\s<]+[^\s<.,;:!?)])/g;
const URL_TEST = /^https?:\/\//;

export default function Linkify({ text }: { text: string }) {
  const parts = text.split(URL_REGEX);

  return (
    <>
      {parts.map((part, i) =>
        URL_TEST.test(part) ? (
          <a
            key={i}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-brand-red underline hover:no-underline break-words"
          >
            {part}
          </a>
        ) : (
          part
        )
      )}
    </>
  );
}
