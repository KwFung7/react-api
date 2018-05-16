import React from 'react'
import { t } from '../modules/I18n';
import moment from 'moment';

const CopyrightFooter = (props) =>
<div className="container-fluid text-center copyright-footer">
  {t('copyright').replace("[currentYear]", moment().year())}
</div>;

export default CopyrightFooter