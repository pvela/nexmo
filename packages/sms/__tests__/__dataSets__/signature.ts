import { AlgorithmTypes } from '@vonage/auth';

export default [
  {
    expected: true,
    params: {
      'message-timestamp': '2013-11-21 15:27:30',
      messageId: '020000001B0FE827',
      msisdn: '14843472194',
      text: 'Test again',
      timestamp: '1385047698',
      to: '13239877404',
      type: 'text',
    },
    algorithm: AlgorithmTypes.md5hash,
    signature: 'd2e7b1dc968737c5998ad624e02f90b7',
    signatureSecret: 'my_secret_key_for_testing',
  },
  {
    expected: true,
    params: {
      'message-timestamp': '2013-11-21 15:27:30',
      messageId: '020000001B0FE827',
      msisdn: '14843472194',
      text: 'Test again',
      timestamp: '1385047698',
      to: '13239877404',
      type: 'text',
    },
    algorithm: AlgorithmTypes.md5hmac,
    signature: 'DDEBD46008C2D4E93CCE578A332A52D5',
    signatureSecret: 'my_secret_key_for_testing',
  },
  {
    expected: true,
    params: {
      'message-timestamp': '2013-11-21 15:27:30',
      messageId: '020000001B0FE827',
      msisdn: '14843472194',
      text: 'Test again',
      timestamp: '1385047698',
      to: '13239877404',
      type: 'text',
    },
    algorithm: AlgorithmTypes.sha1hmac,
    signature: '27D0D05C2876C7CB1720DBCDBA4D492E1E55C09A',
    signatureSecret: 'my_secret_key_for_testing',
  },
  {
    expected: true,
    params: {
      'message-timestamp': '2013-11-21 15:27:30',
      messageId: '020000001B0FE827',
      msisdn: '14843472194',
      text: 'Test again',
      timestamp: '1385047698',
      to: '13239877404',
      type: 'text',
    },
    algorithm: AlgorithmTypes.sha256hmac,
    signature:
      'DDB8397C2B90AAC7F3882D306475C9A5058C92322EEF43C92B298B6E0FC0D330',
    signatureSecret: 'my_secret_key_for_testing',
  },
  {
    expected: true,
    params: {
      'message-timestamp': '2013-11-21 15:27:30',
      messageId: '020000001B0FE827',
      msisdn: '14843472194',
      text: 'Test again',
      timestamp: '1385047698',
      to: '13239877404',
      type: 'text',
    },
    algorithm: AlgorithmTypes.sha512hmac,
    signature: 'E0D3C650F8C9D1A5C174D10DDDBFB003E561F59B265616208B0487C5D819481CD3C311D59CF6165ECD1139622D5BA3A256C0D763AC4A9AD9144B5A426B94FE82',
    signatureSecret: 'my_secret_key_for_testing',
  },
];
