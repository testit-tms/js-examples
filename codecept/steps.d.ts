/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type AdapterHelper = import("testit-adapter-codecept/build/helper").TestMetadataHelper;

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any }
  interface Methods extends Playwright, AdapterHelper {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
