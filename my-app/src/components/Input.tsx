import React, { ChangeEvent, FocusEvent } from 'react';
import styled, { css } from 'styled-components';

const StyledInput = styled.input<{ $hasError?: boolean }>`
  border: 1px solid #d0d6da;
  border-radius: 4px;
  box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.1);
  font-size: 17px;
  height: 54px;
  width: 100%;
  text-overflow: ellipsis;
  outline: none;
  text-align: center;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    box-shadow: inset 0 0 2px #005285;
    border-color: #005285;
  }

  ${({ $hasError }) =>
    $hasError &&
    css`
      box-shadow: inset 0 0 2px #ba0d23;
      border: 1px solid #ba0d23;
    `}
`;

interface IProps {
  name: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder?: string;
  onFocus?: () => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  readOnly?: boolean;
  hasError?: boolean;
  type?: string;
}

const Input = ({ name, onChange, value, placeholder, onFocus, readOnly, hasError, onClick, onBlur, type }: IProps) => (
  <StyledInput
    placeholder={placeholder}
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    onClick={onClick}
    value={value}
    name={name}
    id={name}
    data-testid={`input-${name}`}
    autoComplete="on"
    readOnly={readOnly}
    $hasError={hasError}
    type={type}
  />
);

Input.defaultProps = {
  onChange: undefined,
  onFocus: undefined,
  onClick: undefined,
  value: undefined,
  placeholder: undefined,
  readOnly: false,
  hasError: false,
  onBlur: undefined,
  type: undefined,
};

export default Input;
