const API_URL = import.meta.env.VITE_API_URL as string;

export const getInterests = async (): Promise<string[]> => {
  const result: string[] = (await (
    await fetch(`${API_URL}/api/interests`)
  ).json()) as string[];
  return result;
};
