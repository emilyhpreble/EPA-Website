"use client";

import { useEffect } from "react";

// Same Honeybook "Website Placement" widget embedded on the live Wix site —
// pulled from https://emilyprebleauctions.com/contact
const HONEYBOOK_PID = "696e9c6bfc89090007cca755";
const HONEYBOOK_SCRIPT_ID = "hb-widget-script";
const HONEYBOOK_SCRIPT_SRC =
  "https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js";

export function HoneybookForm() {
  useEffect(() => {
    const w = window as unknown as { _HB_?: { pid?: string } };
    w._HB_ = w._HB_ || {};
    w._HB_.pid = HONEYBOOK_PID;

    if (document.getElementById(HONEYBOOK_SCRIPT_ID)) return;
    const script = document.createElement("script");
    script.id = HONEYBOOK_SCRIPT_ID;
    script.type = "text/javascript";
    script.async = true;
    script.src = HONEYBOOK_SCRIPT_SRC;
    document.body.appendChild(script);
  }, []);

  return <div className={`hb-p-${HONEYBOOK_PID}-1`} />;
}
