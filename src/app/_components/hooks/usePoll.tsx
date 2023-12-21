"use client";

import { useState } from "react";

interface Option {
  text: string;
  votes: number;
}

export function usePoll(initialOptions: Option[] | (() => Option[])) {
  const [options, setOptions] = useState<Option[]>(initialOptions);

  const totalVotes = options.reduce((total, option) => total + option.votes, 0);

  const votePercentages = options.map((option) => ({
    ...option,
    percentage:
      totalVotes === 0
        ? 0
        : parseInt(((option.votes / totalVotes) * 100).toFixed(2)),
  }));

  return { options: votePercentages, setOptions };
}
