/* eslint-disable import/named */
'use client';
import * as React from 'react';
import clsx from 'clsx';
import {
  Slider as BaseSlider,
  SliderProps,
  SliderOwnerState,
} from '@mui/base/Slider';

export const Slider = React.forwardRef(function Slider(
  props: SliderProps,
  ref: React.ForwardedRef<HTMLElement>,
) {
  const {
    slotProps = {
      root: {},
      rail: {},
      track: {},
      thumb: {},
      mark: {},
      markLabel: {},
      valueLabel: {},
    },
    ...rest
  } = props;
  return (
    <BaseSlider
      {...rest}
      slotProps={{
        root: (ownerState: SliderOwnerState) => ({
          ...slotProps.root,
          className: clsx(
            'text-blue-500 h-1.5  py-4 w-full inline-block relative cursor-pointer touch-none top-[-1px] hover:opacity-100',
            ownerState.disabled &&
              'pointer-events-none cursor-default text-gray-300 opacity-50',
          ),
        }),
        rail: {
          ...slotProps.rail,
          className:
            'block absolute w-full h-1.5 rounded-full bg-gray-700 opacity-40',
        },
        track: {
          ...slotProps.track,
          className: 'block absolute h-1.5 rounded-full bg-current',
        },
        thumb: {
          ...slotProps.thumb,
          className:
            'absolute w-5 h-5 ml-[-8px] mt-[-7.5px] box-border rounded-[50%] outline-0 bg-white',
          // TODO: add hover/focusVisible/active box-shadow
        },
        // TODO: where does markActive go?
        mark: {
          ...slotProps.mark,
          className: 'absolute w-1 h-1 rounded-sm bg-current top-2/4 opacity-0',
        },
        markLabel: {
          ...slotProps.markLabel,
          className:
            'text-[10px] font-extrabold uppercase text-gray-300 absolute top-5 mt-2 data-[index="1"]:translate-x-[-100%]',
        },
      }}
      ref={ref}
    />
  );
});
