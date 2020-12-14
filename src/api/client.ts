
const createDelayPromise = (delay: number, data: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  })
}

export const get = (url: string = ''): Promise<any> => {
  return createDelayPromise(100, {
    posts: []
  });
};

export const post = (url: string = '', data: any = {}): Promise<any> => {
  return createDelayPromise(100, {
    post: data
  });
}