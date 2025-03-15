import React from "react";

export default function Location() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d621702.2482000459!2d12.765408979877098!3d52.50584812012689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin!5e0!3m2!1sde!2sde!4v1741998371158!5m2!1sde!2sde"
        width="200"
        height="200"
        style={{ border: '0', borderRadius: '20px'}} 
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
