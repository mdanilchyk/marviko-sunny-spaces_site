import certSpk1 from "@/assets/cert-spk-1.jpg";
import certSpk2 from "@/assets/cert-spk-2.jpg";
import isoImg from "@/assets/cert-iso-9001.jpg";

export interface CertificateItem {
  img: string;
  title: string;
}

export const certificateImages: CertificateItem[] = [
  { img: certSpk1, title: "Свидетельство о технической компетентности" },
  { img: certSpk2, title: "Область технической компетентности" },
  { img: isoImg, title: "Сертификат соответствия СТБ ISO 9001-2015 (действителен до 14.05.2026)" },
];
