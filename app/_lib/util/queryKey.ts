export const getQueryKey = (key: string) => {
  const queryKey = {
    all: [key] as const,
    lists: () => [...queryKey.all, 'list'] as const,
    list: (item: string) => [...queryKey.lists(), item] as const,
    details: () => [...queryKey.all, 'detail'] as const,
    detail: (item: string) => [...queryKey.details(), item] as const,
  };

  return queryKey;
};
