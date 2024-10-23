export interface Operation {
    name: string;
    complexity: string;
    explanation: string;
  }
  
  export const generateTimeComplexityTable = (
    operations: Operation[],
  ): string => {
    const nameWidth = Math.max(25, ...operations.map((op) => op.name.length));
    const complexityWidth = Math.max(
      16,
      ...operations.map((op) => op.complexity.length),
    );
    const explanationWidth = Math.max(
      12,
      ...operations.map((op) => op.explanation.length),
    );
  
    const header = `| ${pad('Operation', nameWidth)} | ${pad('Time Complexity', complexityWidth)} | ${pad('Explanation', explanationWidth)} |\n`;
  
    const separator = `|${'-'.repeat(nameWidth + 2)}|${'-'.repeat(complexityWidth + 2)}|${'-'.repeat(explanationWidth + 2)}|\n`;
  
    const rows = operations
      .map(
        (op) =>
          `| ${pad(op.name, nameWidth)} | ${pad(op.complexity, complexityWidth)} | ${pad(op.explanation, explanationWidth)} |\n`,
      )
      .join('');
  
    return header + separator + rows;
  };
  
  const pad = (str: string, width: number): string => {
    return str + ' '.repeat(Math.max(0, width - str.length));
  };