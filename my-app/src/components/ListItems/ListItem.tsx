import React, { useEffect, useLayoutEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import useBoolean from '../../hooks/useBoolean';
import usePerex from '../../hooks/usePerex';
import { addDataToWishList } from '../../redux/actions';
import Button from '../Button';

const ListItemContainer = styled.section`
  background-color: white;
  border-radius: 15px;
  margin: 10px 0;
  padding: 15px;
  .title {
    font-size: 15px;
    margin: 0;
  }
  .authors {
    width: 100%;
    font-size: 13px;
    margin: 10px 0;
    padding: 0;
    li {
      font-weight: bold;
      display: inline-block;
      margin: 0 10px;
    }
  }
  .img__container {
    position: relative;
    width: 95px;
    height: 95px;
    overflow: hidden;
    border-radius: 15px;

    img {
      width: 108px;
      height: 148px;
      position: absolute;
    }
  }
  .description {
    font-size: 11px;
    display: inline-block;
  }
`;

interface IItemWish {
  name: string;
  id: string;
}

interface IWishButton {
  data: { name: string; id: string; wishListIdHash: Array<IItemWish> };
}

const AddToWishListButton = ({ data }: IWishButton) => {
  const isEquivalent = (arr: Array<IItemWish>, value: string) => {
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i].id.toString() === value.toString()) {
        return true;
      }
    }
    return false;
  };

  const { value, setTrue, setValue } = useBoolean(false);
  const btLabel = !value ? 'Add to Wishlist' : 'Added to Wishlist';

  useEffect(() => {
    setValue(isEquivalent(data.wishListIdHash, data.id));
  }, [data]);

  const dispatch = useDispatch();
  const onClickBtn = () => {
    if (!value) {
      dispatch(addDataToWishList(data));
      setTrue();
    }
  };

  return (
    <>
      <Button onClick={onClickBtn} disabled={value} size="xs" primary={true}>
        {btLabel}
      </Button>
    </>
  );
};

interface IItem {
  title: string;
  authors: string[];
  thumbNail: string;
  description: string;
  idHash: string;
  wishListIdHash: Array<IItemWish>;
}

interface IDescr {
  description: string;
  data: { name: string; id: string; wishListIdHash: Array<IItemWish> };
}

const Description = ({ description, data }: IDescr) => {
  const perex = usePerex(description);
  const boolState = useBoolean(true);
  useEffect(() => {
    if (boolState.value) {
      perex.setPartOfPerex();
    } else {
      perex.setWholePerex();
    }
  }, [boolState.value]);

  useLayoutEffect(() => {
    perex.setPartOfPerex();
  }, []);

  const onClick = () => {
    boolState.toggle();
  };

  return (
    <>
      <p className="description">{perex.value}</p>
      <span style={{ marginRight: '20px' }}>
        <Button onClick={onClick} type="button" primary={true} size="xs">
          {boolState.value ? 'More info' : 'Less Info'}
        </Button>
      </span>
      <span>
        <AddToWishListButton data={data} />
      </span>
    </>
  );
};

const ListItem = ({ title, authors, thumbNail, description, idHash, wishListIdHash }: IItem) => {
  return (
    <ListItemContainer>
      <Row>
        <Col xs={2}>
          <div className="img__container">
            <img src={thumbNail} alt={title} />
          </div>
          ID: <span style={{ fontSize: '8px' }}>{idHash}</span>
        </Col>
        <Col>
          <h3 className="title">{title}</h3>
          <ul className="authors">
            Authors:
            {authors && authors.map((item: any, index: number) => <li key={index.toString()}>{item}</li>)}
          </ul>
          <Description data={{ name: title, id: idHash, wishListIdHash }} description={description} />
        </Col>
      </Row>
    </ListItemContainer>
  );
};

export default ListItem;
