import React from "react";
import {
  LayoutDashboard,
  Users,
  Calendar,
  MessageSquare,
  Receipt,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Overview" },
  { icon: Users, label: "Patients", active: true },
  { icon: Calendar, label: "Schedule" },
  { icon: MessageSquare, label: "Message" },
  { icon: Receipt, label: "Transactions" },
];

export const Navigation = () => {
  return (
    <nav className="flex items-center space-x-1">
      {navItems.map(({ icon: Icon, label, active }) => (
        <button
          key={label}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
            active
              ? "bg-emerald-500 text-white"
              : "text-gray-600 hover:bg-gray-50"
          }`}
        >
          <Icon size={18} />
          <span className="text-sm font-medium">{label}</span>
        </button>
      ))}
    </nav>
  );
};
