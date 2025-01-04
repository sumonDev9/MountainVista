
const ReviewCard = ({ allreview }) => {

  const { image, user, comment } = allreview;
  return (
    <div>
      <div
        style={{ width: "300px", height: "240px" }}
        className="bg-white shadow-lg rounded-lg p-5 mx-4 flex flex-col space-y-4"
      >
        <p className="text-secondary text-base">{comment}</p>
        <div className="flex items-center mt-auto gap-5">
          <img
            src={image}
            alt={user}
            className="w-16 h-16 rounded-full"
          />
          <h3 className="font-semibold text-xl text-primary">{user}</h3>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;