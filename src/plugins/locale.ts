// Core
import { createI18n } from 'vue-i18n'
// Modules languages
import english from '@/languages/en'
import vietnamese from '@/languages/vi'
// Others
import { LOCALE } from '@/enums/locale.enum'
// import validationMessagesEnglish from 'vee-validate/dist/locale/en'
// import validationMessagesVietnamese from 'vee-validate/dist/locale/vi'

const dictionary: any = {
  vi: {
    required: 'Vui lòng nhập vào mục {_field_}.', // override 'required' rule.
    required_choose: 'Vui lòng nhập chọn một {_field_}.',
    required_multi_choose: 'Vui lòng nhập chọn ít nhất một {_field_}.',
    min: 'Vui lòng nhập từ {length} ký tự trở lên.',
    max: 'Vui lòng nhập trong phạm vi {length} ký tự.',
    min_multi: 'Vui lòng chọn tối thiểu {length} {_field_}.',
    max_multi: 'Vui lòng chỉ chọn tối đa {length} {_field_}.',
    required_file: 'Vui lòng chọn file {_field_}.',
    required_editor: 'Vui lòng nhập vào mục {_field_}.',
    required_image: 'Vui lòng tải ảnh.',
    not_emoji: 'Vui lòng không nhập các ký tự emoji.',
    valid_url: 'URL không đúng định dạng.',
    half_width: 'Vui lòng chỉ nhập các ký tự, ký tự chữ và số half-width.',
    full_width: 'Vui lòng chỉ nhập các ký tự full-width.',
  },
  en: {
    required: 'Please enter {_field_}.', // override 'required' rule.
    required_choose: 'Please enter select one {_field_}.',
    required_multi_choose: 'Please enter at least one {_field_}.',
    min: 'Please enter {length} characters or more.',
    max: 'Please enter within {length} characters.',
    min_multi: 'Please choose at least {length} {_field_}.',
    max_multi: 'Please select only up to {length} {_field_}.',
    required_editor: 'Please enter {_field_}.',
    required_image: 'Please upload pictures.',
    not_emoji: 'Please do not enter emoji characters.',
    valid_url: 'The URL is malformed.',
    half_width: 'Please enter only alphanumeric characters and half-width.',
    full_width: 'Please enter only full-width characters.',
  },
}

const messages: any = {
  vietnamese: {
    ...vietnamese,
    validation: {
      // ...validationMessagesVietnamese.messages,
      ...dictionary.vi,
    },
  },
  english: {
    ...english,
    validation: {
      // ...validationMessagesEnglish.messages,
      ...dictionary.en,
    },
  },
}

const i18n = createI18n({
  locale: LOCALE.vi, // set locale
  fallbackLocale: LOCALE.en,
  messages,
})

export default i18n
