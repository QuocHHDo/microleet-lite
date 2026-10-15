import { WORKER_SOURCE } from '../jsRunner';

/** Test helper: a Worker stand-in that runs the real worker script in-process. `hang` never replies. */
export function fakeWorker(hang = false) {
  return () => {
    const self: any = { postMessage: (data: any) => w.onmessage?.({ data }) };
    new Function('self', WORKER_SOURCE)(self);
    const w: any = {
      onmessage: null,
      onerror: null,
      terminate: jest.fn(),
      postMessage: (data: any) => {
        if (!hang) self.onmessage({ data });
      },
    };
    return w;
  };
}
