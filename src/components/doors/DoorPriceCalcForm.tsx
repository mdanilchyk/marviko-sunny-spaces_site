import PriceCalcForm, { type PriceCalcFormTheme, type PriceCalcVariant } from "@/components/PriceCalcForm";

export type DoorPriceCalcVariant = Extract<PriceCalcVariant, "doors-pvh" | "doors-alu">;

interface DoorPriceCalcFormProps {
  variant: DoorPriceCalcVariant;
  className?: string;
  compact?: boolean;
  theme?: PriceCalcFormTheme;
  showTrustLine?: boolean;
}

/** Door quote form — width, height, phone (block 02 / 12). */
const DoorPriceCalcForm = (props: DoorPriceCalcFormProps) => <PriceCalcForm {...props} />;

export default DoorPriceCalcForm;
