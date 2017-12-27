// @flow

export type Show = {
  title: string,
  description: string,
  year: string,
  idmbID: string,
  poster: string,
  trailer: string
};

declare var module: {
  hot: {
    accept(path: string, callback: () => void): void
  }
};
