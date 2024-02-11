"use client";

import { Button } from "@/shared/ui/button";
import { useState } from "react";

export default function Home() {
  const handleClick = () => {
    setTestotserone((e) => e + Math.random());
  };

  const [testosterone, setTestotserone] = useState(0);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Button onClick={handleClick}>
        У меня умирал сервер и я ничего не мог сделать, нажми на меня, чтобы
        вырос тестостерон
      </Button>
      {!!testosterone && (
        <p className="text-red-700 mt-10">Твой тестостерон {testosterone}</p>
      )}
    </main>
  );
}
