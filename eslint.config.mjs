import eslintPluginReact from 'eslint-plugin-react';
import js from '@eslint/js';
import next from 'eslint-config-next';

export default [
  js.configs.recommended,
  ...next(),
  {
    rules: {
      // ✅ Disable strict quote rules
      'react/no-unescaped-entities': 'off',

      // ✅ Downgrade unused var warnings
      '@typescript-eslint/no-unused-vars': 'warn',

      // ✅ Downgrade missing dependency warning
      'react-hooks/exhaustive-deps': 'warn',

      // (Optional) Allow img tags if you’re not ready for next/image
      '@next/next/no-img-element': 'off',
    },
  },
];
