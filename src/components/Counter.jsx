export default function Counter({ count }) {
  const isLimitReached = count >= 5;

  return (
    <>
      <p className={`count ${isLimitReached ? "fade" : ""}`}>
        {isLimitReached ? "Limit Reached" : count}
      </p>
    </>
  );
}