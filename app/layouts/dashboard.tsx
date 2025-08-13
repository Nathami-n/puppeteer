import React from "react";
import { Outlet } from "react-router";


export const loader = async () => {
  return {
    ok: true
  }
}
export default function DashboardLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
