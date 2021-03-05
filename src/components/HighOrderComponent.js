import React, { Component } from 'react';
class HighOrderComponent extends Component {
    render() {
        const { t } = this.props;

        return (
            <h1>{t('welcome.title')}</h1>
        )
    }
}
//const HighOrderComponentTranslated = withTranslation('common')(HighOrderComponent)