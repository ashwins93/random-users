import Card from "./Card";

type ContactCardProps = {
  contact: any;
};

export default function ContactCard({ contact }: ContactCardProps) {
  return (
    <Card className="p-2">
      <div className="p-5 bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-xl">
        <div className="flex items-center space-x-3">
          <img
            src={contact?.picture?.medium}
            className="rounded-full w-20 h-20 object-cover"
          />
          <div className="text-raven-600">
            <div className="text-2xl text-wide">
              {contact?.name?.first} {contact?.name?.last}
            </div>
            <div className="text-sm text-slate-500 flex space-x-1 items-center mt-2">
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>{contact?.email}</span>
            </div>
            <div className="text-sm text-slate-500 flex space-x-1 items-center">
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>{contact?.phone}</span>
            </div>
            <div className="text-sm text-slate-500 flex space-x-1 items-center">
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>
                {contact?.location?.city}, {contact?.location?.country}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
