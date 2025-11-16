export type ZodError = {
  path: string[];
  message: string;
};

export const SendError = (errors: ZodError[]) => {
  const formatError: any = {};
  errors.forEach((error: ZodError) => {
    const key = error.path[0];
    const message = error.message;
    formatError[key] = message;
  });
  return formatError;
};
