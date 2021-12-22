import { GetUserInfo } from '../apis';
import urlparser from 'url-parse';
export async function AppStart() {
  const url = urlparser(window.location.href, true);
  if (url.query.uid) {
    const resp: any = await GetUserInfo(url.query.uid);
    if (resp.successful) {
      return resp.data;
    }
  }
  return;
}