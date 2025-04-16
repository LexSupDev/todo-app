export const DoneTask = ({taskName}) => {
  return (
    <div className="bg-[#15101C] w-full flex flex-row justify-between p-5 mt-4 rounded-md">
      <p className="line-through">{taskName}</p>
    </div>
  );
};
