/// <reference types="next" />
/// <reference types="next/image-types/global" />

import type { ThemeType } from './components/base/theme/theme'

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends ThemeType {}
}

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.
