import { Path, PathBuilder, PathTree } from 'app/utils/routes';

export const paths = ((slug: string) => {
  const path = new Path(`/anime/${slug}`);

  return new PathTree(path, {
    episodes: () => new Path(`${path}/episodes`),
    episode: (number: string) => new Path(`${path}/episodes/${number}`),
    characters: () => new Path(`${path}/characters`),
    staff: () => new Path(`${path}/staff`),
    reactions: () => new Path(`${path}/reactions`),
    franchise: () => new Path(`${path}/franchise`),
    quotes: () => new Path(`${path}/quotes`),
    quote: (id: string) => new Path(`${path}/quotes/${id}`),
  });
}) satisfies PathBuilder;
