/// <reference types="react-scripts" />
declare module "*.mp4" {
    const src: string;
    export default src;
  }

  declare module 'aos' {
    interface AosOptions {
        offset?: number;
        delay?: number;
        duration?: number;
        easing?: string;
        once?: boolean;
        mirror?: boolean;
        anchorPlacement?: string;
    }

    declare module Aos {
        function init(options?: AosOptions): void;
        function refresh(): void;
        function refreshHard(): void;
    }

    export default Aos;
}

  