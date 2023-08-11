export default {
    authorize: () => 'token',
    isAuthorized: (secret: string | number) => secret === 'wizard',
  };