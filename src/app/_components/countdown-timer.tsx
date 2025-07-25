"use client";

import { useState, useEffect } from "react";

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // August 23, 2025 at 10:00 AM Bogotá time (COT = UTC-5)
    const targetDate = new Date("2025-08-23T10:00:00-05:00");

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: "Días" },
    { value: timeLeft.hours, label: "Horas" },
    { value: timeLeft.minutes, label: "Minutos" },
    { value: timeLeft.seconds, label: "Segundos" },
  ];

  return (
    <div className="mb-8">
      {/* Countdown Display */}
      <div className="grid grid-cols-4 gap-1 sm:gap-4 max-w-sm sm:max-w-md">
        {timeUnits.map((unit, index) => (
          <div
            key={unit.label}
            className="text-center p-2 sm:p-4 rounded-lg sm:rounded-xl border border-white/10"
            style={{ backgroundColor: "#000000" }}
          >
            <div
              className="text-lg sm:text-3xl font-bold mb-1"
              style={{
                color: "#FFDA35",
                fontFamily:
                  "NeuePower, -apple-system, BlinkMacSystemFont, sans-serif",
              }}
            >
              {unit.value.toString().padStart(2, "0")}
            </div>
            <div
              className="text-xs uppercase tracking-tight sm:tracking-wider font-medium opacity-70 leading-tight"
              style={{ color: "#D9D9D9" }}
            >
              {unit.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
