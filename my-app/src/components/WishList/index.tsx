import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { removeFromWishList } from '../../redux/actions';
import { IItem } from '../../redux/wishListReducer';
import { wishList } from '../../utils/selectors';

const WishListContainer = styled.section`
  border-radius: 15px;
  background-color: white;
  padding: 0 0 20px;
  .title {
    padding: 20px;
    background-color: #005285;
    color: white;
    font-size: 17px;
    text-align: center;
  }
`;

const TmpWishListItem = styled.div`
  border-radius: 15px;
  background-color: white;
  padding: 10px;
  text-align: center;
  margin: 10px 0;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.09);
  button {
    border: none;
    background: transparent;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }
  span {
    font-weight: bolder;
  }
`;

const WishListItem = ({ name, id }: IItem) => {
  const dispatch = useDispatch();
  const onClick = (e: any) => {
    const idItem = e.currentTarget.getAttribute('id');
    dispatch(removeFromWishList(idItem));
  };

  return (
    <TmpWishListItem>
      <button type="button" onClick={onClick} id={id.toString()}>
        {name} <span>X</span>
      </button>
    </TmpWishListItem>
  );
};

const WishList = () => {
  const dispatch = useDispatch();
  const wishListData = useSelector(wishList);

  const onClickItem = (idItem: number) => {
    dispatch(removeFromWishList(idItem));
  };
  return (
    <WishListContainer>
      <h3 className="title">Wish list</h3>
      {wishListData && wishListData.map(({ name, id }: IItem, idx: number) => <WishListItem name={name} id={id} key={idx.toString()} />)}
    </WishListContainer>
  );
};

export default WishList;
