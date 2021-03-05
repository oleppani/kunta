import React from 'react'
import {useTranslation} from "react-i18next"

const Termsofuse = () => {
  // eslint-disable-next-line
  const [t, i18n] = useTranslation('common')
  return (
  <div> 
    
    <h2>{t('termsofuse.header')}</h2> 
    <div>
    {t('termsofuse.text')}
      <h3>{t('termsofuse.rulesheader')}</h3>{t('termsofuse.rulestext')}
      <h3>{t('termsofuse.contractingpartiesheader')}</h3>{t('termsofuse.contractingpartiestext')}
      <h3>{t('termsofuse.personalinformationheader')}</h3>{t('termsofuse.personalinformationtext')}
      <h3>{t('termsofuse.registrationheader')}</h3>{t('termsofuse.registrationtext')}
      <h3>{t('termsofuse.userauthenticationheader')}</h3>{t('termsofuse.userauthenticationtext')}
      <h3>{t('termsofuse.servicesheader')}</h3>{t('termsofuse.servicestext')}
      <h3>{t('termsofuse.submittedmaterialheader')}</h3>{t('termsofuse.submittedmaterialtext')}
      <h3>{t('termsofuse.privacyheader')}</h3>{t('termsofuse.privacytext')}
      <h3>{t('termsofuse.cookiesheader')}</h3>{t('termsofuse.cookiestext')}
      <h3>{t('termsofuse.pricesheader')}</h3>{t('termsofuse.pricestext')}
      <h3>{t('termsofuse.usingservicesheader')}</h3>{t('termsofuse.usingservicestext')}
      <h3>{t('termsofuse.availabilityheader')}</h3>{t('termsofuse.availabilitytext')}
      <h3>{t('termsofuse.intellectualpropertyrightsheader')}</h3>{t('termsofuse.intellectualpropertyrightstext')}
      <h3>{t('termsofuse.validityandterminationheader')}</h3>{t('termsofuse.validityandterminationtext')}
      <h3>{t('termsofuse.responsibilitiesheader')}</h3>{t('termsofuse.responsibilitiestext')}
      <h3>{t('termsofuse.transferofcontractheader')}</h3>{t('termsofuse.transferofcontracttext')}
      <h3>{t('termsofuse.forcemajeureheader')}</h3>{t('termsofuse.forcemajeuretext')}
      <h3>{t('termsofuse.amendmentoftheagreementheader')}</h3>{t('termsofuse.amendmentoftheagreementtext')}
      <h3>{t('termsofuse.disputeresolutionandapplicablelawheader')}</h3>{t('termsofuse.disputeresolutionandapplicablelawtext')}
      <h3>{t('termsofuse.disclosuretoauthoritiesheader')}</h3>{t('termsofuse.disclosuretoauthoritiestext')}
      <h3>{t('termsofuse.validityoftermsofuseheader')}</h3>{t('termsofuse.validityoftermsofusetext')}
      <br />
      <br />
      </div>
  </div>
)
  }
export default Termsofuse