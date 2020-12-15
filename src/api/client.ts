
export const callRemote = <T>(delay: number, data: T): Promise<T> => {
  return new Promise(resolve => setTimeout(() => resolve(data), delay));
};