export interface CodeBlockProps extends React.HTMLAttributes<HTMLElement> {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export enum TopicName {
  Arrays = 'arrays',
  Strings = 'strings',
  Dictionaries = 'dictionaries',
  Tuples = 'duples',
  Set = 'sets',
  LinkedLists = 'linkedLists',
  Stacks = 'stacks',
  Queues = 'queues',
  Heaps = 'heaps',
  Trees = 'trees',
  Tries = 'tries',
  Graphs = 'graphs',
}
