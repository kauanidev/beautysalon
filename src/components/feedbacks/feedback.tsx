type FeedbackProps = {
  feedback: {
    content: string;
    authorImg: string;
    authorName: string;
  };
};

export const Feedback = ({ feedback }: FeedbackProps) => {
  return (
    <div className="py-12 px-4 sm:p-[52px] rounded bg-white shadow-md">
      <p className="text-primary-dark">
        <span className="text-primary font-quote text-5xl relative top-5">
          “{" "}
        </span>
        {feedback.content}
      </p>
      <div className="flex items-center gap-2 mt-6">
        <img
          src={feedback.authorImg}
          alt={feedback.authorName}
          className="w-8 h-8 rounded-full object-cover"
        />
        <p className="text-gray">{feedback.authorName}</p>
      </div>
    </div>
  );
};
