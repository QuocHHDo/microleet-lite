export interface CheatSheet {
  cheatSheet: CheatSheetItem[];
}
export enum OperationTypes {
  Create = 'create',
  Add = 'add',
  Remove = 'remove',
  Access = 'access',
  Modify = 'modify',
  Search = 'search',
  Utility = 'utility',
}
export interface CheatSheetItem {
  label: string;
  code: string;
  explanation: string;
  type: string;
  timeComplexity?: string;
  edgeCase?: string;
}

export const createCheatSheet = (
  label: string,
  code: string,
  explanation: string,
  type: string,
  timeComplexity: string,
  edgeCase: string,
): CheatSheetItem => {
  return {
    label,
    code,
    explanation,
    type,
    timeComplexity,
    edgeCase,
  };
};
