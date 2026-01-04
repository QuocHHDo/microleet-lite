export interface PyodideInterface {
  runPythonAsync: (code: string) => Promise<any>;
  loadPackagesFromImports: (code: string) => Promise<void>;
  setStdout?: (config: { batched: (output: string) => void }) => void;
  globals: any;
}

declare global {
  interface Window {
    pyodide?: PyodideInterface;
    loadPyodide: (config: {
      indexURL: string;
      stdout?: (stdout: string) => void;
      stderr?: (stderr: string) => void;
    }) => Promise<PyodideInterface>;
  }
}

export {};
