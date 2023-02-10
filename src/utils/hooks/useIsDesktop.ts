import { computed, Ref, ref } from 'vue';
import styles from '@styles/_const.scss';

const useIsDesktop = (): Ref<boolean> => {
  const mobileWidth = parseInt(styles.desktop, 10);
  const isMobile = ref(window.innerWidth <= mobileWidth);

  computed(() => {
    const resize = () => (isMobile.value = window.innerWidth <= mobileWidth);
    window.addEventListener('resize', resize);

    return () => window.removeEventListener('resize', resize);
  });

  return isMobile;
};

export default useIsDesktop;
