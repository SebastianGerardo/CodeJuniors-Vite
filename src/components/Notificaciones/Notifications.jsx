import React, { useEffect, useState } from "react";
import "./Notification.css";
import NotificationData from "./NotificationData/Notifications";

export default function Notifications() {
  
  return (
    <div className="notification-section">
      <div className="notification-section-center">
        <section className="notification_message">
          <h1 className="logo logo-chat">
            Dev<span className="logo-extend logo-extend_banner ">Juniors</span>
          </h1>
        </section>
        <section className="notification_render">
          <NotificationData />
        </section>
      </div>
    </div>
  );
}
