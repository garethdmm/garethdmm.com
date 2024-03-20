import Collapse from "./Collapse";

type ExperienceType = {
  id?: string;
  place: string;
  role: string;
  left: boolean;
  description: string;
  time: string;
  details?: string[];
  stack?: string[];
  key: number;
};

export default function Experience({
  key,
  left,
  role,
  place,
  description,
  details,
  stack,
  id,
  ...props
}: ExperienceType) {
  return (
    <div
      id={id || ""}
      key={key}
      className={`${
        left ? "ml-auto mr-0" : null
      } p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {role}
      </h5>
      <h4 className="text-base text-gray-600 mb-3">{place}</h4>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
      {stack && (
        <div className="flex flex-wrap gap-x-2 gap-y-3 mt-4 line-clamp-2">
          {stack.map((tech) => (
            <span
              key="1"
              className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
      {details && (
        <Collapse>
          <ul className="list-disc pt-3 space-y-3 ml-4">
            {details.map((detail) => (
              <li key="1">{detail}</li>
            ))}
          </ul>
        </Collapse>
      )}
    </div>
  );
}
