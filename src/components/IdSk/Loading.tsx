import Alert from './Alert';
import { useTranslation } from 'react-i18next';

const Loading = () => {
  const { t } = useTranslation();

  return (
    <Alert type="info">
      <div style={{ padding: '5px 10px' }}>{t('common.loading')}</div>
    </Alert>
  );
};

export default Loading;
