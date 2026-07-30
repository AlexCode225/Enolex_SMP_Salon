import { TextInputProps, TouchableOpacityProps } from "react-native";


declare interface Service {
  id: number;
  name: string;              // e.g. "Hairline Restoration"
  description?: string;
  durationMinutes: number;   // how long the session takes
  price: number;             //  currency
}

declare interface Client {
  id: number;
  fullName: string;
  email: string;
  phone?: string;
  profileImageUrl?: string;
}
declare interface ButtonProps extends TouchableOpacityProps {
  title: string;
  bgVariant?: "primary" | "secondary" | "danger" | "outline" | "success";
  textVariant?: "primary" | "default" | "secondary" | "danger" | "success";
  IconLeft?: React.ComponentType<any>;
  IconRight?: React.ComponentType<any>;
  className?: string;
}



declare interface Appointment {
  id: number;
  clientId: number;
  serviceId: number;
  scheduledAt: string;       // ISO date string
  status: "pending" | "confirmed" | "completed" | "cancelled";
  notes?: string;
}

declare interface Payment {
  id: number;
  clientId: number;
  appointmentId: number;
  amount: number;
  method: "card" | "cash" | "eft";
  status: "pending" | "paid" | "failed";
  createdAt: string;
}

// ✅ Input props for reusable form fields
declare interface MyInputProps {
  label: string;
  type?: "text" | "email" | "password" | "number";
  placeholder?: string;
  value?: string;
  onChange?: (val: string) => void;
  error?: string;
  className?: string;
}
