const settings = [
    { retries: 0, maxRetries: null },
    { retries: 3, maxRetries: 5 },
    { retries: null, maxRetries: undefined }
  ];
  
  settings.forEach((setting) => {
    setting.retries ??= 1;       // Default retries to 1 if null/undefined
    setting.maxRetries ||= 10;   // Default maxRetries to 10 if falsy
  });
  
  console.log(settings);
  /* Output:
  [
    { retries: 0, maxRetries: 10 },
    { retries: 3, maxRetries: 5 },
    { retries: 1, maxRetries: 10 }
  ]
  */
  