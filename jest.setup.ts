// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect'

// until https://github.com/facebook/react/pull/20087 is fixed 
// we need to override muted on video to prevent error `unstable_flushDiscreteUpdates: Cannot flush updates when React is already rendering.`
Object.defineProperty(HTMLMediaElement.prototype, 'muted', {
  set: () => {},
});