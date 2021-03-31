import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { searchField, wishList } from '../../utils/selectors';
import ListItem from './ListItem';

const ListItems = () => {
  const searchFieldData = useSelector(searchField);
  const wishListData = useSelector(wishList);
  const { isLoading } = useSelector((state: any) => state.AppReducer);

  return (
    <Row>
      <Col>
        {isLoading && <span>... Loading</span>}
        {searchFieldData &&
          searchFieldData.length &&
          searchFieldData.map((item: any, index: number) => (
            <div key={index.toString()}>
              <ListItem
                title={item.volumeInfo.title}
                authors={item.volumeInfo.authors}
                thumbNail={item.volumeInfo.imageLinks.smallThumbnail}
                description={item.volumeInfo.description}
                idHash={item.id}
                wishListIdHash={wishListData}
              />
            </div>
          ))}
      </Col>
    </Row>
  );
};

export default ListItems;
