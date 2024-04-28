export const useSidebar = () => {
    const isOpen = useState('overlay:sidebar', () => false);

    const toggleSidebar = () => {
        isOpen.value = !isOpen.value;
    };

    return [isOpen, toggleSidebar] as [Ref<boolean>, () => void];
};
