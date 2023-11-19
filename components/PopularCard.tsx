interface Props {
  color: string;
  name: string;
  description: string;
}
const PopularCard = ({ color, name, description }: Props) => {
  return (
    <div className="flex flex-col justify-start items-start gap-1 tracking-wide">
      <span
        className={`p-1 px-2 rounded-3xl text-xs bg-${color}-400 text-white`}
      >
        {name}
      </span>
      <p>{description}</p>
      <span className="text-xs inline">
        John Doe - <span className="text-gray-500 inline">0.1.09.2023</span>
      </span>
    </div>
  );
};

export default PopularCard;
