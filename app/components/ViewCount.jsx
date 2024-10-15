import React from "react";

export default function ViewCount() {
  const [views, setViews] = useState(initialViews);

  useEffect(() => {
    const updateViews = async () => {
      const updatedViews = await incrementViews();
      setViews(updatedViews);
    };
    updateViews();
  }, []);
  return (
    <div>
      <p>Views: {views}</p>
    </div>
  );
}
