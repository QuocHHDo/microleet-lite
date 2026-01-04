export interface CodeBlockProps extends React.HTMLAttributes<HTMLElement> {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export enum TopicName {
  Arrays = 'arrays',
  Strings = 'strings',
  HashMaps = 'hash-maps',
  HashSets = 'hash-sets',
  LinkedLists = 'linkedLists',
  Stacks = 'stacks',
  Queues = 'queues',
  Heaps = 'heaps',
  Trees = 'trees',
  Tries = 'tries',
  Graphs = 'graphs',
  UnionFind = 'union-find',
  DynamicProgramming = 'dynamic-programming',
}
