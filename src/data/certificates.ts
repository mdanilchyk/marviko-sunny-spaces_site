import certSpk1 from "@/assets/cert-spk-1.jpg";
import certSpk2 from "@/assets/cert-spk-2.jpg";
import isoImg2029 from "@/assets/cert-iso-9001-2029.png";

export interface CertificateItem {
  img: string;
  title: string;
}

export const certificateImages: CertificateItem[] = [
  { img: certSpk1, title: "Свидетельство о технической компетентности" },
  { img: certSpk2, title: "Область технической компетентности" },
  {
    img: isoImg2029,
    title: "Сертификат соответствия СТБ ISO 9001-2015 (действителен до 14.05.2029)",
  },
];
