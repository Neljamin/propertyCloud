import React from 'react';
import classNames from 'classnames';

import './Button.scss';
import { Icon } from '../../presentational';

const Button = ({
    children,
    className,
    underlined,
    bold,
    iconProps,
    fill,
    rounded,
    rowReverse,
    inline,
    large
}) => {
    const buttonClasses = [
        'button',
        className,
        underlined && 'button--underlined',
        bold && 'button--bold',
        fill && `button--fill-${fill}`,
        rounded && 'button--rounded',
        rowReverse && 'button--row-reverse',
        inline && 'button--inline',
        large && 'button--large'
    ];

    return (
        <button className={classNames(...buttonClasses)}>
            {iconProps && <Icon className='button__icon' {...iconProps} />}
            <div className='button__children'>
                {children}
            </div>
        </button>
    );
};

export default Button;