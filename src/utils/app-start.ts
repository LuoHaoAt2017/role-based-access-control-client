import { GetUserInfo } from '../apis';
import urlparser from 'urlparser';
export async function AppStart() {
  const url = urlparser.parse(window.location.href, true);
  if (url.query && url.query.uid) {
    const userId = url.query.uid;
    const resp: any = await GetUserInfo(userId);
    if (resp.successful) {
      return resp.data.userInfo;
    }
  }
  return;
}