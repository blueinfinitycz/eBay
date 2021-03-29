import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { retrieveData } from '../../redux/actions';
import { ISearch } from '../../types/searchField';
import Button from '../Button';
import Input from '../Input';

const SearchField = () => {
  const dispatch = useDispatch();
  const initialValues = { search: '' };
  const onSubmit = (values: ISearch) => {
    dispatch(retrieveData(values));
  };
  const validationSchema = Yup.object({ search: Yup.string().required('Vyplňte název knihy') });
  const handleChangeSchema = (e: any) => {
    dispatch(retrieveData({ search: e }));
  };

  return (
    <>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <Row lg={6} className="justify-content-center">
            <Col lg={8}>
              <Field type="text" as={Input} id="search" name="search" setFieldValue={true} validate={handleChangeSchema} />
              <ErrorMessage
                name="search"
                component={(props) => <span style={{ fontSize: '17px', color: 'white', margin: '0', padding: '0', textAlign: 'center' }}>{props.children}</span>}
              />
            </Col>
            <Col>
              <Button type="submit" size="lg" loading={false}>
                Vyhledat
              </Button>
            </Col>
          </Row>
        </Form>
      </Formik>
    </>
  );
};

export default SearchField;
