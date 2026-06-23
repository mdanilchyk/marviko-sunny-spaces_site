import WindowsPageContent from "@/components/windows/WindowsPageContent";

/** Legacy page — kept during migration; route /windows redirects to /windows-pvh. */
const WindowsPage = () => <WindowsPageContent seoPath="/windows" path="/windows" />;

export default WindowsPage;
