import { CanActivateFn } from '@angular/router';

export const ibmGuard: CanActivateFn = (route, state) => {
  return true;
};
