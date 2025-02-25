exports['darwin browser detection detects browsers as expected 1'] = [
  {
    'name': 'chrome',
    'family': 'chromium',
    'channel': 'stable',
    'displayName': 'Chrome',
    'versionRegex': {},
    'binary': [
      'google-chrome',
      'chrome',
      'google-chrome-stable',
    ],
    'path': '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    'version': 'someVersion',
    'findAppParams': {
      'appName': 'Google Chrome.app',
      'executable': 'Contents/MacOS/Google Chrome',
      'bundleId': 'com.google.Chrome',
      'versionProperty': 'KSVersion',
    },
  },
  {
    'name': 'chrome',
    'family': 'chromium',
    'channel': 'beta',
    'displayName': 'Chrome Beta',
    'versionRegex': {},
    'binary': 'google-chrome-beta',
    'path': '/Applications/Google Chrome Beta.app/Contents/MacOS/Google Chrome Beta',
    'version': 'someVersion',
    'findAppParams': {
      'appName': 'Google Chrome Beta.app',
      'executable': 'Contents/MacOS/Google Chrome Beta',
      'bundleId': 'com.google.Chrome.beta',
      'versionProperty': 'KSVersion',
    },
  },
  {
    'name': 'chrome',
    'family': 'chromium',
    'channel': 'canary',
    'displayName': 'Chrome Canary',
    'versionRegex': {},
    'binary': 'google-chrome-canary',
    'path': '/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary',
    'version': 'someVersion',
    'findAppParams': {
      'appName': 'Google Chrome Canary.app',
      'executable': 'Contents/MacOS/Google Chrome Canary',
      'bundleId': 'com.google.Chrome.canary',
      'versionProperty': 'KSVersion',
    },
  },
  {
    'name': 'chrome-for-testing',
    'family': 'chromium',
    'channel': 'stable',
    'displayName': 'Chrome for Testing',
    'versionRegex': {},
    'binary': 'chrome',
    'path': '/Applications/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing',
    'version': 'someVersion',
    'findAppParams': {
      'appName': 'Google Chrome for Testing.app',
      'executable': 'Contents/MacOS/Google Chrome for Testing',
      'bundleId': 'com.google.chrome.for.testing',
      'versionProperty': 'CFBundleShortVersionString',
    },
  },
  {
    'name': 'chromium',
    'family': 'chromium',
    'channel': 'stable',
    'displayName': 'Chromium',
    'versionRegex': {},
    'binary': [
      'chromium-browser',
      'chromium',
    ],
    'path': '/Applications/Chromium.app/Contents/MacOS/Chromium',
    'version': 'someVersion',
    'findAppParams': {
      'appName': 'Chromium.app',
      'executable': 'Contents/MacOS/Chromium',
      'bundleId': 'org.chromium.Chromium',
      'versionProperty': 'CFBundleShortVersionString',
    },
  },
  {
    'name': 'firefox',
    'family': 'firefox',
    'channel': 'stable',
    'displayName': 'Firefox',
    'versionRegex': {},
    'binary': 'firefox',
    'path': '/Applications/Firefox.app/Contents/MacOS/firefox',
    'version': 'someVersion',
    'findAppParams': {
      'appName': 'Firefox.app',
      'executable': 'Contents/MacOS/firefox',
      'bundleId': 'org.mozilla.firefox',
      'versionProperty': 'CFBundleShortVersionString',
    },
  },
  {
    'name': 'firefox',
    'family': 'firefox',
    'channel': 'dev',
    'displayName': 'Firefox Developer Edition',
    'versionRegex': {},
    'binary': [
      'firefox-developer-edition',
      'firefox',
    ],
    'path': '/Applications/Firefox Developer Edition.app/Contents/MacOS/firefox',
    'version': 'someVersion',
    'findAppParams': {
      'appName': 'Firefox Developer Edition.app',
      'executable': 'Contents/MacOS/firefox',
      'bundleId': 'org.mozilla.firefoxdeveloperedition',
      'versionProperty': 'CFBundleShortVersionString',
    },
  },
  {
    'name': 'firefox',
    'family': 'firefox',
    'channel': 'nightly',
    'displayName': 'Firefox Nightly',
    'versionRegex': {},
    'binary': [
      'firefox-nightly',
      'firefox-trunk',
    ],
    'path': '/Applications/Firefox Nightly.app/Contents/MacOS/firefox',
    'version': 'someVersion',
    'findAppParams': {
      'appName': 'Firefox Nightly.app',
      'executable': 'Contents/MacOS/firefox',
      'bundleId': 'org.mozilla.nightly',
      'versionProperty': 'CFBundleShortVersionString',
    },
  },
  {
    'name': 'edge',
    'family': 'chromium',
    'channel': 'stable',
    'displayName': 'Edge',
    'versionRegex': {},
    'binary': [
      'edge',
      'microsoft-edge',
    ],
    'path': '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
    'version': 'someVersion',
    'findAppParams': {
      'appName': 'Microsoft Edge.app',
      'executable': 'Contents/MacOS/Microsoft Edge',
      'bundleId': 'com.microsoft.Edge',
      'versionProperty': 'CFBundleShortVersionString',
    },
  },
  {
    'name': 'edge',
    'family': 'chromium',
    'channel': 'beta',
    'displayName': 'Edge Beta',
    'versionRegex': {},
    'binary': [
      'edge-beta',
      'microsoft-edge-beta',
    ],
    'path': '/Applications/Microsoft Edge Beta.app/Contents/MacOS/Microsoft Edge Beta',
    'version': 'someVersion',
    'findAppParams': {
      'appName': 'Microsoft Edge Beta.app',
      'executable': 'Contents/MacOS/Microsoft Edge Beta',
      'bundleId': 'com.microsoft.Edge.Beta',
      'versionProperty': 'CFBundleShortVersionString',
    },
  },
  {
    'name': 'edge',
    'family': 'chromium',
    'channel': 'canary',
    'displayName': 'Edge Canary',
    'versionRegex': {},
    'binary': [
      'edge-canary',
      'microsoft-edge-canary',
    ],
    'path': '/Applications/Microsoft Edge Canary.app/Contents/MacOS/Microsoft Edge Canary',
    'version': 'someVersion',
    'findAppParams': {
      'appName': 'Microsoft Edge Canary.app',
      'executable': 'Contents/MacOS/Microsoft Edge Canary',
      'bundleId': 'com.microsoft.Edge.Canary',
      'versionProperty': 'CFBundleShortVersionString',
    },
  },
  {
    'name': 'edge',
    'family': 'chromium',
    'channel': 'dev',
    'displayName': 'Edge Dev',
    'versionRegex': {},
    'binary': [
      'edge-dev',
      'microsoft-edge-dev',
    ],
    'path': '/Applications/Microsoft Edge Dev.app/Contents/MacOS/Microsoft Edge Dev',
    'version': 'someVersion',
    'findAppParams': {
      'appName': 'Microsoft Edge Dev.app',
      'executable': 'Contents/MacOS/Microsoft Edge Dev',
      'bundleId': 'com.microsoft.Edge.Dev',
      'versionProperty': 'CFBundleShortVersionString',
    },
  },
]
