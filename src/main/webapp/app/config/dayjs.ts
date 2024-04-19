import dayjs from 'dayjs/esm';
import customParseFormat from 'dayjs/esm/plugin/customParseFormat';
import duration from 'dayjs/esm/plugin/duration';
import relativeTime from 'dayjs/esm/plugin/relativeTime';

// jhipster-needle-i18n-language-dayjs-imports - JHipster will import languages from dayjs here
import 'dayjs/esm/locale/en';
import 'dayjs/esm/locale/sq';
import 'dayjs/esm/locale/bn';
import 'dayjs/esm/locale/bg';
import 'dayjs/esm/locale/da';
import 'dayjs/esm/locale/nl';
import 'dayjs/esm/locale/fi';
import 'dayjs/esm/locale/fr';
import 'dayjs/esm/locale/de';
import 'dayjs/esm/locale/el';
import 'dayjs/esm/locale/hi';
import 'dayjs/esm/locale/pa-in';
import 'dayjs/esm/locale/si';
import 'dayjs/esm/locale/ta';
import 'dayjs/esm/locale/te';
import 'dayjs/esm/locale/th';
import 'dayjs/esm/locale/vi';

// DAYJS CONFIGURATION
dayjs.extend(customParseFormat);
dayjs.extend(duration);
dayjs.extend(relativeTime);
