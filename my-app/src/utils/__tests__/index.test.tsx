import { getJson } from '../promise';

test('promise - get json:', async () => {
  const mockupServerURL = 'https://43d8b06b-558c-4c06-8247-7f7e9bb214f3.mock.pstmn.io/ebay/books;';
  getJson(mockupServerURL).then((e: any) => expect(e).toBeFalsy());
});
