type ExperienceType = {
  place: string;
  role: string;
  left: boolean;
  description: string;
  time: string;
};

export default function Experience({
  left,
  role,
  place,
  description,
  time,
}: ExperienceType) {
  return (
    <div
      className={`${
        left ? "ml-auto mr-0" : null
      } max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {role}
      </h5>
      <h4 className="text-base text-gray-600 mb-3">{place}</h4>
      <p
        style={{ "margin-bottom": "1rem" }}
        className="font-normal text-gray-700 dark:text-gray-400"
      >
        {description}
      </p>
      <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
        Read more →
      </a>
    </div>
  );
}
