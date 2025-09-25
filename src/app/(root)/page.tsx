// app/page.tsx or app/components/Home.tsx
"use client";

import { useLoading } from "../context/LoadingContext";

export default function Home() {
  const { setLoading } = useLoading();

  const handleClick = async () => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const response = await fetch("/api/your-endpoint");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button onClick={handleClick} className="btn-primary">
        Submit
      </button>
    </>
  );
}
