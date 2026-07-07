import DoorsPageContent from "@/components/doors/DoorsPageContent";
import { DOORS_PVH_HERO } from "@/components/doors/doorsPageData";

const DoorsPvhPage = () => (
  <DoorsPageContent seoPath="/doors-pvh" path="/doors-pvh" hero={DOORS_PVH_HERO} showDoorTypes showLamination />
);

export default DoorsPvhPage;
