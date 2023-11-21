/* eslint-disable import/named */
'use client';
import * as React from 'react';
import clsx from 'clsx';
import {
  Select as BaseSelect,
  SelectProps,
  SelectOwnerState,
} from '@mui/base/Select';

import { SelectButton } from './SelectButton';

export const Select = React.forwardRef(function Select<
  TValue extends {},
  Multiple extends boolean,
>(
  props: SelectProps<TValue, Multiple>,
  ref: React.ForwardedRef<HTMLButtonElement>,
) {
  const {
    slotProps = {
      root: {},
      listbox: {},
      popper: {},
    },
    ...rest
  } = props;
  return (
    <BaseSelect
      {...rest}
      ref={ref}
      slots={{
        root: SelectButton,
        ...props.slots,
      }}
      slotProps={{
        root: (ownerState: SelectOwnerState<string, false>) => ({
          ...slotProps.root,
          className: clsx(
            'text-gray-300 box-border text-sm min-width-[72px] py-2 px-3 rounded-sm text-left leading-normal bg-gray-900 border-[0] font-medium relative hover:bg-gray-400 hover:text-gray-900',
            ownerState.focusVisible &&
              'border-blue-400 outline-[3px] outline-solid outline-blue-200',
          ),
        }),
        listbox: {
          ...slotProps.listbox,
          className:
            'text-lg box-border p-0 mb-3 rounded-sm overflow-auto outline-0 bg-[rgb(14,20,27)] border border-solid border-gray-700 text-gray-300 shadow-[0_1px_2px_#a0aab4] max-h-[240px]',
        },
        popper: {
          ...slotProps.popper,
          className: 'z-[1]',
        },
      }}
    />
  );
});
