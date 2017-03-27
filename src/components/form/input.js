import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';

/**
 * WeUI Input wrapper for `input`
 *
 */
export default class Input extends React.Component {
    focus() {
        this.textInput.focus();
    }

    render() {
        const { className, ...others } = this.props;
        const cls = classNames({
            'weui-input': true,
            [className]: className
        });

        return (
            <div>
                <input
                    ref={(input) => { this.textInput = input; }}
                    className={cls}
                    {...others}
                />
                <span className="weui-icon-checked"></span>
            </div>
        );
    }
};

Input.propTypes = {
    defaultValue: PropTypes.string
};

Input.defaultProps = {
    defaultValue: undefined
};
