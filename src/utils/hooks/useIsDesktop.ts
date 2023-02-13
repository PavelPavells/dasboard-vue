import { onMounted, onBeforeUnmount, Ref, ref } from 'vue';
import styles from '@styles/_const.scss';

const useIsDesktop = (): Ref<boolean> => {
  const mobileWidth = parseInt(styles.desktop, 10);
  const isMobile = ref(window.innerWidth <= mobileWidth);

  const resize = () => (isMobile.value = window.innerWidth <= mobileWidth);

  onMounted(() => {
    window.addEventListener('resize', resize);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', resize);
  });

  return isMobile;
};

export default useIsDesktop;
