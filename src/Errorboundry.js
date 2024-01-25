import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true,
            error,
            errorInfo
        });
        console.log(error);
        // window.location.href = '/';
    }

    render() {
        if (this.state.errorInfo) { return <></>; }
        return this.props.children;
    }
}

export default ErrorBoundary;

