import Taro from '@tarojs/taro'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Text, View } from '@tarojs/components'

import AtComponent from '../../common/component'

export default class AtIcon extends AtComponent {
  static defaultProps = {
    customStyle: '',
    className: '',
    prefixClass: 'at-icon',
    value: '',
    color: '',
    size: 24,
    onClick: () => { },
  }

  static propTypes = {
    customStyle: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string
    ]),
    className: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.string
    ]),
    prefixClass: PropTypes.string,
    value: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    onClick: PropTypes.func,
  }

  constructor () {
    super(...arguments)
    if (process.env.NODE_ENV === 'test') {
      Taro.initPxTransform({ designWidth: 750 })
    }
  }

  handleClick () {
    this.props.onClick(...arguments)
  }

  render () {
    const {
      customStyle,
      className,
      prefixClass,
      value,
      size,
      color
    } = this.props

    const rootStyle = {
      // fontSize: `${Taro.pxTransform(parseInt(size) * 2)}`,
      fontSize: `${parseInt(size)}px`,
      color
    }
    const icon = `${prefixClass}-${value}`
    const a = 'at-icon'
    const b = 'at-icon-clock'
    console.error('rootStyle', prefixClass, icon, className)
    // const classObject = classnames({
    //   [prefixClass]: true,
    //   [icon]: true,
    //   [className]: true,
    // })
    return (
      <View
        // className={classnames(a, b)}
        className={classnames(prefixClass, icon, className)}
        // className={classObject}
        style={this.mergeStyle(rootStyle, customStyle)}
        onClick={this.handleClick.bind(this)}
      >
      </View>
    )
  }
}
