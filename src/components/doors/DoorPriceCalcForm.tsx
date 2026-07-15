import PriceCalcForm, { type PriceCalcFormTheme, type PriceCalcVariant } from "@/components/PriceCalcForm";
import type { GtmFormType } from "@/lib/gtm";

export type DoorPriceCalcVariant = Extract<PriceCalcVariant, "doors-pvh" | "doors-alu">;

interface DoorPriceCalcFormProps {
  variant: DoorPriceCalcVariant;
  className?: string;
  compact?: boolean;
  theme?: PriceCalcFormTheme;
  showTrustLine?: boolean;
  formType?: GtmFormType;
}

/** Door quote form — width, height, phone (block 02 / 12). */
const DoorPriceCalcForm = ({ formType = "door_quote", ...props }: DoorPriceCalcFormProps) => (
  <PriceCalcForm {...props} formType={formType} />
);

export default DoorPriceCalcForm;
