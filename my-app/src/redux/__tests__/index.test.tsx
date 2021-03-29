import WishListReducer from '../wishListReducer';

test('wishlist reducer: should return init state', () => {
  expect(WishListReducer(undefined, { type: '', payload: { name: '', id: '' } })).toBeTruthy();
});
