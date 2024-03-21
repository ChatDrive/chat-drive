import { defineStore } from 'pinia';
// import { darkTheme } from 'naive-ui';
// import { sessionStg } from '@/utils';
import { getNaiveThemeOverrides, initThemeSettings } from './helpers';

type ThemeState = Theme.Setting;

defineStore('theme-store', {
  state: (): ThemeState => initThemeSettings(),
  getters: {
    /** naiveUI的主题配置 */
    naiveThemeOverrides(state) {
      const overrides = getNaiveThemeOverrides({
        primary: state.themeColor,
        ...state.otherColor,
      });

      return overrides;
    },
  },
});
