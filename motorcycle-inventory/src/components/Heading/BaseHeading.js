import React from 'react'
import PropTypes from 'prop-types'
import { Heading } from 'rebass'

const BaseHeading = ({ children, ...rest}) =>
    <Heading {...rest}>
        { children }
    </Heading>

BaseHeading.protoTypes = {
    children: PropTypes.node.isRequired
}

export { BaseHeading }