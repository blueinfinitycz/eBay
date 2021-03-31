import { LoadingOutlined } from '@ant-design/icons';
import React from 'react';
import styled, { css } from 'styled-components';

interface IProps {
  className?: string;
  type?: 'button' | 'submit';
  children?: string;
  onClick?: () => void;
  primary?: boolean;
  secondary?: boolean;
  loading?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

const SButton = styled.button<{ $primary?: boolean; $secondary?: boolean; $loading?: boolean; $size?: string; $disabled?: boolean }>`
  font-family: Roboto Medium;
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 5px;
  border: none;
  box-shadow: 0 1px 3px rgba(0, 82, 133, 0.2);
  color: #005285;
  background-color: #ffffff;
  cursor: pointer;
  padding: 15px 25px;

  ${({ $disabled }) =>
    $disabled &&
    css`
      cursor: no-drop !important;
      opacity: 0.4;
    `}

  ${({ $primary }) =>
    $primary &&
    css`
      color: #ffffff;
      background-color: #62c7b6;
      font-weight: normal;
    `}

  ${({ $secondary }) =>
    $secondary &&
    css`
      color: #ffffff;
      background-color: #7ef1ff;
      font-weight: bold;
    `}

  ${({ $loading }) =>
    $loading &&
    css`
      opacity: 0.8;
    `}

    
  ${({ $size }) => {
    switch ($size) {
      case 'xs':
        return css`
          font-size: 10px;
          padding: 7px 10px;
        `;
      case 'sm':
        return css`
          padding: 5px 15px;
        `;
      case 'md':
        return css`
          padding: 10px 20px;
        `;
      case 'lg':
        return css`
          padding: 15px 25px;
        `;
      default:
        return css`
          padding: 10px 20px;
        `;
    }
  }}
`;

const LoadingIcon = styled(LoadingOutlined)`
  margin-right: 1em;
`;

const Button = ({ type, className, children, onClick, primary, secondary, loading, size, disabled }: IProps): JSX.Element => (
  <SButton
    type={type === 'submit' ? 'submit' : 'button'}
    className={className}
    onClick={onClick}
    $loading={loading}
    $primary={primary}
    $secondary={secondary}
    $size={size}
    $disabled={disabled}
  >
    {loading && <LoadingIcon spin={true} />}
    {children}
  </SButton>
);

Button.defaultProps = {
  children: undefined,
  className: undefined,
  onClick: undefined,
  primary: false,
  secondary: false,
  loading: false,
  type: 'button',
  size: 'md',
  disabled: false,
};

export default Button;
