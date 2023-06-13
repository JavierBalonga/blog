"use client";

export interface ErrorComponentProps {
  error: unknown;
  reset: () => void;
}

export default function ErrorComponent({ error, reset }: ErrorComponentProps) {
  if (error instanceof Error) {
    return (
      <div>
        <h2>Something went wrong!</h2>
        <p>{error.message}</p>
        <button onClick={() => reset()}>Try again</button>
      </div>
    );
  }

  console.error(error);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
