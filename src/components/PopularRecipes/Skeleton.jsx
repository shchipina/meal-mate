export const Skeleton = () => {
  return (
    <article className="lg:w-[350px] rounded-3xl overflow-hidden bg-amber-50 animate-pulse">
      <div className="h-[234px] bg-gray-200"></div>

      <div className="p-6 space-y-4">
        <div className="h-6 bg-gray-200 rounded w-3/4"></div>
        <div className="flex justify-end">
          <div className="h-[32px] w-[120px] rounded-3xl bg-gray-200"></div>
        </div>
      </div>
    </article>
  );
};
