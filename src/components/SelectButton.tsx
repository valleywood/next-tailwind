/* eslint-disable import/named */
'use client';
import * as React from 'react';
import { SelectRootSlotProps } from '@mui/base/Select';

export const SelectButton = React.forwardRef(function SelectButton<
  TValue extends {},
  Multiple extends boolean,
>(
  props: SelectRootSlotProps<TValue, Multiple>,
  ref: React.ForwardedRef<HTMLButtonElement>,
) {
  const { ownerState, ...other } = props;
  return (
    <button type="button" {...other} ref={ref}>
      {other.children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="absolute right-1 top-0 h-full text-base"
      >
        <path d="m7 10 5 5 5-5H7z" />
      </svg>
    </button>
  );
});
